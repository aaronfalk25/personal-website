"use client";

import { useAppContext } from '@/context';
import "./globals.css";

import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Experience from '@/app/components/Experience';
import Resume from '@/app/components/Resume';

export default function Home () {
    const { theme } = useAppContext();
    return (
        <div className={`${theme === 'dark' ? 'dark-theme' : 'light-theme'} main`}> 
          <Hero/>
          <About/>
          <Experience/>
          <Resume/>
        </div>
    )
}