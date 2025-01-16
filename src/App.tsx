import React from 'react';
import { AnnouncementBoard } from './components/AnnouncementBoard';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/permanent-marker/400.css';

// Add Google Fonts preconnect
const Fonts = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link href="https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&family=Fredericka+the+Great&display=swap" rel="stylesheet" />
  </>
);

export default function App() {
  return (
    <>
      <Fonts />
      <AnnouncementBoard />
    </>
  );
}