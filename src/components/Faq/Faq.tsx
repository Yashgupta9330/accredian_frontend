import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const Faq: React.FC = () => {
    const [item, setItem]  = useState("Eligibility");
    const [open1,setOpen1] = useState(false);
    const [open2,setOpen2] = useState(false);
    const faqItems = [
        "Eligibility",
        "How to Use?",
        "Terms & Conditions",
    ];

    return (
        <div id="faq" className="flex flex-col items-center justify-center mt-48 text-2xl font-semibold leading-9 max-md:mt-10">
            <div className="text-center text-5xl">
                Frequently Asked <span className="text-blue-600">Questions</span>
            </div>

            <div className="flex items-center justify-center w-[90%] mt-16 max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="flex flex-col gap-2.5 max-md:w-full">
                {faqItems.map((faqItem) => (
                        <div
                            key={faqItem}
                            className={`px-12 py-5 text-center cursor-pointer capitalize rounded-lg border-2 border-solid max-md:px-5 ${
                                item === faqItem
                                    ? "border-slate-200 shadow-lg text-blue-600"
                                    : "border-neutral-500 text-neutral-500"
                            } leading-[167%]`}
                            onClick={() => setItem(faqItem)}
                        >
                            {faqItem}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col ml-16 w-[76%] max-md:ml-0 max-md:w-full">
                    <div className="text-black text-opacity-90 max-md:mt-10 max-md:max-w-full">
                        <div className="flex items-center gap-5 mb-10">
                            <div className="flex-auto text-lg font-semibold leading-7 text-blue-600">
                                Do I need to have prior Product Management and Project Management experience to enroll in the program?
                            </div>
                            {open1==true? <FaChevronUp className="font-semibold text-lg" onClick={()=>setOpen1(!open1)}/> : <FaChevronDown className="font-semibold text-7xl md:text-lg" onClick={()=>setOpen1(!open1)}/>}
                        </div>

                        <div className={`text-base leading-6 mb-10 mt-8 ${open1==false?'hidden':""}`}>
                            No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.
                        </div>


                        <div className="flex items-center gap-5">
                            <div className="flex-auto text-lg font-semibold leading-7">
                                What is the minimum system configuration required?
                            </div>
                           {open2==true? <FaChevronUp onClick={()=>setOpen2(!open2)}/> : <FaChevronDown onClick={()=>setOpen2(!open2)}/>}
                        </div>
                        
                        <div className={`text-base leading-6 mb-10 mt-8 ${open2==false?'hidden':""}`}>
                            No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
