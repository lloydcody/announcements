export const debugAnnouncement = (announcement: {
  sequence: number;
  headingText: string;
  active: boolean;
  validFromDate: string;
  expiryDate: string;
  activeOnDays: string[];
}, {
  currentDay,
  currentTime,
  now
}: {
  currentDay: string;
  currentTime: number;
  now: Date;
}) => {
  console.group(`Announcement #${announcement.sequence}: ${announcement.headingText}`);
  console.log('Active:', announcement.active);
  console.log('Valid From:', announcement.validFromDate);
  console.log('Expires:', announcement.expiryDate);
  console.log('Active Days:', announcement.activeOnDays);
  console.log('Current Day:', currentDay);
  console.log('Current Time:', Math.floor(currentTime/60) + ':' + (currentTime%60).toString().padStart(2, '0'));
  console.log('Current Date:', now.toISOString());
  console.groupEnd();
};