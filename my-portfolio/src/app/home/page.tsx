


import { Contact } from '@/components/Contact/Contact'
import { Divider } from '@/components/Divider/Divider'
import { Footer } from '@/components/Footer/Footer'
import { Gallery } from '@/components/Gallery/Gallery'
import { Hero } from '@/components/Hero/Hero'
import { Navbar } from '@/components/Navbar/Navbar'
import TimelineSection from '@/components/Timeline/TimelineSection'
import React from 'react'
import { galleryDescription, galleryItems, galleryTitle } from '../../../public/data/galleryData'

const home = () => {
    return (
        // <main className="md:flex flex-col min-h-screen items-center justify-center">
        <main>
            <Navbar />
            <Hero />
            <Divider className='mt-24' />
            <TimelineSection />
            <Divider className='mt-24' />
            <Gallery
                title={galleryTitle}
                description={galleryDescription}
                items={galleryItems}
            />
            <Divider className="mt-24" />
            <Contact />
            <br></br>
            <Footer />
        </main>
    )
}

export default home