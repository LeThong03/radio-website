// app/not-found.tsx
import { Suspense } from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex min-h-screen items-center justify-center flex-col">
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <Link href="/" className="text-blue-600 hover:underline">
          Return Home
        </Link>
      </div>
    </Suspense>
  )
}