import React from 'react'

function UpperNav() {
    return (
        <>
            <header>
                <nav className="bg-black border-gray-200  px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div style={{"color": "white", "fontSize": "24px"}} className="flex flex-wrap justify-between items-center py-1 mx-auto max-w-screen-xl">
                        PhdCGM : PhD Conference Grant Management Portal
                    </div>
                </nav>
            </header>
        </>
    )
}

export default UpperNav