import React, { useEffect, useRef } from 'react';
import type { BaseAnnouncementProps } from '../announcement/types';
import { QRCode } from '../announcement/QRCode';
import { motion } from 'framer-motion';
import { textVariants } from '../announcement/animations';

const createSnowflakes = (container: HTMLDivElement) => {
  const numberOfSnowflakes = 50;
  
  for (let i = 0; i < numberOfSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    
    const size = Math.random() * 4 + 2;
    const startingX = Math.random() * window.innerWidth;
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 2;
    
    Object.assign(snowflake.style, {
      width: `${size}px`,
      height: `${size}px`,
      left: `${startingX}px`,
      top: '-10px',
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    });
    
    container.appendChild(snowflake);
  }
};

export const ChristmasTheme: React.FC<BaseAnnouncementProps> = ({ announcement }) => {
  const snowfallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (snowfallRef.current) {
      createSnowflakes(snowfallRef.current);
    }

    const interval = setInterval(() => {
      if (snowfallRef.current) {
        const snowflakes = snowfallRef.current.getElementsByClassName('snowflake');
        if (snowflakes.length < 50) {
          createSnowflakes(snowfallRef.current);
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-red-700 to-red-900 text-white overflow-hidden">
      <div ref={snowfallRef} className="snowfall absolute inset-0 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-16">
        <motion.div
          variants={textVariants}
          custom={0}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {announcement.headingText && (
            <h1 className="text-8xl font-bold mb-8 text-white drop-shadow-lg">
              {announcement.headingText}
            </h1>
          )}
          
          {announcement.subheadingText && (
            <h2 className="text-4xl mb-8 text-white/90">
              {announcement.subheadingText}
            </h2>
          )}
          
          {announcement.bodyText && (
            <p className="text-2xl mb-12 text-white/80">
              {announcement.bodyText}
            </p>
          )}
          
          {announcement.ctaText && (
            <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full mt-8">
              <span className="text-2xl text-white">
                {announcement.ctaText}
              </span>
            </div>
          )}
          
          {announcement.smallPrintText && (
            <p className="mt-8 text-sm text-white/70">
              {announcement.smallPrintText}
            </p>
          )}
        </motion.div>
      </div>

      {announcement.qrCodeUrl && <QRCode url={announcement.qrCodeUrl} />}
    </div>
  );
};