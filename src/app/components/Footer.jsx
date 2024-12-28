import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row justify-center text-center gap-10 pt-12 pb-7'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/review">Review</Link>
        <Link href="/classess">Classess</Link>
    </div>
  )
}

export default Footer