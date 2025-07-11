


import { Contact } from '@/components/Contact/Contact'
import { Divider } from '@/components/Divider/Divider'

import { Footer } from '@/components/Footer/Footer'
import { Hero } from '@/components/Hero/Hero'
import { Navbar } from '@/components/Navbar/Navbar'
import TimelineSection from '@/components/Timeline/TimelineSection'
import React from 'react'

const home = () => {
    return (
        <main className="md:flex flex-col min-h-screen items-center justify-center">
            <Navbar />
            <br></br>
            <Hero />
            <Divider className='mt-24' />
            <TimelineSection />
            <br></br>
            <Divider className="mt-24" />
            <Contact />
            <br></br>
            <Footer />
        </main>
    )
}

export default home