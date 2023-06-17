import React from 'react'

const Hero = () => {
  return (
    <div className="relative isolate px-6 pt-20 lg:px-8" >
      <div
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true">
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Embrace Design Brilliance
        </h1>
        <p className="mt-6 text-2xl leading-8 text-gray-900">
          <span className='text-red-600'>mazin</span> visuals for <span className='text-red-600'>amazing</span> individuals
        </p>
      </div>
    <div
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
    </div>
  </div>
  )
}

export default Hero