import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../studentNav/NavBar';

const formOptions = [
    {
        id: 1,
        title: 'Wanna attend in abroad?',
        href: '#',
        description:
            "If you want to attend the conference in abroad, You need to fill this application form with supporting doucment attached. First Time, Please refer to User Guide. ",
        category: { title: 'Application', href: '' },
        function: "goAbroad"

    },
    {
        id: 1,
        title: 'Wanna Attend within India?',
        href: '#',
        description:
            "If you want to attend the conference within india, You need to fill this application form with supporting doucment attached. First Time, Please refer to User Guide. ",
        category: { title: 'Application', href: '#' },
        function: "goIndia"

    },
]

export default function FormOption() {

    const navigate = useNavigate();

    const goIndia = () => {
        navigate('/studentLogin/formIndia');
    }

    const goAbroad = () => {
        navigate('/studentLogin/formAbroad');
    }

    return (
        <>
            <NavBar />
            <div className="bg-white content-center py-10 sm:py-15">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-20 px-10 w-full lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Application Form for Participating in Conference</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Choose Type of Conference you want to attend.
                        </p>
                    </div>
                    <div className="content-center mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {formOptions.map((post) => (
                            <button onClick={(e) => {
                                e.preventDefault();

                                if (post.function === "goAbroad") {
                                    goAbroad();
                                }
                                else {
                                    goIndia();
                                }
                            }} className=" tracking-wide  transition-colors duration-300 transform  rounded-lg hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-100 focus:ring-opacity-80">

                                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <a className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                        >
                                            {post.category.title}
                                        </a>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a >
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                    </div>
                                </article>
                            </button>
                        ))}
                    </div>
                </div>
            </div >
        </>
    )
}
