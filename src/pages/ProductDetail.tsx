import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from '../components/Rate/Rating';
import RadioInput from '../components/Inputs/RadioInput';
import ProductSlider from '../components/Slider/ProductSlider';

function ProductDetail() {
    const [sizeChecked, setSizeChecked] = useState('');
    const [colorChecked, setColorChecked] = useState('');

    const { slug } = useParams();

    useEffect(() => {
        // console.log(slug);
    }, [slug]);

    useEffect(() => {
        console.log(sizeChecked, colorChecked);
    }, [sizeChecked, colorChecked]);

    return (
        <div>
            <div className="grid grid-cols-2">
                <div className="flex flex-row">
                    <div className="w-[16%]">
                        <ul className="flex flex-col gap-[5px]">
                            {Array(4)
                                .fill(null)
                                .map((_, index) => (
                                    <li key={index} className="cursor-pointer">
                                        <img
                                            src="https://digital-world-5.myshopify.com/cdn/shop/products/SS7_1_1024x1024.jpg?v=1491405588"
                                            alt=""
                                            className="w-full object-cover"
                                        />
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="w-[83%] border mb-[30px] pl-[20px]">
                        <img
                            src="https://digital-world-5.myshopify.com/cdn/shop/products/SS7_1_1024x1024.jpg?v=1491405588"
                            alt=""
                            className="w-full object-cover"
                        />
                    </div>
                </div>
                <div className="pl-[45px]">
                    <div className="mb-[20px] leading-none">
                        <span className="font-semibold text-[30px]">
                            8.901.407,61 VND
                        </span>
                    </div>
                    <div className="flex items-center gap-[5px]">
                        <Rating value={5} fs={16} />
                        <span>1 review</span>
                    </div>
                    <div className="mt-[20px] mb-[10px]">
                        <ul className="list-disc list-inside flex flex-col gap-[5px]">
                            <li>Technology: GSM / CDMA / HSPA / EVDO / LTE</li>
                            <li>Dimensions: 240 x 169.5 x 6.1 mm</li>
                            <li>Weight: 437 g</li>
                            <li>Display: LED-backlit IPS LCD 9.7 inches</li>
                            <li>Resolution: 1536 x 2048</li>
                            <li>OS: iOS 8.1</li>
                            <li>Chipset: Apple A8X</li>
                            <li>CPU: Triple-core 1.5 GHz Typhoon</li>
                            <li>Internal: 16/32/64/128 GB, 2 GB RAM</li>
                            <li>Camera: 8 MP, f/2.4 - 1.2 MP, f/2.2</li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <span className="font-semibold min-w-[70px] my-[10px]">
                                Size
                            </span>
                            <div className="p-[10px] flex">
                                <RadioInput
                                    id="size-8gb"
                                    checked={sizeChecked}
                                    setChecked={setSizeChecked}
                                    label="8GB"
                                    name="size"
                                />
                                <RadioInput
                                    id="size-16gb"
                                    checked={sizeChecked}
                                    setChecked={setSizeChecked}
                                    label="16GB"
                                    name="size"
                                />
                                <RadioInput
                                    id="size-32gb"
                                    checked={sizeChecked}
                                    setChecked={setSizeChecked}
                                    label="32GB"
                                    name="size"
                                />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold min-w-[70px] my-[10px]">
                                Color
                            </span>
                            <div className="p-[10px] flex">
                                <RadioInput
                                    id="color-red"
                                    checked={colorChecked}
                                    setChecked={setColorChecked}
                                    label="Red"
                                    name="color"
                                />
                                <RadioInput
                                    id="color-green"
                                    checked={colorChecked}
                                    setChecked={setColorChecked}
                                    label="Green"
                                    name="color"
                                />
                                <RadioInput
                                    id="color-blue"
                                    checked={colorChecked}
                                    setChecked={setColorChecked}
                                    label="Blue"
                                    name="color"
                                />
                            </div>
                        </div>
                        <div className="uppercase bg-main_color text-center cursor-pointer text-white font-[700] py-[11px] px-[15px]">
                            Add To Cart
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[30px] pt-[50px] border-t-2 border-main_color">
                <ProductSlider />
            </div>
        </div>
    );
}

export default ProductDetail;
