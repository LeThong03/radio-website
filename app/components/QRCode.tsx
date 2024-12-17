'use client'
import { useEffect, useRef } from 'react'
import QRCodeLib from 'qrcode'

interface QRCodeProps {
  size?: number
  bgColor?: string
  fgColor?: string
}

export default function QRCode({ 
  size = 200, 
  bgColor = '#FFFFFF',
  fgColor = '#8B4513'
}: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      QRCodeLib.toCanvas(
        canvasRef.current,
        'https://radio-website-65r9.vercel.app/',
        {
          width: size,
          margin: 2,
          color: {
            dark: fgColor,
            light: bgColor
          }
        }
      )
    }
  }, [size, bgColor, fgColor])

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas ref={canvasRef} />
      <p className="text-sm text-[#65452D]">Scan to visit our Vintage Audio Shop</p>
    </div>
  )
}