import React from 'react'

function LoaderContent() {
    return (
        <div className="w-full py-10 max-w-md mx-auto animate-pulse p-9">
            <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>

            <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        </div>
    )
}

export default LoaderContent