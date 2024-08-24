
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { LuArrowBigDownDash } from "react-icons/lu";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Custom Hook for Advanced Scroll Animation
const useAdvancedScrollAnimation = ({ triggerSelector, animationConfig, scrollTriggerConfig }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(triggerSelector);

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        animationConfig.from,
        {
          ...animationConfig.to,
          scrollTrigger: {
            trigger: element,
            start: scrollTriggerConfig.start || 'top 90%',
            end: scrollTriggerConfig.end || 'bottom 0%',
            scrub: scrollTriggerConfig.scrub || true,
            markers: scrollTriggerConfig.markers || false,
            pin: scrollTriggerConfig.pin || false,
            anticipatePin: scrollTriggerConfig.anticipatePin || 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [triggerSelector, animationConfig, scrollTriggerConfig]);
};






export default function About(){

    useAdvancedScrollAnimation({
        triggerSelector: '.animateSection2',
        animationConfig: {
          from: { opacity: 0, scale: 0.5 },
          to: { opacity: 1, scale: 1 },
        },
        scrollTriggerConfig: {
          start: 'top 90%',
          end: 'bottom 0%',
        },
      });


    return(<>

<div className="App">
   <div class=" h-screen dark:bg-gray-800 ">

<div
    class="items-center max-w-screen-xl px-8  py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
    <div class="col-span-2 mb-8">
        <p class="text-4xl cursor-pointer hover:text-purple-800 transition font-medium text-purple-500 dark:text-purple-500">Amit Ram</p>
        <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
        MERN Stack Developer</h2>
        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Passionate and detail-oriented MERN Stack Developer with a strong foundation in MongoDB, Express.js, React, and Node.js. I thrive in creating dynamic and scalable web applications, blending cutting-edge technology with innovative solutions. My experience spans full-stack development, where I’ve successfully built and maintained both frontend and backend systems, ensuring seamless user experiences and robust functionality.</p>
        <div class="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
            <div  >
                <a href="#"
                    class="inline-flex items-center text-6xl font-medium text-purple-500 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                    CV
                    <svg class="w-10 h-5 ml-1  " fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>

        </div>
    </div>
    <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
        <div>
            <svg class="w-10 h-10 mb-2 text-purple-500 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                    clip-rule="evenodd"></path>
            </svg>
            <h3 class="mb-2 text-2xl font-bold dark:text-white">99.99% uptime</h3>
            <p class="font-light text-gray-500 dark:text-gray-400">For Landwind, with zero maintenance downtime</p>
        </div>
        <div>
            <svg class="w-10 h-10 mb-2 text-purple-500 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z">
                </path>
            </svg>
            <h3 class="mb-2 text-2xl font-bold dark:text-white">600M+ Users</h3>
            <p class="font-light text-gray-500 dark:text-gray-400">Trusted by over 600 milion users around the world
            </p>
        </div>
        <div>
            <svg class="w-10 h-10 mb-2 text-purple-500 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                    clip-rule="evenodd"></path>
            </svg>
            <h3 class="mb-2 text-2xl font-bold dark:text-white">100+ countries</h3>
            <p class="font-light text-gray-500 dark:text-gray-400">Have used Landwind to create functional websites
            </p>
        </div>
        <div>
            <svg class="w-10 h-10 mb-2 text-purple-500 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
                </path>
            </svg>
            <h3 class="mb-2 text-2xl font-bold dark:text-white">5+ Million</h3>
            <p class="font-light text-gray-500 dark:text-gray-400">Transactions per day</p>
        </div>
    </div>
</div>
</div>

<div className="animateSection2" style={{ height: '100vh', background: '#6f61ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Another animated section</h2>
      </div>


    </div>
    </>)
}