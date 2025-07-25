'use client'
import React from 'react'
import aboutData from '@/data/aboutData/aboutData.json'
import { motion } from 'framer-motion'

const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
}

export default function Overview() {
    const { overview, overview_features } = aboutData

    return (
        <section className="p-20">
            <div className="container flex flex-col gap-16 lg:px-16">
                <div className="lg:max-w-full">
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        className="lg:max-w-full"
                    >
                        <h2 className="mb-3 text-5xl font-bold md:mb-4 md:text-5xl lg:mb-6">
                            {overview.heading}
                        </h2>
                        <p className="mb-8 text-muted-foreground lg:text-lg">
                            {overview.text}
                        </p>
                    </motion.div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    {overview_features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8 ${feature.reverse ? 'flex-col-reverse' : ''}`}
                        >
                            {!feature.reverse && (
                                <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="aspect-16/9 h-full w-full object-cover object-center"
                                    />
                                </div>
                            )}
                            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground lg:text-lg">
                                    {feature.text}
                                </p>
                            </div>
                            {feature.reverse && (
                                <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="aspect-16/9 h-full w-full object-cover object-center"
                                    />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
