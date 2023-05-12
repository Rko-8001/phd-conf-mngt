import React from 'react'
import { BsAsterisk } from 'react-icons/bs';

export default function InputOption(props) {
    const { name, title, onChangeFunction } = props;
    return (
        <>
            <div className="sm:col-span-3">
                <label htmlFor="society" className="block text-sm font-medium leading-6 text-gray-900">
                    {title}
                    <BsAsterisk className='h-2 w-auto text-[#FF0000] mx-1' />
                </label>
                <div className="">
                    <input
                        id={name}
                        type="radio"
                        onChange={onChangeFunction}
                        value="Yes" name={name}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        htmlFor={name}
                        className=" px-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Yes
                    </label>



                    <input
                        id={name}
                        name={name}
                        onChange={onChangeFunction}
                        type="radio"
                        value="No"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        htmlFor={name}
                        className=" px-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        No
                    </label>
                </div>
            </div>
        </>
    )
}
