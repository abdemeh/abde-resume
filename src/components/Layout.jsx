import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#050505] text-white md:p-8 md:flex md:justify-center">

            {/* Boxed Wrapper for Desktop */}
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-[1400px] relative z-10">

                {/* Sidebar - Floating Card on Desktop */}
                <aside className="w-full md:w-[380px] lg:w-[420px] flex-shrink-0 
                                  md:h-[calc(100vh-4rem)] md:sticky md:top-8 
                                  md:rounded-[2.5rem] md:border md:border-[#222] md:bg-[#0a0a0a] 
                                  z-50 overflow-hidden bg-[#0a0a0a]">
                    <div className="h-full overflow-y-auto no-scrollbar">
                        <Sidebar />
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 min-w-0 min-h-screen" id="main-content">
                    <div className="px-4 md:px-8 pb-10">
                        <Header />
                        <div className="mt-8">
                            {children}
                        </div>
                    </div>
                </main>

            </div>
        </div>
    );
};

export default Layout;
