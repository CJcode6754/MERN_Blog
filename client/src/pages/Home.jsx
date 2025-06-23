import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BlogList from '../components/BlogList'
export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero/>
        <BlogList/>
    </div>
  )
}
