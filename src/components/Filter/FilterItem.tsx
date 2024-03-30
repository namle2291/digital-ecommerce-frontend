import React, { memo, useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { colors_filter } from '../../utils/constants/colors';
import useDebounce from '../../hooks/useDebounce';
import { useSearchParams } from 'react-router-dom';
import { getProductHighestPrice } from '../../apis/services/productService';
import { numberFormat } from '../../utils/helpers/formatPrice';

type Props = {
    title?: string;
    type?: string;
    active?: string;
    setActive?: any;
};

function FilterItem({ title, type = 'input', active, setActive }: Props) {
    const [colorSelected, setColorSelected] = useState<any[]>([]);
    const [priceHighest, setPriceHighest] = useState<number>(0);

    const [price, setPrice] = useState<any>({
        from: '',
        to: '',
    });

    const priceFromDebounce = useDebounce(+price.from, 500);
    const priceToDebounce = useDebounce(+price.to, 500);

    const colorDebounce = useDebounce(colorSelected, 500);

    const handleSelectColor = (color: any) => {
        setColorSelected((prev) => {
            const colorExists = prev.find((item) => item === color);
            return colorExists
                ? prev.filter((item) => item !== color)
                : [...prev, color];
        });
    };

    const fetchProductHighestPrice = async () => {
        const result = await getProductHighestPrice('/products', {
            sort: '-price',
            limit: 1,
        });

        if (result.status === 200) {
            setPriceHighest(result.data.data[0].price);
        }
    };

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (colorSelected.length > 0) {
            searchParams.set('color', colorDebounce.join(','));
        } else {
            searchParams.delete('color');
        }
        setSearchParams(searchParams);
    }, [colorDebounce]);

    useEffect(() => {
        const data: any = {};
        if (Number(price.from) > 0) data['price[gte]'] = +price.from;
        if (Number(price.to) > 0) data['price[lte]'] = +price.to;

        if (priceFromDebounce || priceToDebounce) {
            data['price[gte]'] &&
                searchParams.set('price[gte]', data['price[gte]']);
            data['price[lte]'] &&
                searchParams.set('price[lte]', data['price[lte]']);
        }

        if (!priceFromDebounce) {
            searchParams.delete('price[gte]');
        }
        if (!priceToDebounce) {
            searchParams.delete('price[lte]');
        }

        setSearchParams(searchParams);
    }, [priceFromDebounce, priceToDebounce]);

    useEffect(() => {
        fetchProductHighestPrice();
    }, []);

    return (
        <div className="popup-btn relative px-[15px] h-[45px] border mr-[.5rem] cursor-pointer">
            <div
                className="flex items-center h-full text-text_grey gap-[20px]"
                onClick={() => setActive(title)}
            >
                <span>{title}</span>
                <FaAngleDown />
            </div>
            {active === title && (
                <>
                    <div
                        id="filter-popup"
                        className="filter-popup absolute mt-[5px] z-[9999] bg-white w-[350px] left-0 border"
                    >
                        {type === 'input' && (
                            <>
                                <div className="py-[15px] px-[20px] flex justify-between items-center border-b">
                                    <span>
                                        The highest price is{' '}
                                        <span>
                                            {numberFormat(priceHighest)}
                                        </span>{' '}
                                        VND
                                    </span>
                                    <span
                                        className="underline underline-offset-[3px]"
                                        onClick={() =>
                                            setPrice({
                                                from: '',
                                                to: '',
                                            })
                                        }
                                    >
                                        Reset
                                    </span>
                                </div>
                                <div className="border px-[20px] py-[15px] grid grid-cols-2 gap-[10px] w-full">
                                    <div>
                                        <label
                                            htmlFor="priceFromDebounce"
                                            className="flex items-center gap-[10px]"
                                        >
                                            <span>$</span>
                                            <input
                                                id="priceFromDebounce"
                                                type="number"
                                                className="h-[44px] flex-1 pl-[10px] w-[50%]"
                                                placeholder="From"
                                                min={1}
                                                value={price.from}
                                                onChange={(e) =>
                                                    setPrice((prev: any) => ({
                                                        ...prev,
                                                        from: e.target.value,
                                                    }))
                                                }
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="priceToDebounce"
                                            className="flex items-center gap-[10px]"
                                        >
                                            <span>$</span>
                                            <input
                                                id="priceToDebounce"
                                                type="number"
                                                className="h-[44px] flex-1 pl-[10px] w-[50%]"
                                                placeholder="To"
                                                min={1}
                                                value={price.to}
                                                onChange={(e) =>
                                                    setPrice((prev: any) => ({
                                                        ...prev,
                                                        to: e.target.value,
                                                    }))
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                            </>
                        )}
                        {type === 'checkbox' && (
                            <>
                                <div className="py-[15px] px-[20px] flex justify-between items-center border-b">
                                    <span>0 selected</span>
                                    <span
                                        className="underline underline-offset-[3px]"
                                        onClick={() => setColorSelected([])}
                                    >
                                        Reset
                                    </span>
                                </div>
                                <ul className="px-[20px] py-[15px] flex flex-col">
                                    {colors_filter.map((item) => (
                                        <li
                                            key={item}
                                            className={`leading-[2.5em]`}
                                        >
                                            <label
                                                htmlFor={`color-${item}`}
                                                className="relative flex items-center cursor-pointer"
                                            >
                                                <input
                                                    id={`color-${item}`}
                                                    className="mr-[5px]"
                                                    type="checkbox"
                                                    value={item}
                                                    checked={
                                                        colorSelected.includes(
                                                            item
                                                        )
                                                            ? true
                                                            : false
                                                    }
                                                    onChange={() =>
                                                        handleSelectColor(item)
                                                    }
                                                />
                                                {item}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default memo(FilterItem);
