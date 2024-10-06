import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRDisplay = ({ players }) => {
  const localIP = "192.168.0.103";
  const gameURL = `http://${localIP}/game?players=${encodeURIComponent(JSON.stringify(players))}`;

  return (
    <div>
      <p>Scan this QR code to join the game on your mobile device:</p>
      <QRCodeSVG value={gameURL} size={256} /> {/* Use the gameURL here */}
    </div>
  );
};

export default QRDisplay;
