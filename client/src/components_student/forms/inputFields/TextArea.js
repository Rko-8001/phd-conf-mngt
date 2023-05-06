import React from 'react'

export default function TextArea(props) {

    const { title, subtitle, name, onChangeFunction } = props;
    return (
        <>
            <div className="col-span-full">
                <label
                    htmlFor={name}
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    {title}
                </label>
                <div className="mt-2">
                    <textarea
                        id={name}
                        name={name}
                        onChange={onChangeFunction}
                        rows={3}
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        defaultValue={''}
                    />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                    {subtitle}
                </p>
            </div>
        </>
    )
}
