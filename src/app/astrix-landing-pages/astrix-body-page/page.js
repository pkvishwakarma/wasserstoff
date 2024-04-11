// Pankaj Vishwakarma:10/04/2024 : Astrix Body Component Start..

"use client";
import { useState, useEffect } from "react";
import CollectionPage from "../astrix-collection-page/page";
import Link from "next/link";
import Image from "next/image";

export default function BodyPage() {
    // Pankaj Vishwakarma:10/04/2024 : using State to Handle Component reusability..
    const [eventsActive, setEventsActive] = useState(false);
    const [collectionActive, setCollectionActive] = useState(true);
    const collectionImages = [
        '/images/astrix_body_images/collectionImg/Frame1.png',
        '/images/astrix_body_images/collectionImg/Frame2.png',
        '/images/astrix_body_images/collectionImg/Frame3.png',
        '/images/astrix_body_images/collectionImg/Frame4.png',
    ];
    const eventImages = [
        '/images/astrix_body_images/collectionImg/Frame5.png',
        '/images/astrix_body_images/collectionImg/Frame2.png',
        '/images/astrix_body_images/collectionImg/Frame6.png',
        '/images/astrix_body_images/collectionImg/Frame4.png',
    ]

    useEffect(() => {
    }, [eventsActive, collectionActive])

// Pankaj Vishwakarma:10/04/2024 : Handle Button OnClick Event..
    const toggleEvents = () => {
        setEventsActive(true);
        setCollectionActive(false);
    };

    const toggleCollection = () => {
        setEventsActive(false);
        setCollectionActive(true);
    };
    return (
        <div className="flex bg-[#15181B] w-full h-screen overflow-hidden relative">
            <div>
                <div>
                    {/* Pankaj Vishwakarma:10/04/2024 : Heading Container.. */}
                    <div className="pt-5 ps-4 mb-10">
                        <div className="flex items-center"><Image src="/images/astrix_body_images/astrix_branding_logo.png" alt="logoImg" width={'100'} height={'100'} className="md:lg:xl:w-[48px] sm:w-[30px]" /><span className="md:lg:xl:ms-2 md:lg:xl:text-4xl text-[#FFCA5F] font-bold sm:text-2xl sm:ms-2">Astrix.</span></div>
                    </div>

                    {/* Pankaj Vishwakarma:10/04/2024 : OnClick Component Container.. */}
                    <div>{collectionActive === true ? <CollectionPage images={collectionImages} name={'COLLECTIBLE'} /> : <CollectionPage images={eventImages} name={'EVENTS'} />}</div>

                    {/* Pankaj Vishwakarma:10/04/2024 : Marquee Bar Container.. */}
                    <div className="flex justify-end -mt-[75px]">
                        <span className="bg-[#B9A0FF] w-[1024px] rotate-90">
                            <span className="font-normal text-[#000000] text-2xl">
                                <p className="flex items-center slideEffect1">Event : Oasis Bus tour , JLN Stadium , Delhi <span className="text-5xl mt-3 ms-3 me-3">*</span> Collection Live : Meta Lives , live on astrix</p>
                            </span>
                        </span>
                    </div>
                </div>

                {/* Pankaj Vishwakarma:10/04/2024 : Switch Type Button Container.. */}
                <div className="fixed bottom-10 left-10">
                    <button
                        className={`py-2 px-4 focus:outline-none ${eventsActive ? 'bg-[#484E56] text-white rounded-2xl' : 'bg-[#15181B] text-white'
                            }`}
                        onClick={toggleEvents}
                    >
                        Events
                    </button>
                    <button
                        className={`py-2 px-4 focus:outline-none ${collectionActive ? 'bg-[#484E56] text-white rounded-2xl' : 'bg-[#15181B] text-white'
                            }`}
                        onClick={toggleCollection}
                    >
                        Collection
                    </button>
                </div>

                {/* Pankaj Vishwakarma:10/04/2024 : slide Effect using Css starts Here.. */}
                <style jsx>
                    {`
                        .slideEffect1{
                            margin-left:-90px;
                            animation:slideEff 2s infinite ease-in-out;
                            animation-direction: alternate;
                         }
                         @keyframes slideEff{
                            0%{
                                margin-left:0px;
                            }
                            30%{
                                margin-left:0px;
                            }
                            40%{
                                margin-left:-110px;
                            }
                            80%{
                                margin-left:-180px;
                            }
                            100%{
                                margin-left:-180px;
                            }
                        }   
                        `}
                </style>
                {/* Pankaj Vishwakarma:10/04/2024 : slide Effect using Css Ends Here.. */}

                {/* Pankaj Vishwakarma:10/04/2024 : Home Page Route Link.. */}
                <div className="text-center mt-[60px] text-2xl text-semibold">
                    <Link href={'/'}><svg class="h-10 w-10 p-2 text-red-800 bg-[#FFCA5F] rounded-full m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg></Link>
                </div>
            </div>

            {/* Pankaj Vishwakarma:10/04/2024 : Collectible and Event Side Container Handling based on Button Click Event.. */}
            <div className="md:xl:w-[30vw] h-[95vh] absolute right-10 top-7 font-[monospace] overflow-hidden">
                {collectionActive===true?<div className="text-white">
                    <h2 className="w-1/2 font-black text-base">Explore Your First Collectible</h2>
                    <div className="w-32 font-bold text-3xl my-4">Meta Lives</div>
                    <div className="w-32 w-1/2 font-black text-base my-2">Live in Astrix</div>
                    <p className="w-1/2 font-light text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus a necessitatibus porro obcaecati corrupti.</p>
                    <div className="mt-6 flex items-center"><Image src="/images/astrix_body_images/collectionImg/Frame7.png" alt="frame7" width={'150'} height={'150'} /><p className="w-2/5 font-semibold text-xs">22k peaplr interested</p></div>
                    <div className="mt-6">
                        <p className="mt-4">Collectibles</p>
                        <div className="flex h-[29vh]">
                            <Image src="/images/astrix_body_images/collectionImg/CardcollectionsFrame8.png" alt="cardcollection1" width={'150'} height={'1'} className="me-4" />
                            <Image src="/images/astrix_body_images/collectionImg/CardcollectionsFrame8.png" alt="cardcollection2" width={'150'} height={'1'} className="me-4" />
                            <Image src="/images/astrix_body_images/collectionImg/CardcollectionsFrame8.png" alt="cardcollection3" width={'150'} height={'1'} />
                        </div>
                        <div className="relative"><Image src="/images/astrix_body_images/collectionImg/JoinBtn.png" alt="btn" width={'100'} height={'100'} className="w-[130px] absolute right-16 top-6" /></div>
                    </div>
                </div>
                :
                <div className="text-white">
                    <h2 className="w-1/2 font-black text-base mb-8">Explore Your First Event</h2>
                    <div className="w-42 font-bold text-3xl my-4">Event Name</div>
                    <div className="w-32 w-3/4 font-black text-base my-2 flex items-center"><Image src="/images/astrix_body_images/collectionImg/vanue.png" alt="vanue" width={'10'} height={'10'} className="w-[15px] me-1" /><span>Vanue</span><Image src="/images/astrix_body_images/collectionImg/clock.png" alt="clock" width={'100'} height={'100'} className="w-[15px] ms-4 me-1" /><span>04/03/2024 @19:00</span></div>
                    <p className="w-1/2 font-light text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus a necessitatibus porro obcaecati corrupti.</p>
                    <div className="mt-6">
                        <p className="my-8 font-black text-base">Artist LineUp</p>
                        <div className="flex h-[29vh] items-center">
                            <Image src="/images/astrix_body_images/collectionImg/Frame9.png" alt="cardcollection1" width={'100'} height={'100'} className="h-[20vh]" />
                            <Image src="/images/astrix_body_images/collectionImg/Frame10.png" alt="cardcollection2" width={'100'} height={'100'} className="w-[40%]" />
                            <Image src="/images/astrix_body_images/collectionImg/Frame11.png" alt="cardcollection3" width={'100'} height={'100'} className="h-[20vh]" />
                        </div>
                        <div className="relative">
                        <Image src="/images/astrix_body_images/collectionImg/JoinBtn.png" alt="btn" width={'100'} height={'100'} className="w-[130px] absolute right-16 top-16" />
                        <Image src="/images/astrix_body_images/collectionImg/QrImage.png" alt="btn" width={'100'} height={'100'} className="w-[80px] absolute left-0 top-6" />
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}