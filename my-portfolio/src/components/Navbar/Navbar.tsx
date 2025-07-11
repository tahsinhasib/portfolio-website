import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { ModeToggle } from "../ModeToggle";
import { NavigationMenu } from "../ui/navigation-menu";
import { NavbarContents } from "./NavbarContents";

export function Navbar() {
    return (
        <header
            className="w-full border-b flex justify-center fixed top-0 z-50
                       bg-white/30 backdrop-blur-xs backdrop-saturate-150 dark:bg-neutral-900/30 shadow-sm">
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
                <div className="md:hidden">
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
