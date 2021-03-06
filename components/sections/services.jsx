import React, { useEffect } from 'react'
import Button from 'components/ui/button'

import { gsap } from 'gsap/dist/gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const ServicesSection = () => {

  useEffect(() => { 

    gsap.from('.services-section h2', {
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        // markers: true
      },
      ease: 'linear',
      y: '50%'
    });

    gsap.from('.services-section .flex', {
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      opacity: 0,
      y: '240px'
    });

  }, [])

  const scrollTo = (section) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: section,
        offsetY: 160,
      }
    });
  }

  return (
    <div className="relative min-h-[480px] flex place-items-center bg-white services-section" id="services">
      <div className="mx-auto max-w-5xl">
        <h2 className="uppercase text-center text-black font-black mb-4 text-[clamp(36px,_15vw,_180px)] leading-tight font-acuminpro">Services</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xs md:max-w-none mx-auto">
          <Button onClick={() => scrollTo('#marketing')}>Visual marketing</Button>
          <Button onClick={() => scrollTo('#decor')}>Decor</Button>
          <Button onClick={() => scrollTo('#vehicle')}>Vehicle customization</Button>
        </div>
      </div>

      <div className="absolute top-[18%] right-[12%] floating z-0 select-none pointer-events-none">
        <img src="/images/icons/icon-ring.png" alt="" width={49} height={49} />
      </div>
      
    </div>
  )
}

export default ServicesSection