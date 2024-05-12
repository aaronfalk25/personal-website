"use client";

import { useAppContext } from '@/context';

import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Experience from '@/app/components/Experience';
import Resume from '@/app/components/Resume';
import Contact from '@/app/components/Contact';

export default function Home () {
    const { theme } = useAppContext();

    const toTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className={`${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
          &nbsp;
          <div className='frame'> 
            <Hero/>
            <About/>
            <Experience/>
            <Resume/>
            <Contact/>
            <button onClick={toTop} className="hover:underline">
              Back to top
            </button>
          </div>
        </div>
    )
}