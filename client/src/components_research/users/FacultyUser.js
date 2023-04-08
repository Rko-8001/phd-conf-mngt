import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function FacultyUser({ users }) {

    const [currentPage, setCurrentPage] = useState(1);

    const [userPerPage] = useState(10);

    // ...

    const indexOfLastUser = currentPage * userPerPage;
    const indexOfFirstUser = indexOfLastUser - userPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    const renderUsers = currentUsers.map((item, index) =>
        <tr key={index} className="border-b dark:border-gray-700">
            <td className="px-4 py-3">{item.email}</td>
            <td className="px-4 py-3">{item.name}</td>
            <td className="px-4 py-3">{item.department}</td>
        </tr>
    );


    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className=" px-4 mx-auto max-w-screen-xl  lg:py-6 lg:px-3">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-1 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"> Faculty Info</h2>
                    </div>

                    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
                        <div className="mx-auto max-w-screen-xl pl-20 lg:pl-20">
                            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                                    <div className="w-full md:w-1/2">
                                        <form className="flex items-center">
                                            <div className="relative w-full">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="" />
                                            </div>
                                        </form>
                                    </div>

                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-4 py-3">Email</th>
                                                <th scope="col" className="px-4 py-3">Name</th>
                                                <th scope="col" className="px-4 py-3">Department</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {renderUsers}
                                        </tbody>
                                    </table>
                                </div>

                                <ReactPaginate
                                    breakLabel={<span className="mr-4">...</span>}
                                    nextLabel={<span className="w-4 h-4 flex items-center justify-center bg-lightGray rounded-md"><BsChevronRight /></span>}
                                    previousLabel={<span className="w-4 h-4 flex items-center justify-center bg-lightGray rounded-md mr-4"><BsChevronLeft />   </span>}
                                    onPageChange={paginate}
                                    pageCount={Math.ceil(users.length / userPerPage)}
                                    pageLinkClassName="flex items-center hidden px-2  mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
                                    previousLinkClassName="flex items-center px-4  mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
                                    nextLinkClassName="flex items-center px-4  mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
                                    containerClassName="flex items-center justify-center mt-8 mb-4"
                                    pageClassName="block border- border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-4"
                                    activeClassName="bg-purple text-white"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}
