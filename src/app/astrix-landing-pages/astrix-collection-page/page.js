// Pankaj Vishwakarma:11/04/2024 : Astrix Landing page for both Collection and Event Component Starts..
"use client";
import { useState, useEffect } from 'react';

// Pankaj Vishwakarma:11/04/2024 : Passing Collection and Events Images/Title using Props..
export default function CollectionPage(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    var images = props?.images;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Pankaj Vishwakarma:11/04/2024 : Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [images]);
    return (
        // Pankaj Vishwakarma:11/04/2024 : Slide Show Container Handling on Button Click Event Starts..
        <div className='relative'>
            <div className={`${props.name === 'COLLECTIBLE' ?'text-white font-bold transition-transform duration-1000 ease-in-out':'invisible'}`} style={{ transform: `translateX(${currentIndex * 1}%)` }}><span className='absolute -top-11 left-[29%] flex'><p className='me-40'>Lunar Palace:<br />(ft. kanye west)</p><p className={`${currentIndex === 3 ? 'opacity-0' : 'opacity-100'}`}>Lunar Palace:<br />(ft. kanye west)</p></span></div>
            <div className="w-[365px]"><p className="font-bold text-[#FFFFFF33] text-9xl leading-[118px] break-all ms-4">ASTRIX<br />{props.name}</p></div>
            <div className={`${props.name === 'COLLECTIBLE' ? '-mt-[590px]' : '-mt-[470px]'} w-[62%]`}>
                <div className="w-full overflow-hidden">
                    <div className="flex transition-transform duration-1000 ease-in-out ms-[400px]" style={{ transform: `translateX(-${currentIndex * 60}%)` }}>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`slide-${index}`} className="w-3/5 h-[70vh] me-4" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    // Pankaj Vishwakarma:11/04/2024 : Slide Show Container Handling on Button Click Event End..
    )
}