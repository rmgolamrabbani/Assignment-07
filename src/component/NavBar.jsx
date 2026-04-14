import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav class="sticky top-0 z-50 bg-base-100/70 backdrop-blur-2xl py-3 px-8 border-b border-white/10">
                <div class="flex justify-between items-center">

                    <a class="flex items-center gap-1 group" href="/">
                        <span class="text-2xl text-white font-bold tracking-tight">Keen<span class="text-[#2aa078]">Keeper</span></span>
                    </a>

                    <button class="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle menu">
                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" height="1.5em" width="1.5em"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                    </button>

                    <ul class="hidden md:flex text-white gap-2 items-center">
                        <li>
                            <a class="font-semibold flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral hover:bg-neutral/80 transition-all" href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <a class="font-semibold flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/10 transition-all" href="/timeline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                                Timeline
                            </a>
                        </li>
                        <li>
                            <a class="font-semibold flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/10 transition-all" href="/stats">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                                Stats
                            </a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default NavBar;
