import React from 'react';
import { motion } from 'framer-motion';
import { BaseAnnouncementProps } from '../types';
import { QRCode } from '../../announcement/QRCode';
import { textVariants } from '../animations';

export const StandardAnnouncement: React.FC<BaseAnnouncementProps> = ({ announcement }) => (
  <div className="relative w-full h-full bg-gradient-to-br from-[#5D7EDA] to-[#203468] text-white overflow-hidden">
    {announcement.imageUrl && (
      <motion.div 
        className="absolute top-0 left-0 w-[500px] h-full"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        <img
          src={announcement.imageUrl}
          alt=""
          className="w-full h-full object-contain"
        />
      </motion.div>
    )}
    
    <motion.div 
      className="relative z-10 h-full flex flex-col justify-center ml-[550px] pr-[10%]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h1 className="text-[6rem] leading-[1] tracking-tight font-bold font-poppins mb-8">
        {announcement.headingText}
      </h1>
      
      {announcement.subheadingText && (
        <h2 className="text-[4rem] leading-[1.4] font-light font-poppins mb-16 opacity-90 w-full">
          {announcement.subheadingText}
        </h2>
      )}
      
      {announcement.bodyText && (
        <p className="text-[2.5rem] leading-[1.25] font-light font-poppins mb-20 max-w-[900px] opacity-90">
          {announcement.bodyText}
        </p>
      )}

      {announcement.ctaText && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8"
        >
          <span className="inline-block px-12 py-6 text-[2.25rem] font-bold font-poppins text-white border-[3px] border-[#AD9E6E] rounded-xl">
            {announcement.ctaText}
          </span>
        </motion.div>
      )}

      {announcement.smallPrintText && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-2xl opacity-70 font-poppins"
        >
          {announcement.smallPrintText}
        </motion.p>
      )}
    </motion.div>

    {announcement.qrCodeUrl && <QRCode url={announcement.qrCodeUrl} />}
  </div>
);