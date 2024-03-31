import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from '../components/Rate/Rating';
import RadioInput from '../components/Inputs/RadioInput';
import RelatedProduct from '../components/Slider/RelatedProduct';
import { numberFormat } from '../utils/helpers/formatPrice';
import { getProductById } from '../apis/services/productService';

function ProductDetail() {
    const [product, setProduct] = useState<any>({});
    const [thumbnail, setThumbnail] = useState<string>('');

    const [checked, setChecked] = useState<any>({});

    const { id } = useParams();

    const fetchProductById = async (id: any) => {
        const result = await getProductById(`/products/${id}`);
        if (result.status === 200) {
            const { thumbnail, variants } = result.data.data;
            setProduct(result.data.data);
            setThumbnail(thumbnail);
            // set variants
            if (variants.length > 0) {
                variants?.map((v: any) => {
                    let name = v.label.toLowerCase();
                    let value = v.variants[0]['value'];
                    setChecked((prev: any) => ({ ...prev, [name]: value }));
                });
            }
        }
    };

    const handleCheck = useCallback((key: any, value: any) => {
        setChecked((prev: any) => ({ ...prev, [key]: value }));
    }, []);

    useEffect(() => {
        fetchProductById(id);
        window.scroll({ top: 0, behavior: 'smooth' });
    }, [id]);

    useEffect(() => {
        // console.log('>>> checked: ', checked);
    }, [checked]);

    if (Object.keys(product).length <= 0) return <h2>Loading...</h2>;

    return (
        <div>
            <div className="grid grid-cols-2">
                <div className="flex flex-row">
                    <div className="w-[20%]">
                        <ul className="flex flex-col">
                            {product &&
                                product?.images?.map(
                                    (img: any, index: number) => (
                                        <li
                                            key={index}
                                            className="border my-[5px] p-[5px] cursor-pointer w-[94px] h-[94px] overflow-hidden"
                                            onClick={() => setThumbnail(img)}
                                        >
                                            <img
                                                src={img}
                                                alt=""
                                                className="w-full h-full object-contain"
                                            />
                                        </li>
                                    )
                                )}
                        </ul>
                    </div>
                    <div className="w-[80%] border mb-[30px] p-[10px] h-[450px]">
                        <img
                            src={thumbnail}
                            alt="product thumbnail"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
                <div className="pl-[45px]">
                    <div className="mb-[20px] leading-none">
                        <span className="font-semibold text-[30px]">
                            {numberFormat(product?.price)} VND
                        </span>
                    </div>
                    <div className="flex items-center gap-[5px]">
                        <Rating value={5} fs={16} />
                        <span>{product?.raitings.length} review</span>
                    </div>
                    <div className="mt-[20px] mb-[10px]">
                        <ul className="list-disc list-inside flex flex-col gap-[5px]">
                            {product?.description.map(
                                (dsc: any, index: number) => (
                                    <li key={index}>{dsc}</li>
                                )
                            )}
                        </ul>
                    </div>
                    <div>
                        {product?.variants?.map(
                            (variant: any, index: number) => (
                                <div key={index} className="flex items-center">
                                    <span className="font-semibold min-w-[70px] my-[10px]">
                                        {variant.label}
                                    </span>
                                    <div key={index} className="p-[10px] flex">
                                        {variant?.variants?.map(
                                            (item: any, index: number) => (
                                                <RadioInput
                                                    key={index}
                                                    id={`${variant.label}-${item.value}`}
                                                    label={item.value}
                                                    name={variant.label.toLowerCase()}
                                                    checked={checked}
                                                    setChecked={handleCheck}
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                            )
                        )}
                        <div className="uppercase bg-main_color text-center cursor-pointer text-white font-[700] py-[11px] px-[15px]">
                            Add To Cart
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[30px] pt-[50px] border-t-2 border-main_color">
                <RelatedProduct priceFrom={product?.price} />
            </div>
        </div>
    );
}

export default ProductDetail;
