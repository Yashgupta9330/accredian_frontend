import React from 'react';
import { imgSrc, programs } from "../../data/Benifits/data";

const Table: React.FC = () => {
    return (
        <div className="flex flex-col lg:ml-5 w-full lg:max-w-[70%] md:ml-0 rounded-lg" style={{ backgroundColor: "rgba(235, 243, 255, 0.35)",boxShadow: "0px 4px 29.3px 0px rgba(60, 60, 60, 0.38)"}}>
            <div className="flex flex-col mt-0 max-md:max-w-full">
                <div className="grid grid-cols-7 items-center px-9 py-5 text-xl font-bold leading-6 text-blue-800 rounded-t-lg bg-blue-600 bg-opacity-30 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <div className="header-cell col-span-3">Programs</div> {/* Spanning 2 columns for the first header */}
                    <div className="header-cell text-center col-span-2">Referrer Bonus</div>
                    <div className="header-cell text-center col-span-2">Referee Bonus</div>
                </div>

                {/* Content Rows */}
                <div>
                {programs.map((item, index) => (
                    <div key={index} className="grid grid-cols-7 gap-3 mx-4 py-4 items-center program-row">
                        <div className="flex gap-2 items-center col-span-2 col-span-3"> {/* Spanning 2 columns for the first column */}
                            <img
                                loading="lazy"
                                src={imgSrc}
                                className="shrink-0 w-8 aspect-[1.33]"
                                alt="Program Image" // Alt attribute for accessibility
                            />
                            <div>
                                <div className="font-bold">{item.program}</div>
                            </div>
                        </div>
                        <div className="text-center col-span-2">{item.referrerBonus}</div>
                        <div className="text-center col-span-2">{item.refereeBonus}</div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default Table;
