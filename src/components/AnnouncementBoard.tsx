import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useAnnouncements } from '../hooks/useAnnouncements';
import { AnnouncementSlide } from './AnnouncementSlide';
import { ANIMATION } from '../config/constants';

export const AnnouncementBoard: React.FC = () => {
  const { announcements, error } = useAnnouncements();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (announcements.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % announcements.length);
    }, ANIMATION.SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [announcements.length]);

  if (error) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-red-100 text-red-800">
        <p className="text-xl">Error loading announcements: {error}</p>
      </div>
    );
  }

  if (announcements.length === 0) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-600">No active announcements</p>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait" initial={false}>
        <AnnouncementSlide
          key={currentIndex}
          announcement={announcements[currentIndex]}
        />
      </AnimatePresence>
    </div>
  );
};