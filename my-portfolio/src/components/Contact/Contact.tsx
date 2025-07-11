import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa6";

interface Contact2Props {
    title?: string;
    description?: string;
    phone?: string;
    email?: string;
    web?: { label: string; url: string };
}

const Contact = ({
    title = "Contact Me",
    description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
    phone = "(+88) 017 111 02730",
    email = "tahsinhasib@gmail.com",
    web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: Contact2Props) => {
    return (
        <section className="py-32 w-full flex justify-center">
            <div className="container">
                <div className="mx-auto flex max-w-9xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
                    <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
                        <div className="text-center lg:text-left">
                            <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                                {title}
                            </h1>
                            <p className="text-muted-foreground text-sm pt-4">{description}</p>
                        </div>
                        <div className="mx-auto w-fit lg:mx-0">
                            <h3 className="mb-6 text-center text-4xl font-semibold lg:text-left">
                                Contact Details
                            </h3>
                            <ul className="ml-4 list-none">
                                <li className="flex items-center gap-2">
                                    <FaPhoneAlt className="" />
                                    <span className="font-bold">Phone: </span>

                                    {phone}

                                </li>
                                <li className="flex items-center gap-2">
                                    <MdEmail />
                                    <span className="font-bold">Email: </span>
                                    <a href={`mailto:${email}`} className="underline">
                                        {email}
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaGlobe />
                                    <span className="font-bold">Web: </span>
                                    <a href={web.url} target="_blank" className="underline">
                                        {web.label}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mx-auto flex max-w-3xl flex-col gap-6 rounded-lg border p-10">
                        <div className="flex gap-4">
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="firstname">First Name</Label>
                                <Input type="text" id="firstname" placeholder="First Name" />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="lastname">Last Name</Label>
                                <Input type="text" id="lastname" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="subject">Subject</Label>
                            <Input type="text" id="subject" placeholder="Subject" />
                        </div>
                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="message">Message</Label>
                            <Textarea placeholder="Type your message here." id="message" />
                        </div>
                        <Button className="w-full">Send Message</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Contact };
