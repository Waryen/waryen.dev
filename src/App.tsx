import React from 'react';

export default function App() {
  const openRickRollLink = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  };

  return (
    <div className="flex flex-col items-center w-full py-10 md:py-20 px-5 md:px-10">
      <h1 className="text-red-600 text-5xl md:text-7xl font-bold capitalize mb-10">
        Hello world! 👋
      </h1>
      <div className="flex grow flex-col items-center">
        <p className="text-xl text-center md:text-2xl mb-2">
          My name is Jonathan, I live in Belgium and I'm a software engineer
          working at{' '}
          <a
            href="https://mirahi.io"
            target="_blank"
            className="text-red-600 hover:text-red-400 focus:text-red-400"
          >
            Mirahi.io
          </a>
        </p>
        <p className="text-xl md:text-2xl mb-2">
          Checkout my{' '}
          <a
            target="_blank"
            className="text-red-600 hover:text-red-400 focus:text-red-400"
            href="https://github.com/Waryen"
          >
            Github
          </a>{' '}
          and my{' '}
          <a
            target="_blank"
            className="text-red-600 hover:text-red-400 focus:text-red-400"
            href="https://twitter.com/aka_waryen"
          >
            Twitter
          </a>
        </p>
        <p className="text-xl md:text-2xl">
          I also write blogposts about tech stuff{' '}
          <a
            target="_blank"
            className="text-red-600 hover:text-red-400 focus:text-red-400"
            href="https://garden.mirahi.io"
          >
            over here
          </a>
        </p>
        <figure className="overflow-hidden rounded-full mt-12 w-[250px] md:w-[300px]">
          <img
            onClick={openRickRollLink}
            loading="lazy"
            src="jonathan.png"
            alt="Picture of Jonathan"
          />
        </figure>
      </div>
    </div>
  );
}
