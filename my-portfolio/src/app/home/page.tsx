

import { Footer } from '@/components/Footer/Footer'
import { Hero } from '@/components/Hero/Hero'
import { Navbar } from '@/components/Navbar/Navbar'
import { Contact } from 'lucide-react'
import React from 'react'

const home = () => {
    return (
        <main className="md:flex flex-col min-h-screen items-center justify-center">
            <Navbar />
            <br></br>
            <Hero />
            <br></br>
            <Contact />
            <br></br>
            <Footer />
        </main>
    )
}

export default home