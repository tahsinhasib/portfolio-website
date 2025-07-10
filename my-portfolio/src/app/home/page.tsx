

import { Hero } from '@/components/Hero/Hero'
import { Navbar } from '@/components/Navbar/Navbar'
import React from 'react'

const home = () => {
    return (
        <main className="md:flex min-h-screen items-center justify-center">
            <Navbar />
            <br></br>
            <Hero />
        </main>
    )
}

export default home