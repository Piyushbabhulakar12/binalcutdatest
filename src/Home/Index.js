import React from 'react';
import Faq from '../Component/Faq.js';
import About from './About.js';
import HeroSlider from './HeroSlider.js';
import Process from './Process.js';
import Services from './Services.js';
import Team from './Team.js';
import TextSlider from './TestSlider.js';
import Work from './Work.js';

function Index() {
  return (
    <>
        <HeroSlider />
        <Services />
        <About />
        <TextSlider />
        <Work />
        <Process />
        <Team />
        <Faq />
    </>
  );
}

export default Index;