// app/components/Logo.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function Logo({ className = "" }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/images/logo.png" // Create this path and add your logo image
        alt="Vintage Audio Logo"
        width={40}
        height={40}
        className="mr-2"
      />
      <span className="text-2xl font-bold">Vintage Audio</span>
    </Link>
  )
}