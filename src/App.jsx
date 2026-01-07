import './App.css'
import Navbar from './components/Navbar'
import AlertContainer from './components/AlertContainer'
import MainContainer from './components/MainContainer'
import DetailAlert from './components/DetailAlert'
import Login from './components/Login'

function App() {

  return (
    <>
      <div className="p-2 no-scrollbar bg-gray-300 min-h-screen">
        <Navbar />
        <div className='flex flex-col lg:flex-row '>
          <AlertContainer />
          <MainContainer />
          <DetailAlert/>
        </div>
        <Login/>
      </div>
    </>
  )
}

export default App
