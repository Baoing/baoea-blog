"use client"
import { usePathname } from 'next/navigation'
import React, {useEffect, useState} from "react";
import {Logo} from "./Logo";
import {SessionProvider} from 'next-auth/react';
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import LoginModule from "@/components/Header/LoginModule";


export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname()

  const [activeItem, setActiveItem] = useState("")
  useEffect(()=> {
    setActiveItem(pathname)
  }, [pathname])


  const menuItems = [
    "Projects",
    "Articles",
    "Collections",
    "About",
    // "Contact",
    "Log out",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link color="foreground" href="/">
            <Logo />
            <p className="font-bold text-inherit">BAOEA</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link color="foreground" href="/">
            <Logo />
            <p className="font-bold text-inherit">BAOEA</p>
          </Link>
        </NavbarBrand>
        {/* <NavbarItem
          className="ml-4"
          isActive={activeItem === "/projects"}
        >
          <Link color={activeItem === "/projects" ? undefined :"foreground"} href="/projects"  aria-current="page">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeItem === "/bestwehotel"}>
          <Link color={activeItem === "/bestwehotel" ? undefined :"foreground"} href="/bestwehotel">
            Bestwehotel
          </Link>
        </NavbarItem> */}
        <NavbarItem isActive={activeItem === "/member"}>
          <Link color={activeItem === "/member" ? undefined :"foreground"} href="/member">
            Member
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeItem === "/lisheng"}>
          <Link color={activeItem === "/lisheng" ? undefined :"foreground"} href="/lisheng">
            LiSheng
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarContent justify="end">
        <SessionProvider>
          <LoginModule />
        </SessionProvider>
      </NavbarContent> */}

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
