import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

export default function NotFound() {
  return (
    <>
    <div className="min-h-screen bg-gray-100 pt-8 px-8">
    <Header />
      <div className="text-center mt-12">
        <h1 className="mt-6 text-4xl font-extrabold text-gray-900">
          Oops! Page not found
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link 
            href="/" 
            className="inline-flex items-center px-4 py-2 text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary hover:opacity-80"
          >
            Go back home
          </Link>
        </div>
      </div>
    <Footer />
    </div>
    </>
  )
}