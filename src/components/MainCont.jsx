import AlertContainer from './AlertContainer'
import MainContainer from '../components/MainContainer'
import DetailAlert from './DetailAlert'
import { useState } from 'react'

function Layout() {
  const [alert, setAlert] = useState(null);

  return (
    <>
      <div className=" no-scrollbar bg-gray-300 min-h-screen">
        <div className='flex flex-col md:flex-row '>
          <AlertContainer />
          <MainContainer />
          <DetailAlert />
        </div>
      </div>
    </>
  )
}

export default Layout
