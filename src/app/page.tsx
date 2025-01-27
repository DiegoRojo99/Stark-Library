import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg text-center">
        <Image
          src="/super-woman.svg"
          alt="Super Hero"
          className="mx-auto mb-8"
          width={400}
          height={400}
        />
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Stark Library
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Your gateway to comics, series, events, and more. Dive into your
          favorite stories now.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="/characters"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500 text-lg"
          >
            Explore Characters
          </a>
          {/* <a
            href="/events"
            className="inline-block bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-500 text-lg"
          >
            Discover Events
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;