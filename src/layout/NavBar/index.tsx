"use client"
import { usePathname } from 'next/navigation'

import React, {useEffect, useState} from "react";
import {Logo} from "./Logo";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem} from "@nextui-org/react";
import Link from "next/link";


export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname()

  const [activeItem, setActiveItem] = useState("")
  useEffect(()=> {
    setActiveItem(pathname)
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <Navbar
      maxWidth={1240}
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-2" justify="center">
        <NavbarBrand>
          <Link color="foreground" href="/">
            <p className="font-bold text-inherit">BAOEA</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
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
            会员购
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeItem === "/lisheng"}>
          <Link color={activeItem === "/lisheng" ? undefined :"foreground"} href="/lisheng">
            丽苼活动
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeItem === "/accounts"}>
          <Link color={activeItem === "/accounts" ? undefined :"foreground"} href="/accounts">
            账户管理
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarContent justify="end">
        <SessionProvider>
          <LoginModule />
        </SessionProvider>
      </NavbarContent> */}

      <NavbarMenu>
        {[
          {title: "会员购", path: "/member"},
          {title: "丽苼活动", path: "/lisheng"},
          {title: "账户管理", path: "/accounts"},
        ].map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={item.path}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
