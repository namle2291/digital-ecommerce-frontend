import React from 'react';

type Props = {
    register?: any;
    validate?: object | any;
    type?: string;
    placeholder?: string;
    className?: string;
    name?: string;
    errors?: object | any;
};

export default function Input({
    register,
    validate,
    type = 'text',
    placeholder,
    className,
    name = 'your_field',
    errors,
}: Props) {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                className={`w-full px-[8px] py-[10px] ${className}`}
                {...register(name, validate)}
            />
            {errors[name] && (
                <span className="text-red-600 px-[8px] mt-[3px]">
                    {errors[name]?.message}
                </span>
            )}
        </div>
    );
}
