import React from 'react'

export default function Enclosures(props) {

    const { title, onChangeFunction, type, name, acceptType } = props;
    return (
        <>

            <div className="relative flex gap-x-3">
                <div className="text-sm leading-6">
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor={name}
                    >
                        {title}
                    </label>
                    <input
                        onChange={onChangeFunction}
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id={name}
                        name={name}
                        type={type}
                        accept={acceptType}
                    />
                </div>
            </div>
        </>
    )
}
