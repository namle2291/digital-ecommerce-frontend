import React, { useEffect, useState } from 'react';
import ProductCol from '../Products/Cards/ProductCol';
import SectionHeading from '../Heading/SectionHeading';
import { getProducts } from '../../apis/services/productService';

function FeaturedProduct() {
    const [products, setProducts] = useState<[]>([]);

    const fetchProducts = () => {
        getProducts('/products', { limit: 5 })
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
        fetchProducts();
    }, []);

    return (
        <div className="pb-[30px]">
            <SectionHeading text="Featured Products" />
            <div className="grid grid-cols-4 ml-[-20px]">
                <div className="col-span-1">
                    <div className="grid grid-rows-2">
                        {products &&
                            products
                                .slice(0, 2)
                                .map((product: any, index: number) => (
                                    <ProductCol key={index} product={product} />
                                ))}
                    </div>
                </div>
                <div className="col-span-2 ">
                    {products &&
                        products
                            .slice(2, 3)
                            .map((product: any, index: number) => (
                                <ProductCol
                                    key={index}
                                    product={product}
                                    isLarge={true}
                                />
                            ))}
                </div>
                <div className="col-span-1">
                    <div className="grid grid-rows-2">
                        {products &&
                            products
                                .slice(3, 5)
                                .map((product: any, index: number) => (
                                    <ProductCol
                                        key={index}
                                        product={product}
                                        isLarge={true}
                                    />
                                ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProduct;
