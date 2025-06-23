import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BlogList from '../components/BlogList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero/>
        <BlogList/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}
