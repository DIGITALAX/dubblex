import React from 'react'

const Hero = (props) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
        <div className='text-white z-[2] p-5 mt-[-10rem]'>
            <h2 className='text-5xl font-bold'>{props.heading}</h2>
            <p className='py-5 text-xl'>{props.message}</p>
            <button className='px-8 py-2 border'>book</button>
        </div>
    </div>
  );
};

export default Hero;