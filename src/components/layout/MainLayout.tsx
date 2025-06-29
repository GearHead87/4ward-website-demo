import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex flex-col min-h-screen bg-black'>
        <Navbar />
        <main className='flex-1 container mx-auto mt-10'>
            {children}
        </main>
      <Footer />
    </div>
  )
}

export default MainLayout