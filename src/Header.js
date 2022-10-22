import { useState, useEffect } from 'react';
import axios from 'axios';

function Header() {
  return (
    <div>
        <div class="relative h-64 m-8 overflow-hidden bg-red-500 rounded-lg">
            <div class="absolute z-30 flex w-full h-full">
                <div class="relative z-30 w-5/6 px-6 py-8 text-black md:py-10 md:w-1/2">
                    <h2 class="text-5xl">Star Wars WIKI</h2>
                    <span></span>
                </div>
                <div class="absolute top-0 right-0 flex w-full h-full">
                    <div class="w-1/3 h-full bg-red-500"></div>
                    <div class="relative w-1/3">
                    <svg
                    fill="currentColor"
                    viewBox="0 0 100 100"
                    class="absolute inset-y-0 z-20 h-full text-red-500"
                    >
                        <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
                    </svg>
                    <svg
                    fill="currentColor"
                    viewBox="0 0 100 100"
                    class="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50"
                    >
                        <polygon points="0,0 100,0 50,100 0,100"></polygon>
                    </svg>
                </div>
            </div>
        </div>
        <div class="absolute top-0 right-0 block w-9/12 h-full">
            <img
            alt="StarsWars"
            class="object-cover h-full min-w-full"
            src="https://unsplash.com/photos/cPF2nlWcMY4/download?force=true&w=640"
            />
        </div>
        </div>

    </div>
  );
}

export default Header;
