import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddProduct from './app/components/AddProduct'
import ShowProduct from './app/components/ShowProduct'
import EditProduct from './app/components/EditProduct'

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/' element={<ShowProduct />} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/edit/:id' element={<EditProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
