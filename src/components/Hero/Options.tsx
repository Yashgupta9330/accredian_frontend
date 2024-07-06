import React, { useState } from 'react';

const Options: React.FC = () => {
    const [activeOption, setActiveOption] = useState<string | null>("refer");
 

    const handleOptionClick = (option: string) => {
        setActiveOption(option);
        const element = document.getElementById(option);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <section>
                {/* Navigation */}
                <div className="bg-white py-4">
                    <div className="mx-auto flex justify-center">
                        <nav
                            className="flex justify-evenly items-center py-4 w-[450px] lg:w-[500px]"
                            style={{
                                borderRadius: '38px',
                                backgroundColor: '#1A73E81C',
                            }}
                        >
                            <a
                                href="#"
                                className={`text-[20px] text-slow-black hover:text-blue-500`}
                                onClick={() => handleOptionClick('refer')}
                            >
                                <div className="relative flex flex-col items-center justify-center text-[#4B4B4B]">
                                    <span>Refer</span>
                                    {activeOption === 'refer' && (
                                        <div className="absolute w-2 h-2 rounded-full bg-blue-600 top-7"></div>
                                    )}
                                </div>
                            </a>
                            <a
                                href="#"
                                className={`text-[20px] text-slow-black hover:text-blue-500`}
                                onClick={() => handleOptionClick('benefits')}
                            >
                                <div className="relative flex flex-col items-center justify-center text-[#4B4B4B]">
                                    <span>Benefits</span>
                                    {activeOption === 'benefits' && (
                                        <div className="absolute w-2 h-2 rounded-full bg-blue-600 top-7"></div>
                                    )}
                                </div>
                            </a>
                            <a
                                href="#"
                                className={`text-[20px] text-slow-black hover:text-blue-500`}
                                onClick={() => handleOptionClick('faq')}
                            >
                                <div className="relative flex flex-col items-center justify-center text-[#4B4B4B]">
                                    <span>FAQ's</span>
                                    {activeOption === 'faq' && (
                                        <div className="absolute w-2 h-2 rounded-full bg-blue-600 top-7"></div>
                                    )}
                                </div>
                            </a>
                            <a
                                href="#"
                                className={`text-[20px] text-slow-black hover:text-blue-500`}
                                onClick={() => handleOptionClick('support')}
                            >
                                <div className="relative flex flex-col items-center justify-center text-[#4B4B4B]">
                                    <span>Support</span>
                                    {activeOption === 'support' && (
                                        <div className="absolute w-2 h-2 rounded-full bg-blue-600 top-8"></div>
                                    )}
                                </div>
                            </a>
                        </nav>
                    </div>
                </div>
            </section>
          
        </>
    );
};

export default Options;
