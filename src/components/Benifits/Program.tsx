
const Programs:React.FC = () => {
    return(
            <div className="flex flex-col w-full lg:w-[23%] max-md:ml-0 items-center justify-center rounded-lg mb-8 md:mb-0">
                <div className="flex flex-col grow text-lg font-semibold leading-7 uppercase max-md:mt-10">
                    <div className="flex gap-5 items-start px-3.5 py-4 text-white bg-blue-600 rounded-lg shadow-lg">
                        <div className="flex-auto">ALL PROGRAMS</div>
                        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg>
                    </div>

                    <div className="flex flex-col px-2 py-7 w-full text-gray-700 bg-white rounded-none shadow-lg cursor-pointer">
                        <div className="flex gap-5 py-1 border-b border-gray-900 pb-2.5">
                            <div className="flex-auto my-auto">Product Management</div>
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </div>

                        <div className="flex gap-5 py-4 border-b border-gray-900 py-2.5">
                            <div className="flex-auto my-auto">Strategy & Leadership</div>
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </div>

                        <div className="flex gap-5 py-4 border-b border-gray-900 py-2.5">
                            <div className="flex-auto my-auto">Business Management</div>
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </div>

                        <div className="flex gap-5 justify-between py-4 border-b border-gray-900 py-2.5">
                            <div className="my-auto">Fintech</div>
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </div>

                        <div className="flex gap-5 py-4 border-b border-gray-900 py-2.5">
                            <div className="flex-auto my-auto">Senior Management</div>
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </div>

                        <div className="flex gap-5 py-4 border-b border-gray-900 py-2.5">
                            <div className="flex-auto my-auto">Data Science</div>
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </div>

                        <div className="flex gap-5 py-4 border-b border-gray-900 py-2.5">
                            <div className="grow">Digital Transformation</div>
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </div>

                        <div className="flex gap-5 py-4">
                            <div className="flex-auto my-auto">Business Analytics</div>
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Programs;