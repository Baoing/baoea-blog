"use client"
import React from "react";
import {Logo} from "./Logo";
import {SessionProvider} from 'next-auth/react';
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import LoginModule from "@/components/Header/LoginModule";


export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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

          </Link>
        </NavbarBrand><Logo />
        <p className="font-bold text-inherit">BAOEA</p>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link color="foreground" href="/">
            <Logo />
            <p className="font-bold text-inherit">BAOEA</p>
          </Link>
        </NavbarBrand>
        <NavbarItem className="ml-4">
          <Link color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/collections">
            Collections
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/about" aria-current="page">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <SessionProvider>
          <LoginModule />
        </SessionProvider>
      </NavbarContent>

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
