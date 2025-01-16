import React from 'react';
import { motion } from 'framer-motion';
import { BaseAnnouncementProps } from '../types';
import { QRCode } from '../QRCode';
import { textVariants } from '../animations';

export const ChalkboardAnnouncement: React.FC<BaseAnnouncementProps> = ({ announcement }) => (
  <div className="w-full h-full bg-black text-white flex items-center justify-center">
    <div className="max-w-4xl mx-auto px-4 text-center">
      {announcement.headingText && (
        <motion.h1
          className="text-7xl mb-8 font-fredericka tracking-wide [text-shadow:_0_0_10px_rgba(255,255,255,0.5)]"
          variants={textVariants}
          custom={0}
          initial="hidden"
          animate="visible"
        >
          {announcement.headingText}
        </motion.h1>
      )}

      {announcement.subheadingText && (
        <motion.h2
          className="text-4xl mb-8 font-cabin-sketch [text-shadow:_0_0_8px_rgba(255,255,255,0.5)]"
          variants={textVariants}
          custom={1}
          initial="hidden"
          animate="visible"
        >
          {announcement.subheadingText}
        </motion.h2>
      )}

      {announcement.bodyText && (
        <motion.p
          className="text-2xl mb-12 font-cabin-sketch [text-shadow:_0_0_6px_rgba(255,255,255,0.5)]"
          variants={textVariants}
          custom={2}
          initial="hidden"
          animate="visible"
        >
          {announcement.bodyText}
        </motion.p>
      )}

      {announcement.ctaText && (
        <motion.div
          variants={textVariants}
          custom={3}
          initial="hidden"
          animate="visible"
          className="mt-8"
        >
          <span className="text-3xl font-cabin-sketch [text-shadow:_0_0_8px_rgba(255,255,255,0.6)]">
            {announcement.ctaText}
          </span>
        </motion.div>
      )}

      {announcement.smallPrintText && (
        <motion.p
          variants={textVariants}
          custom={4}
          initial="hidden"
          animate="visible"
          className="mt-8 text-lg font-cabin-sketch opacity-80"
        >
          {announcement.smallPrintText}
        </motion.p>
      )}
    </div>

    {announcement.qrCodeUrl && <QRCode url={announcement.qrCodeUrl} />}
  </div>
);