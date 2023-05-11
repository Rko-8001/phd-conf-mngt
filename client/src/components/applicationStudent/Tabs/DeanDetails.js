import React from 'react'

function DeanDetails({ user, data }) {

    function extractFileId(driveLink) {
        const startIndex = driveLink.indexOf('/file/d/') + 8;
        const endIndex = driveLink.indexOf('/view');
        if (startIndex !== -1 && endIndex !== -1) {
            return driveLink.substring(startIndex, endIndex);
        } else {
            return null;
        }
    }

    return (
        <>
            <div className="overflow-hidden mt-2 bg-white shadow sm:rounded-lg">
                <div className="px-4 py-2 sm:px-6">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">Dean Review ({data.status === "5" ? "Approved" : "Rejected"})</h3>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Dean Signature</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <div class="col-span-full">
                                    <img className="h-20 w-auto" src={`https://drive.google.com/uc?id=${extractFileId(data?.deanSignLink)}`} alt="sign" />
                                </div>
                            </dd>
                        </div >

                    </dl >
                </div >
            </div >
        </>
    )
}

export default DeanDetails