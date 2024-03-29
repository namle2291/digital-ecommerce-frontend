import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../../Rate/Rating';
import { numberFormat } from '../../../utils/helpers/formatPrice';
import ActionButton from '../../Buttons/ActionButton';
import new_label from '../../../assets/img/new_label.png';
import trending_label from '../../../assets/img/trending_label.png';

type ProductColType = {
    isLarge?: boolean;
};

function ProductCol({ isLarge = false }: ProductColType) {
    return (
        <div className="pl-[20px] group">
            <div className="p-[15px] mb-[20px] border">
                <div className="mb-[20px] relative overflow-hidden">
                    <div className="overflow-hidden relative">
                        <Link
                            to={`/products/${
                                'san-pham-' + Math.floor(Math.random() * 9999)
                            }`}
                        >
                            <img
                                src="https://digital-world-5.myshopify.com/cdn/shop/products/z1_3_300x.jpg?v=1491405547"
                                alt="product_image"
                                className="w-full h-full object-cover"
                            />
                        </Link>
                        <div className="max-w-[70px] overflow-hidden absolute top-0 right-0">
                            <img
                                src={new_label}
                                className="w-full h-full object-cover"
                                alt="new label"
                            />
                        </div>
                    </div>
                    <div className="group-hover:bottom-0 duration-300 absolute bottom-[-40px] left-0 right-0">
                        <ActionButton />
                    </div>
                </div>
                <div>
                    <div
                        className={`${
                            isLarge ? 'text-[20px]' : 'text-[16px]'
                        } mb-[6px]`}
                    >
                        <Link
                            to={`/products/${
                                'san-pham-' + Math.floor(Math.random() * 9999)
                            }`}
                        >
                            <h2>Lenovo IdeaPad 110</h2>
                        </Link>
                    </div>
                    <div className="mb-[10px]">
                        <Rating value={5} fs={13} />
                    </div>
                    <div
                        className={`${
                            isLarge ? 'text-[20px]' : ''
                        } text-[16px] mb-[10px]`}
                    >
                        <span>{numberFormat(7567956)} VND</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCol;
