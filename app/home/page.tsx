import Category from '@/components/frontend/category/page'
import Featured from '@/components/frontend/featured/page'
import Hero from '@/components/frontend/Hero/page'
import React from 'react'

const Home = () => {
  return (
    <section>
        <Hero />
        <Category />
        <Featured />
     </section>
  )
}

export default Home