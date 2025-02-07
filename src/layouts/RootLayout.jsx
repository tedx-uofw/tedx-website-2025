import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-bg-default flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
    </div>
  );
}

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-favorit bg-bg-default text-white overflow-x-hidden">
      <Suspense fallback={<LoadingScreen />}>
        <Navbar />
        <main className="flex-grow pt-[72px] md:pt-[72px] lg:pt-[88px] xl:pt-[138px] relative w-full">
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </div>
  )
}

export default RootLayout 