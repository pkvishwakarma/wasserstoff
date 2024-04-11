// Pankaj Vishwakarma:10/04/2024 : SplaceScreen Component Starts..
"use client"
import Link from "next/link";

export default function SplaceScreen() {
    return (
        <div className="bg-[#FFF4DF] w-full h-screen overflow-hidden">
            {/* Pankaj Vishwakarma:10/04/2024 : Heading Container.. */}
            <div className="pt-12 ps-8 mb-10">
                <div className="flex items-center"><img src="/images/splacescreen/EmlblemSplaceScreenLogo.png" alt="logoImg" className="md:lg:xl:w-[48px] sm:w-[30px]" /><span className="md:lg:xl:ms-2 md:lg:xl:text-4xl text-black font-bold sm:text-2xl sm:ms-2">Astrix.</span></div>
            </div>
            {/* Pankaj Vishwakarma:10/04/2024 : Image and Word JSX Elements Start.. */}
            <div className="flex flex-col ms-40 me-10">
                <div className="w-[69vw] overflow-hidden">
                    <div className="flex text-6xl font-bold font-[monospace] items-center w-screen mb-4">WE<img src="/images/splacescreen/Frame1.png" alt="frameimg1" className="w-[378px] h-[60px] ms-4" /><span className="splaceEffect1 bg-[#FFF4DF] ps-3">ORGANIZE THE</span></div>
                    <div className="flex text-6xl font-bold font-[monospace] items-center w-screen mb-4">CONNECTION <img src="/images/splacescreen/Frame2.png" alt="frameimg2" className="w-[520px] h-[60px] ms-4" /><span className="splaceEffect2 bg-[#FFF4DF] ps-3 w-52 h-16"></span></div>
                </div>
                <div className="w-[69vw]">
                    <div className="flex text-6xl font-bold font-[monospace] items-center w-screen mb-4"><img src="/images/splacescreen/Frame3.png" alt="frameimg3" className="w-[360px] h-[60px]" /><div className="splaceEffect3 bg-[#FFF4DF] flex ps-3 -m-[80px]">BETWEEN <img src="/images/splacescreen/Frame4.png" alt="frameimg4" className="w-[150px] h-[60px] ms-4 me-4" /> MUSIC</div></div>
                    <div className="flex text-6xl font-bold font-[monospace] items-center w-screen mb-4">ARTIST<img src="/images/splacescreen/Frame5.png" alt="frameimg5" className="w-[250px] h-[60px] ms-4" /><span className="splaceEffect4 flex bg-[#FFF4DF] ps-3">CULTURE <img src="/images/splacescreen/Frame6.png" alt="frameimg6" className="w-[320px] h-[60px] ps-3" /></span><span className="splaceEffect5 bg-[#FFF4DF] ps-3 w-52 h-16 -m-[157px]"></span></div>
                    <div className="flex text-6xl font-bold font-[monospace] items-center w-screen"><img src="/images/splacescreen/Frame7.png" alt="frameimg7" className="w-[267px] h-[60px]" /><span className="splaceEffect6 flex bg-[#FFF4DF] ps-3 -m-[85px]">ART<img src="/images/splacescreen/Frame8.png" alt="frameimg8" className="w-[150px] h-[60px] pe-3" />& COLLECTIONS</span></div>
                </div>
            </div>
            {/* Pankaj Vishwakarma:10/04/2024 : Image and Word JSX Element End.. */}

            {/* Pankaj Vishwakarma:10/04/2024 : Image and Word Animation Starts.. */}
            <style jsx>
                {`
                 .splaceEffect1{
                     margin:0px;
                     animation:slideEffect1 3s infinite ease-in-out;
                     animation-direction: alternate;
                    }
                    @keyframes slideEffect1{
                        0%{
                            margin-left:0px;
                    }
                    20%{
                        margin-left:0px;
                    }
                    80%{
                        margin-left:-115px;
                    }
                    100%{
                        margin-left:-115px;
                    }
                 }
                 
                 .splaceEffect2{
                     margin:0px;
                     animation:slideEffect2 3s infinite ease-in-out;
                     animation-direction: alternate;
                    }
                 @keyframes slideEffect2{
                     0%{
                         margin-left:0px
                    }
                    20%{
                        margin-left:0px;
                    }
                    80%{
                        margin-left:-150px;
                    }
                    100%{
                        margin-left:-150px;
                    }
                }
                
                .splaceEffect3{
                    margin-left:-80px;
                    animation:slideEffect3 3s infinite ease-in-out;
                    animation-direction: alternate;
                }
                @keyframes slideEffect3{
                    0%{
                        margin-left:-80px;
                    }
                    20%{
                        margin-left:-80px;
                    }
                    80%{
                        margin-left:0px;
                    }
                    100%{
                        margin-left:0px;
                    }
                }
                
                .splaceEffect4{
                    margin:0px;
                    animation:slideEffect4 3s infinite ease-in-out;
                    animation-direction: alternate;
                }
                @keyframes slideEffect4{
                    0%{
                        margin-left:0px;
                    }
                    20%{
                        margin-left:0px;
                    }
                    80%{
                        margin-left:-80px;
                    }
                    100%{
                        margin-left:-80px;
                    }
                }
                
                .splaceEffect5{
                    margin-left:-157px;
                    animation:slideEffect5 3s infinite ease-in-out;
                    animation-direction: alternate;
                }
                @keyframes slideEffect5{
                    0%{
                        margin-left:-157px
                    }
                    20%{
                        margin-left:-157px;
                    }
                    80%{
                        margin-left:0px;
                    }
                    100%{
                        margin-left:0px;
                    }
                }
                
                .splaceEffect6{
                    margin:-85px;
                    animation:slideEffect6 3s infinite ease-in-out;
                    animation-direction: alternate;
                }
                @keyframes slideEffect6{
                    0%{
                        margin-left:-85px;
                    }
                    20%{
                        margin-left:-85px;
                    }
                    80%{
                        margin-left:0px;
                    }
                    100%{
                        margin-left:0px;
                    }
                 }
                 `}
            </style>
            {/* Pankaj Vishwakarma:10/04/2024 : Image and Word Animation End.. */}
            
            {/* Pankaj Vishwakarma:10/04/2024 : Home Page Route Link.. */}
            <div className="text-center mt-[60px] text-2xl text-semibold">
                <Link href={'/'}>
                    <svg class="h-10 w-10 p-2 text-red-800 bg-orange-300 rounded-full m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}