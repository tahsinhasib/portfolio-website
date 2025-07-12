


import { Contact } from '@/components/home/contactComp/Contact'
import { Divider } from '@/components/common/dividerComp/Divider'
import { Footer } from '@/components/common/footerComp/Footer'
import { Gallery } from '@/components/home/galleryComp/Gallery'
import { Hero } from '@/components/home/heroComp/Hero'
import { Navbar } from '@/components/common/navbarComp/Navbar'
import TimelineSection from '@/components/home/timelineComp/TimelineSection'
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