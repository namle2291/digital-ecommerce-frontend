import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import ProductCol from '../Products/Cards/ProductCol';
import { getProducts } from '../../apis/services/productService';

var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
};

export default function RelatedProduct({ priceFrom }: { priceFrom?: any }) {
    const [products, setProducts] = useState<[]>([]);

    const fetchRelatedProducts = () => {
        let params: any = {};

        if (priceFrom) {
            params['price[gte]'] = priceFrom;
            params.limit = 8;
        }

        getProducts('/products', params)
            .then((res) => {
                if (res.status === 200) {
                    const { data } = res.data;
                    setProducts(data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchRelatedProducts();
    }, []);

    return (
        <>
            {products && (
                <Slider {...settings}>
                    {products.map((product: any, index: number) => (
                        <ProductCol key={index} product={product} />
                    ))}
                </Slider>
            )}
        </>
    );
}
