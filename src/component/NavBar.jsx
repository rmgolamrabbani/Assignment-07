import React, { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-base-100/70 backdrop-blur-2xl py-3 px-8 border-b border-white/10">
            <div className="flex justify-between items-center max-w-7xl mx-auto">


                <a className="flex items-center gap-1 group" href="/">

                    <span className="text-2xl text-white font-bold tracking-tight">
                        Keen<span className="text-[#2aa078]">Keeper</span>
                    </span>
                </a>


                <ul className="hidden md:flex text-white gap-2 items-center">
                    <li>
                        <a className="font-semibold flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral hover:bg-neutral/80 transition-all" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="font-semibold flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/10 transition-all" href="/timeline">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                            Timeline
                        </a>
                    </li>
                    <li>
                        <a className="font-semibold flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/10 transition-all" href="/stats">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-column"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                            Stats
                        </a>
                    </li>
                </ul>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                    ) : (
                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" height="1.5em" width="1.5em"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                    )}
                </button>
            </div>


            {isOpen && (
                <div className="md:hidden mt-4 bg-neutral/90 backdrop-blur-xl rounded-2xl p-4 border border-white/10 animate-in fade-in zoom-in duration-200">
                    <ul className="flex flex-col gap-2 text-white">
                        <li>
                            <a onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors" href="/">
                                Home
                            </a>
                        </li>
                        <li>
                            <a onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors" href="/timeline">
                                Timeline
                            </a>
                        </li>
                        <li>
                            <a onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors" href="/stats">
                                Stats
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;