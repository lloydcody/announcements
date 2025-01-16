import React from 'react';
import type { BaseAnnouncementProps } from '../announcement/types';
import { QRCode } from '../announcement/QRCode';
import { motion } from 'framer-motion';
import { textVariants } from '../announcement/animations';
import { ShieldPlus, Phone, Globe, MapPin } from 'lucide-react';

export const HealthAndSafetyTheme: React.FC<BaseAnnouncementProps> = ({ announcement }) => (
  <div className="relative w-full h-full bg-gradient-to-br from-blue-700 to-blue-900 text-white overflow-hidden">
    <div className="absolute right-0 top-0 w-1/3 h-full bg-white rounded-l-[100px] overflow-hidden">
      <div className="flex flex-col gap-4 p-8">
        {announcement.imageUrl && (
          <div className="w-full aspect-square rounded-full overflow-hidden">
            <img src={announcement.imageUrl} alt="" className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </div>
    
    <div className="relative z-10 p-16 max-w-3xl">
      <motion.div 
        variants={textVariants}
        custom={0}
        initial="hidden"
        animate="visible"
        className="text-left"
      >
        <h1 className="text-7xl font-bold mb-6">{announcement.headingText}</h1>
        {announcement.subheadingText && (
          <h2 className="text-3xl mb-8">{announcement.subheadingText}</h2>
        )}
        {announcement.bodyText && (
          <p className="text-xl mb-12">{announcement.bodyText}</p>
        )}
      </motion.div>

      {(announcement.ctaText || announcement.smallPrintText) && (
        <div className="mt-auto">
          <div className="flex items-center gap-6 text-lg">
            {announcement.ctaText && (
              <>
                <Phone size={24} />
                <span>{announcement.ctaText}</span>
              </>
            )}
          </div>
          {announcement.smallPrintText && (
            <p className="mt-4 text-sm opacity-80">{announcement.smallPrintText}</p>
          )}
        </div>
      )}
    </div>

    <QRCode url={announcement.qrCodeUrl} />
  </div>
);