import React from 'react';
import { motion } from 'framer-motion';
import { BaseAnnouncementProps } from '../types';
import { textVariants } from '../animations';

const WarningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="279.78px" height="279.78px" viewBox="0 0 399.685 399.685" enableBackground="new 0 0 399.685 399.685" xmlSpace="preserve">
    <g>
      <path fillRule="evenodd" clipRule="evenodd" d="M212.546,37.273c0,0-2.686-6.713-11.413-6.713   c-8.727,0-12.757,6.714-12.757,6.714L10.607,347.261c0,0-4.49,7.651-0.351,14.813c0,0,4.252,7.05,11.302,7.05   c7.047,0,354.45,0,354.45,0s9.502,0.274,13.314-7.161c3.182-6.204,1.632-10.989,0.113-13.874L212.546,37.273z"/>
      <polygon fillRule="evenodd" clipRule="evenodd" fill="#FFF200" points="200.908,64.013 39.794,344.733 359.226,344.733  "/>
      <path fillRule="evenodd" clipRule="evenodd" d="M173.577,147.395l11.413,108.08c0,0,2.685,13.425,13.874,13.425   c13.01,0,14.991-13.201,14.991-13.201l11.86-108.529c0,0-1.457-26.179-25.957-26.179   C173.598,120.99,173.577,147.396,173.577,147.395z"/>
      <circle fillRule="evenodd" clipRule="evenodd" cx="200.093" cy="308.844" r="25.791"/>
    </g>
  </svg>
);

export const EmergencyAnnouncement: React.FC<BaseAnnouncementProps> = ({ announcement }) => (
  <div className="w-full h-full flex flex-col">
    {/* Red section with warning triangle - 2/3 height */}
    <div className="bg-[#E53935] h-2/3 flex flex-col items-center justify-center p-8">
      <div className="mb-12">
        <WarningIcon />
      </div>
      
      {announcement.headingText && (
        <motion.h1
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ 
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2
          }}
          className="text-white text-[12.6rem] font-['Inter'] font-bold uppercase text-center tracking-wider leading-none"
        >
          {announcement.headingText}
        </motion.h1>
      )}
    </div>

    {/* Yellow section with black text - 1/3 height */}
    <div className="bg-[#FFD700] h-1/3 flex flex-col items-center justify-center p-8">
      {announcement.subheadingText && (
        <motion.h2
          variants={textVariants}
          custom={1}
          initial="hidden"
          animate="visible"
          className="text-black text-8xl font-['Inter'] font-bold uppercase text-center mb-6"
        >
          {announcement.subheadingText}
        </motion.h2>
      )}
      
      {announcement.bodyText && (
        <motion.p
          variants={textVariants}
          custom={2}
          initial="hidden"
          animate="visible"
          className="text-black text-6xl font-['Inter'] font-bold uppercase text-center max-w-6xl"
        >
          {announcement.bodyText}
        </motion.p>
      )}
    </div>
  </div>
);