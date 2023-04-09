import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import * as XLSX from 'xlsx';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function StudentUser({ users }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [userPerPage] = useState(5);

    const indexOfLastUser = currentPage * userPerPage;
    const indexOfFirstUser = indexOfLastUser - userPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const [fileName, setFileName] = useState("Student Data Excel File");
    const [uploadStudent, setUploadStudent] = useState([]);

    const paginate = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    const renderUsers = currentUsers.map((item, index) =>
        <tr key={index} className="border-b dark:border-gray-700">
            <td className="px-4 py-3">{item.email}</td>
            <td className="px-4 py-3">{item.name}</td>
            <td className="px-4 py-3">{item.department}</td>
            <td className="px-4 py-3">{item.nameOfSupervisor}</td>
            <td className="px-4 py-3">{item.dateOfJoining}</td>
            <td className="px-4 py-3">{item.fellowshipCategory}</td>
            <td className="px-4 py-3">{item.areaOfSpecialisation}</td>
        </tr>
    );

    async function handleFile(e) {
        setFileName(e.target.files[0].name);
        const files = e.target.files[0];
        const data = await files.arrayBuffer();

        const workBook = XLSX.read(data);
        const workSheet = workBook.Sheets[workBook.SheetNames[0]];
        const studentData = XLSX.utils.sheet_to_json(workSheet);

        setUploadStudent(studentData);

    };

    async function uploadFile(e) {
        e.preventDefault();
        setFileName("Uploading Student Data. Please Wait");
        var data;
        try {
            const resp = await fetch("/addStudent", {
                method: "POSt",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(uploadStudent)
            });
            data = await resp.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
        var wb = XLSX.utils.book_new();
        var ws = XLSX.utils.json_to_sheet(data.update);
        XLSX.utils.book_append_sheet(wb,ws, "updates");
        XLSX.writeFile(wb, "studentUploadUpdates.xlsx");
        setFileName("Data Uploaded..");
        
    }

    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className=" px-4 mx-auto max-w-screen-xl  lg:py-6 lg:px-3">
                    <div className="mx-auto max-w-screen-sm text-center ">
                        <h2 className="mb-1 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white"> Student Info</h2>
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
                                                <th scope="col" className="px-4 py-3">Supervisor</th>
                                                <th scope="col" className="px-4 py-3">Date of Joining</th>
                                                <th scope="col" className="px-4 py-3">Fellowship Category</th>
                                                <th scope="col" className="px-4 py-3">Area of Specialisation</th>
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


                <div className=" px-4 mx-auto max-w-screen-xl  lg:py-6 lg:px-3">
                    <div className="mx-auto max-w-screen-sm text-center ">
                        <h2 className="mb-1 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Add Students</h2>
                    </div>

                    <div>
                        <label for="file" className="block text-sm text-gray-500 dark:text-gray-300">File</label>

                        <label for="dropzone-file" className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500 dark:text-gray-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                            </svg>
                            <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">{fileName}</h2>
                            <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">Upload or drag & drop your Excel File</p>
                            <input id="dropzone-file" className="hidden" onChange={(e) => handleFile(e)} type="file" />
                        </label>
                    </div>
                    <div className="mx-auto mt-3 max-w-screen-sm text-center ">
                        <button
                            onClick={uploadFile}
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Upload Student Data
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StudentUser