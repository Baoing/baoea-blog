"use client"
import Image from "next/image";
import prisma from '@/lib/prisma';
import { signIn } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';
import Header from "../components/Header/index";

export default function Home() {
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Elsa Prisma',
  //     email: 'elsa@prisma.io',
  //   },
  // })

  // const user = await prisma.user.findUnique({
  //   where: {
  //     email: 'elsa@prisma.io',
  //   },
  // })

  // console.log("请求数据", user)

  return (
    <SessionProvider>
      init
    </SessionProvider>
  );
}
