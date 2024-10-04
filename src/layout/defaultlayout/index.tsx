import NavBar from '../components/navbar'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'
import ScrollUp from '@/components/scroll-up'

const DefaultLayout = () => {
  return (
    <div className='text-sm md:text-base'>
      <NavBar/>
      <div className='bg-content-primary h-[100%] px-10 md:px-40 pt-14'>
        <Outlet/>
        <Footer/>
        <ScrollUp/>
      </div>
    </div>
  )
}

export default DefaultLayout