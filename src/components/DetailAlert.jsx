import React from 'react'

const DetailAlert = () => {
    return (
        <>
            <div className='h-157 w-117 rounded-lg border-1 p-3 '>
                <div className='p-1 flex justify-between items-center border-1 '>
                    <p>INC-001</p>
                    <p>x</p>
                </div>
                <p>Detected At 05:46:11 PM</p>
                <p>15th Sanepa Road, Lalitpur</p>
                <h1 className='font-bold'>Crash of Vehicle BA 2341</h1>
                <p>Severity:</p>
                <h2 className='font-bold'>Crash Intelligence</h2>
                <div className='border-1 rounded-lg p-3'>

                    <div className='m-2 flex justify-between '>
                        <div className='border-1 bg-yellow-200 rounded-lg p-2'>
                            Est Delay: 24 Min
                        </div>
                        <div className='border-1 bg-yellow-300 rounded-lg p-2'>
                            Smoke Deteced
                        </div>
                    </div>
                    <div className='m-2 flex justify-between '>
                        <div className='border-1 bg-green-300 rounded-lg p-2'>
                            Last Speed: 30km/hr
                        </div>
                        <div className='border-1 bg-red-500 rounded-lg p-2'>
                            Fire Deteced
                        </div>
                    </div>

                </div><br />
                <div>
                    <p className='font-bold'>LiveFeed-CAM-023</p>
                    <div className='w-110 h-60 rounded-lg bg-gray-300'></div>
                </div>
            </div>

        </>
    )
}

export default DetailAlert