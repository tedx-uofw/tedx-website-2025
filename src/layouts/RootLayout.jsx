import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';


function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-bg-default flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
    </div>
  );
}

const RootLayout = () => {
  return (
    <div className="min-h-screen font-favorit bg-bg-default text-white relative">
      <Suspense fallback={<LoadingScreen />}>
        <Navbar />
        <main className="pt-[72px] md:pt-[72px] lg:pt-[88px] xl:pt-[138px] relative z-10 bg-bg-default" style={{ marginBottom: 'var(--footer-height, 600px)' }}>
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </div>
  )
}

export default RootLayout 