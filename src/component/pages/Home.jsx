import React from 'react'
import Header from '../layouts/Header'
import Banner from '../layouts/Banner'
import Work from '../layouts/Work'
import Project from '../layouts/Project'
import Feature from '../layouts/Feature'
import Reviwe from '../layouts/Reviwe'
import FAQ from '../layouts/FAQ'
import Inqueray from '../layouts/Inqueray'
import Blog from '../Blog'
import BlogsPage from '../layouts/BlogsPage'
import Footer from '../layouts/Footer'

const Home = () => {
  return (
   <>
   
    <Banner/>
    <Work/>
    <Project/>
    <Feature/>
    <Reviwe/>
    <FAQ/>
    <Inqueray/>
    <BlogsPage/>
   
   </>
  )
}

export default Home