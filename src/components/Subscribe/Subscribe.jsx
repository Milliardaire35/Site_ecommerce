import React from 'react';
import Banner from '../../assets/website/orange-pattern.jpg';

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
}

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            S'abonner à la newsletter
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Entrer votre email"
            className="w-full p-3" 
          />
          <div className="flex justify-center">
            <button
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
            >
                Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe