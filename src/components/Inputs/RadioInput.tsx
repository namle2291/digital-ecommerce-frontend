import React from 'react';

type Props = {
    className?: string;
    name?: string;
    isHidden?: boolean;
    label?: string;
    id?: string;
    checked?: string;
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
    const handleChoose = (event: any) => {
        setChecked(event.target.value);
    };

    return (
        <label
            htmlFor={id}
            className={`${className} border ${
                checked === label ? 'border-main_color' : ''
            } cursor-pointer mx-[5px] py-[9px] px-[11px]`}
        >
            {label}

            <input
                value={label}
                id={id}
                type="radio"
                name={name}
                hidden={isHidden}
                onChange={handleChoose}
            />
        </label>
    );
}

export default RadioInput;
