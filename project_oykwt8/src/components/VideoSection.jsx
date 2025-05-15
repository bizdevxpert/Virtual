import React from 'react';
import YouTube from 'react-youtube';

const VideoSection = () => {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  // Extract video ID from the full URL
  const getYoutubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYoutubeId('https://youtu.be/arwVmsA3wR4');

  return (
    <section id="how-it-works" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See How We Transform Your Business</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Watch how our virtual assistant services can help you reclaim your time and focus on growing your business.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          {videoId && (
            <YouTube videoId={videoId} opts={opts} className="w-full" />
          )}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to streamline your operations?</h3>
          <a href="https://app.apollo.io/#/meet/bizdevxperts/30-min" className="btn btn-primary">
            Schedule Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
