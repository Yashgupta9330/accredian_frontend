import FormDialog from "../common/form/Form";
import Programs from "./Program"
import Table from "./Table";

const Referal : React.FC = () => {
    return (
        <div id="benefits"   className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center px-5 mt-28 w-full max-w-[1360px] max-md:mt-10 max-md:max-w-full">
            <div className="text-3xl font-semibold leading-10 text-center">
                What Are The <span className="text-blue-600">Referral Benefits?</span>
            </div>
            <div className="mt-14 max-w-full w-[1231px] max-md:mt-10">
            <div className="flex justify-end mb-4 pr-6">
            <span className="mr-2">Enrolled</span>
           <div className="w-12 h-6 bg-blue-600 rounded-full p-1 duration-300 ease-in-out">
            <div className="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out translate-x-6"></div>
            </div>
         </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 max-md:flex-col max-md:gap-0">
                <Programs/>
                <Table/>
            </div>
           </div>
           <div className="flex gap-5 items-center justify-center self-end px-7 py-3.5 mt-6 mr-16 text-lg font-semibold leading-4 rounded-lg border border-solid border-zinc-400 text-gray-700 text-opacity-50 max-md:px-5 max-md:mr-2.5">
                <div>Show More</div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0088b98f57ef71e1cf90d3f43259da6a7449b605c771b1ce995e83040a80ac6d?apiKey=c6375cac8ec44817bda5a13b63196755&"
                    className="shrink-0 self-start aspect-[1.67] w-[15px] mt-1"
                />
            </div>
            <FormDialog buttonClassName="justify-center items-center px-16 py-6 mt-6 max-w-full text-xl leading-6 text-center text-white bg-blue-600 rounded-lg w-[236px] max-md:px-5"/>
    
        

        {/* FAQ Content */}

          {/*  <div className="flex flex-col justify-center self-stretch mt-32 bg-blue-600 rounded-xl border border-blue-600 border-solid max-md:mt-10 max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col gap-5 justify-end px-12 py-16 w-full min-h-[210px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8366270acf7d1b16848de9e6e3b65f49f0238b1a046fe38a2161244c137ad435?apiKey=c6375cac8ec44817bda5a13b63196755&"
                        className="object-cover absolute inset-0 size-full"
                    />
                    <div className="flex relative gap-5 max-md:flex-wrap">


                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="80" height="80" rx="12" fill="#E2E8F0" fill-opacity="0.35" />
                            <rect x="4" y="4" width="72" height="72" rx="12" fill="white" />
                            <path d="M61 30.6667C63.5774 30.6667 65.6666 32.756 65.6666 35.3334V44.6667C65.6666 47.2441 63.5774 49.3334 61 49.3334H58.5222C57.374 58.5414 49.519 65.6667 40 65.6667V61C47.7319 61 54 54.732 54 47V33C54 25.2681 47.7319 19 40 19C32.268 19 26 25.2681 26 33V49.3334H19C16.4226 49.3334 14.3333 47.2441 14.3333 44.6667V35.3334C14.3333 32.756 16.4226 30.6667 19 30.6667H21.4777C22.626 21.4587 30.4809 14.3334 40 14.3334C49.519 14.3334 57.374 21.4587 58.5222 30.6667H61ZM30.1053 48.8315L32.579 44.8737C34.7304 46.2212 37.2742 47 40 47C42.7258 47 45.2696 46.2212 47.4209 44.8737L49.8947 48.8315C47.0261 50.6281 43.6344 51.6667 40 51.6667C36.3656 51.6667 32.9739 50.6281 30.1053 48.8315Z" fill="#1A73E8" />
                        </svg>

                        <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit max-md:max-w-full">
                            <div className="text-3xl font-semibold leading-9 text-white max-md:max-w-full">
                                Want to delve deeper into the program?
                            </div>
                            <div className="mt-4 text-lg font-medium leading-7 text-neutral-100 max-md:max-w-full">
                                Share your details to receive expert insights from our program
                                team!
                            </div>
                        </div>
                    </div>
                    <div className="flex relative gap-1.5 justify-center self-end px-9 py-4 mt-6 text-xl font-semibold leading-7 text-center text-blue-500 bg-white rounded-lg max-md:px-5">
                        <div className="grow my-auto">Get in touch</div>
                        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg>
                    </div>
                </div>
            </div> */}
        </div>
        </div>);
}

export default Referal;