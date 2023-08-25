import './App.css'
import Sidebar from './Layout/Sidebar'
import Header from './Layout/Header'

function App() {
  return (
    <>
      <div className='w-full flex flex-row h-screen'>
        <Sidebar
        />
        <div className='w-full max-mobile:min-w-max max-tablet:min-w-max '>
          <Header />
          <div className=' bg-slate-100 min-h-max m-4 rounded-lg'>
            
          </div>
        </div>
      </div >
    </>
  )
}

export default App
