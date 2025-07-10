'use client'

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const data = {
    paragraph:
        `I'm an undergraduate Computer Science & Engineering student at American International University in Bangladesh. 
    I'm a quick learner with a strong interest in web development, driven to solve complex problems and develop 
    innovative solutions that make a difference. I enjoy the fast-paced nature of web development as a frontend 
    developer and adapt to emerging trends and industry best practices to produce appealing digital 
    products that leave a lasting impact on users. My interests also extend to competitive programming, 
    where I solve complex coding challenges and improve my problem-solving skills. In academics, I have c
    onsistently achieved top honors, earning a place on the Dean's List for two semesters of my undergraduate studies.`
};


const Hero = () => {

    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <section>
            <div className="container pt-13">
                <div className="grid items-center gap-8 bg-muted-2 lg:grid-cols-2">
                    <motion.div
                        initial={isMobile ? { y: 100, opacity: 0 } : { x: -100, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center p-16 text-center lg:items-start lg:text-left"
                        >
                        <h1 className="my-6 text-3xl font-bold text-pretty lg:text-6xl">
                            Md. Tahsin Hasib
                        </h1>
                        <p className="mb-8 max-w-xl text-sm text-justify text-muted-foreground lg:text-md">
                            {data.paragraph}
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            <Button className="cursor-pointer">
                                Read More
                                <ArrowRight className="size-4" />
                            </Button>
                        </div>
                    </motion.div>
                    <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                        alt="placeholder hero"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export { Hero };
