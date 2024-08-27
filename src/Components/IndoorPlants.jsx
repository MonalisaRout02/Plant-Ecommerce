import React, { useRef } from 'react';

const IndoorPlants = () => {
  
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const handleMouseEnter = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className='flex justify-center '  style={{height:'550px',marginBottom:'120px'}}>
      <div className='w-3/4'>
        <div>
          <h1 className='Text' id='subHeading'>Explore Our Flowering Plant Collection</h1>
        </div>

        <div className='flex ' style={{ marginTop: '50px' }}>
          <div className='flex flex-col gap-3 '>
            <div className='flex flex-row gap-3 h-1/4 overflow-hidden'>
                <div className='relative overflow-hidden group' style={{ width: '30%', objectFit: 'cover', borderRadius: '18px' }}>
                    <img
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:filter "
                    src="./assets/Indoor/2.jpg"
                    alt="indoorplants"
                    style={{ height: '100%' }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-start text-white opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                        <div className="text-center px-4 pb-4">
                            <h3 className="text-lg font-semibold text-left pb-1">Amaryllis</h3>
                            <p className="text-sm text-left">A striking flower known for its large, trumpet shaped ,often blooming in vibrant pinks.</p>
                        </div>
                    </div>
                </div>
             
                <div className='relative overflow-hidden group' style={{ width: '50%', objectFit: 'cover', borderRadius: '18px' }}>
                    <img
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:filter "
                    src="./assets/Indoor/1.jpg"
                    alt="indoorplants"
                    style={{ height: '100%' }}
                     />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-start text-white opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                        <div className="text-center px-4 pb-4">
                            <h3 className="text-lg font-semibold text-left pb-1">Hydrangea</h3>
                            <p className="text-sm text-left">A lush flowering plant with large, round clusters of blooms that change color based on soil pH, symbolizing grace and abundance.</p>
                         </div>
                    </div>
                </div>
                <video
                ref={videoRef1}
                style={{ width: '20%', height: '100%', objectFit: 'cover', borderRadius: '18px' }}
                src='./assets/Indoor/vid1.mp4'
                loop
                muted
                onMouseEnter={() => handleMouseEnter(videoRef1)}
                onMouseLeave={() => handleMouseLeave(videoRef1)}
                />
            </div>
            <div className='flex flex-row gap-3 h-1/4 overflow-hidden'>
                <video
                ref={videoRef2}
                style={{ width: '20%', height: '100%', objectFit: 'cover', borderRadius: '18px' }}
                src='./assets/Indoor/vid22.mp4'
                loop
                muted
                onMouseEnter={() => handleMouseEnter(videoRef2)}
                onMouseLeave={() => handleMouseLeave(videoRef2)}
                />
                <div className='relative overflow-hidden group' style={{ width: '30%', objectFit: 'cover', borderRadius: '18px' }}>
                    <img
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:filter "
                    src="./assets/Indoor/3.jpg"
                    alt="indoorplants"
                    style={{ height: '100%' }}
                     />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-start text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                        <div className="text-center px-4 pb-4">
                            <h3 className="text-lg font-semibold text-left pb-1">Clematis</h3>
                            <p className="text-sm text-left">A climbing plant with star-shaped flowers in a variety of colors.</p>
                        </div>
                    </div>
                </div>
                <div className='relative overflow-hidden group' style={{ width: '50%', objectFit: 'cover', borderRadius: '18px' }}>
                    <img
                    className="object-cover inset-0 w-full h-full transition-all duration-300 ease-in-out group-hover:filter "
                    src="./assets/Indoor/4.jpg"
                    alt="indoorplants"
                    style={{ height: '100%' }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-start text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                        <div className="text-center px-4 pb-4">
                            <h3 className="text-lg font-semibold text-left pb-1">Ranunculus</h3>
                            <p className="text-sm text-left">A delicate flower with layers of paper-thin petals, known for its vibrant colors and representing radiant charm and attractiveness.</p>
                        </div>
                    </div>
                </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndoorPlants;
