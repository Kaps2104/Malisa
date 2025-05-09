import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-light tracking-wider text-gray-800 mb-6">404</h1>
        <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-8">Page Not Found</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          We're sorry, but the page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-red-500 px-8 py-6 text-lg font-light tracking-wider text-white hover:bg-red-600">
            RETURN TO HOME
          </Button>
        </Link>
      </div>
    </div>
  )
}
