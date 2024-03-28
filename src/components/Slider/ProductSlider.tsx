import React from 'react';
import Slider from 'react-slick';
import ProductCol from '../Products/Cards/ProductCol';

var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
};

export default function ProductSlider({ data }: { data?: any[] }) {
    return (
        <Slider {...settings}>
            <ProductCol />
            <ProductCol />
            <ProductCol />
            <ProductCol />
        </Slider>
    );
}
