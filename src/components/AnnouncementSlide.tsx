import React from 'react';
import { motion } from 'framer-motion';
import type { Announcement } from '../types/announcement';
import { StandardAnnouncement } from './announcement/variants/StandardAnnouncement';
import { ChalkboardAnnouncement } from './announcement/variants/ChalkboardAnnouncement';
import { EmergencyAnnouncement } from './announcement/variants/EmergencyAnnouncement';
import { slideVariants } from './announcement/animations';
import { useImagePreloader } from '../hooks/useImagePreloader';

interface Props {
  announcement: Announcement;
}

export const AnnouncementSlide: React.FC<Props> = ({ announcement }) => {
  const imagesLoaded = useImagePreloader([
    announcement.imageUrl,
    announcement.qrCodeUrl
  ]);

  if (!imagesLoaded) {
    return null;
  }

  const getThemeComponent = () => {
    switch (announcement.theme) {
      case 'Emergency':
        return <EmergencyAnnouncement announcement={announcement} />;
      case 'Chalkboard':
        return <ChalkboardAnnouncement announcement={announcement} />;
      case 'Announcement':
      default:
        return <StandardAnnouncement announcement={announcement} />;
    }
  };

  return (
    <motion.div
      className="w-screen h-screen"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        opacity: { duration: 0.4 }
      }}
    >
      {getThemeComponent()}
    </motion.div>
  );
}