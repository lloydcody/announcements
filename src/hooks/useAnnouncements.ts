import { useState, useEffect } from 'react';
import type { Announcement } from '../types/announcement';
import { GOOGLE_SHEETS } from '../config/constants';
import { SHEET_COLUMNS } from '../config/sheetMapping';
import { isTimeInRange, isDateInRange, getCurrentDayShort } from '../utils/dateTime';
import { debugAnnouncement } from '../utils/debug';

export const useAnnouncements = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEETS.SHEET_ID}/values/${GOOGLE_SHEETS.RANGE}?key=${GOOGLE_SHEETS.API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch announcements');
      }

      const data = await response.json();
      const rows = data.values || [];
      
      const parsedAnnouncements: Announcement[] = rows.map((row: any) => ({
        sequence: parseInt(row[SHEET_COLUMNS.SEQUENCE] || '0', 10),
        active: (row[SHEET_COLUMNS.ACTIVE] || '').toLowerCase() === 'true',
        headingText: row[SHEET_COLUMNS.HEADING] || '',
        subheadingText: row[SHEET_COLUMNS.SUBHEADING] || '',
        bodyText: row[SHEET_COLUMNS.BODY] || '',
        ctaText: row[SHEET_COLUMNS.CTA] || '',
        smallPrintText: row[SHEET_COLUMNS.SMALL_PRINT] || '',
        theme: row[SHEET_COLUMNS.THEME] || 'Announcement',
        validFromDate: row[SHEET_COLUMNS.VALID_FROM_DATE] || '',
        expiryDate: row[SHEET_COLUMNS.EXPIRY_DATE] || '',
        activeOnDays: (row[SHEET_COLUMNS.ACTIVE_DAYS] || '').split(',').map((day: string) => day.trim()),
        activeFromTime: row[SHEET_COLUMNS.ACTIVE_FROM_TIME] || '',
        activeToTime: row[SHEET_COLUMNS.ACTIVE_TO_TIME] || '',
        imageUrl: row[SHEET_COLUMNS.QR_CODE_URL] || '', // Changed from IMAGE_URL to QR_CODE_URL
        qrCodeUrl: row[SHEET_COLUMNS.IMAGE_URL] || '' // Changed from QR_CODE_URL to IMAGE_URL
      }));

      setAnnouncements(parsedAnnouncements.sort((a, b) => a.sequence - b.sequence));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch announcements');
    }
  };

  useEffect(() => {
    fetchAnnouncements();
    const interval = setInterval(fetchAnnouncements, 60000);
    return () => clearInterval(interval);
  }, []);

  const isAnnouncementActive = (announcement: Announcement): boolean => {
    if (!announcement.active) return false;
    
    const now = new Date();
    const currentDay = getCurrentDayShort();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    if (!isDateInRange(now, announcement.validFromDate, announcement.expiryDate)) return false;
    if (!announcement.activeOnDays.includes(currentDay)) return false;
    if (!isTimeInRange(currentTime, announcement.activeFromTime, announcement.activeToTime)) return false;

    return true;
  };

  return { announcements: announcements.filter(isAnnouncementActive), error };
};