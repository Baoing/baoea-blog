"use client"
import prisma from '@/lib/prisma';
import { signIn } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';
import Header from "../components/Header/index";
import {Image} from "@nextui-org/react";
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
      <Image
        width={"100%"}
        src={"/images/planetbg.svg"}
      />
    </SessionProvider>
  );
}
