import React from 'react';
import { Player } from '@dotlottie/player-react'; // Import the dotlottie player

const DotLottieAnimation = ({ src, width = 150, height = 150 }) => {
  return (
    <div>
      <Player
        autoplay
        loop
        src={src} // Path to your .dotlottie file
        style={{ width, height }} // Define the width and height
      />
    </div>
  );
};

export default DotLottieAnimation;
