import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#050505] text-white min-[1090px]:p-8 min-[1090px]:flex min-[1090px]:justify-center">

            {/* Boxed Wrapper for Desktop */}
            <div className="flex flex-col min-[1090px]:flex-row gap-6 w-full max-w-[1400px] relative z-10">

                {/* Sidebar - Floating Card on Desktop */}
                <aside className="w-full min-[1090px]:w-[380px] xl:w-[420px] flex-shrink-0 
                                  min-[1090px]:h-[calc(100vh-4rem)] min-[1090px]:sticky min-[1090px]:top-8 
                                  min-[1090px]:rounded-[2.5rem] min-[1090px]:border min-[1090px]:border-[#222] min-[1090px]:bg-[#0a0a0a] 
                                  z-50 overflow-hidden bg-[#0a0a0a]">
                    <div className="h-full overflow-y-auto no-scrollbar">
                        <Sidebar />
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 min-w-0 min-h-screen" id="main-content">
                    <div className="px-4 min-[1090px]:px-8 pb-10">
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
