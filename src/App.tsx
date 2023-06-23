import React from 'react';
import { Links } from './components/Links';
import { About } from './components/About';
import { Title } from './components/Title';

export default function App() {
  return (
    <div className="flex flex-col items-center w-full py-10 md:py-20 px-5 md:px-10">
      <Title />
      <div className="flex grow flex-col items-center">
        <About />
        <Links />
      </div>
    </div>
  );
}
