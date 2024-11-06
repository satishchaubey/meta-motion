'use client'

import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import hero from './Hero.module.css';
import Image from 'next/image';

const HomeMain = () => {
    const [widthState, setWidthState] = useState(window.innerWidth);
    const staticBannerData = {
        main_banner_desktop: [
            // { image: '/images/meta motion logo2.jpg', alt: 'Desktop Banner 1', link: '/', target: '_self' },
            { image: '/images/banner.jpeg', alt: 'Desktop Banner 1', link: '/', target: '_self' },
        ],
        main_banner_mobile: [
            { image: '/images/mobile1.jpg', alt: 'Mobile Banner 1', link: '/', target: '_self' },
        ],
    };

    const [bannerState, setBannerState] = useState(staticBannerData.main_banner_desktop);

    useEffect(() => {
        const handleResize = () => {
            setWidthState(window.innerWidth);
            setBannerState(window.innerWidth < 600 ? staticBannerData.main_banner_mobile : staticBannerData.main_banner_desktop);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="row banner-carousel">
            <Splide
                options={{
                    perPage: 1,
                    arrows: true,
                    pagination: false,
                    autoplay: true,
                    interval: 4000,
                    type: 'loop',
                    speed: 1000,
                }}
            >
                {bannerState.map((item, idx) => (
                    <SplideSlide key={idx}>
                        <Image
                            src={item.image}
                            alt={item.alt}
                            layout="responsive" // or 'fill' depending on your use case
                            width={50} // specify the width
                            height={50} // specify the height
                            className="banner-img"
                        />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default HomeMain;
