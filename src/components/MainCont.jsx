import React from 'react'
import AlertContainer from '../components/AlertContainer'
import MainContainer from '../components/MainContainer'
import DetailAlert from '../components/DetailAlert'

function Dashboard() {

  return (
    <>
      <div className="p-2 no-scrollbar bg-gray-300 min-h-screen">
        <div className='flex flex-col lg:flex-row '>
          <AlertContainer />
          <MainContainer />
          <DetailAlert />
        </div>
      </div>
    </>
  )
}

export default Dashboard
