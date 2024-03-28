import React, { Dispatch, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

type Props = {
    data: any[];
};

function Select({ data }: Props) {
    const [sortValue, setSortValue] = useState<string>('');
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (sortValue) {
            searchParams.set('sort', sortValue);
            setSearchParams(searchParams);
        }
    }, [sortValue]);

    return (
        <div className="pr-[10px] border">
            <select
                className="px-[20px] py-[15px] w-full outline-none"
                onChange={(e) => setSortValue(e.target.value)}
            >
                {data.map((item, index) => (
                    <option key={index} value={item.value}>
                        {item.title}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
