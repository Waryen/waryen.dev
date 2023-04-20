import React from 'react';
import Counter from './components/Counter';
import { Board } from './components/tic-tac-toe/Board';

export default function App() {
  return (
    <div className="flex grow flex-col items-center py-10 md:py-20 px-5 md:px-10">
      <h1 className="text-red-600 text-5xl md:text-7xl font-bold capitalize mb-10">
        waryen.dev
      </h1>
      <div className="flex flex-col items-center mb-10">
        <p className="text-xl md:text-2xl mb-3">Hello world! 👋</p>
        <p className="text-md text-center md:text-xl mb-2">
          My name is Jonathan and I'm a software engineer working at{' '}
          <a
            href="https://mirahi.io"
            target="_blank"
            className="text-red-600 hover:text-red-400 focus:text-red-400"
          >
            Mirahi.io
          </a>
        </p>
        <p className="text-md md:text-xl">
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
      </div>
      <Board />
      <Counter />
    </div>
  );
}
