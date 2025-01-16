import React from 'react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';

interface QRCodeProps {
  url?: string;
}

const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const QRCode: React.FC<QRCodeProps> = ({ url }) => {
  // Return null if no URL is provided or if it's not valid
  if (!url || !isValidUrl(url)) return null;

  return (
    <motion.div
      className="absolute bottom-8 right-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="rounded-lg overflow-hidden">
        <QRCodeSVG
          value={url}
          size={120}
          bgColor="white"
          fgColor="black"
          level="L"
          includeMargin={true}
        />
      </div>
    </motion.div>
  );
};