import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Navbar() {
    return (
        <header
            className="w-full border-b flex justify-center bg-white shadow-sm fixed top-0">
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
                    <NavigationMenuList
                        className="cursor-pointer">
                        <NavigationMenuItem>
                            <Link
                                href="/"
                                className="px-4 py-2 text-md hover:underline">
                                Home
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link
                                href="/about"
                                className="px-4 py-2 text-md hover:underline">
                                About
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link
                                href="/contact"
                                className="px-4 py-2 text-md hover:underline">
                                Contact
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Actions */}
                <div className="hidden md:flex gap-2">
  <Button className="cursor-pointer">Contact</Button>
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
                            className="flex flex-col gap-4 p-5">
                                <SheetTitle>Menu</SheetTitle>
                            <Link
                                href="/home"
                                className="text-sm">
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="text-sm">
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="text-sm">
                                Contact
                            </Link>
                            <Button
                                variant="outline"
                                className="mt-4">
                                Sign In
                            </Button>
                            <Button>Contact</Button>

                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
