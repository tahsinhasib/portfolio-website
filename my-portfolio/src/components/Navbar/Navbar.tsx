import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { ModeToggle } from "../ModeToggle";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../ui/navigation-menu";
import { NavbarContents } from "./NavbarContents";







export function Navbar() {
    return (
        <header
            className="w-full border-b flex justify-center bg-white shadow-sm fixed top-0 dark:bg-neutral-950">
            <div
                className="container flex items-center justify-between p-5">
                {/* Logo */}
                <Link
                    href="/home"
                    className="text-xl font-bold">
                    Tahsin Hasib
                </Link>

                {/* Desktop Navigation */}
                <NavigationMenu
                    className="hidden md:flex font-bold">
                    <NavbarContents />
                </NavigationMenu>

                



                {/* Actions */}
                <div className="hidden md:flex gap-2">
                    <Button className="cursor-pointer">Contact</Button>
                    <ModeToggle />
                </div>


                {/* Mobile Menu */}
                <div
                    className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon">
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="left"
                            className="flex flex-col gap-4 p-5 items-center w-full">
                            <SheetTitle>Menu</SheetTitle>
                            <NavbarContents />
                            <Button
                                variant="outline"
                                className="mt-4">
                                Sign In
                            </Button>
                            <Button>Contact</Button>
                            <ModeToggle />
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}





