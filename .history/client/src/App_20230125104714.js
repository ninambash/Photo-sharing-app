
import React from 'react'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'

import { Home, CreatePost } from './pages'



const App = () => {
  return (
    <BrowserRouter>
    <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
      
        <Link to='/create-post'>
          <button className='font-inner font-medium bg-[#6469ff] text-white py-2 px-4 rounded-md'>
            Create
          </button>
        </Link>
    </header>

    <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>
    </main>



   
    </BrowserRouter>
  )
}

export default App
