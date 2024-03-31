import React, { memo } from 'react';

type Props = {
    className?: string;
    name?: any;
    isHidden?: boolean;
    label?: string;
    id?: string;
    checked?: any;
    setChecked?: any;
};

function RadioInput({
    className,
    id,
    name,
    isHidden = true,
    label,
    checked,
    setChecked,
}: Props) {
    return (
        <label
            htmlFor={id}
            className={`${className} border ${
                checked[name] === label ? 'border-main_color' : ''
            } cursor-pointer mx-[5px] py-[9px] px-[11px]`}
            onClick={() => setChecked(name, label)}
        >
            {label}
        </label>
    );
}

export default memo(RadioInput);
