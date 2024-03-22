"use client"
import React from 'react';
import {signIn, signOut, useSession} from 'next-auth/react';
import {Button} from "@nextui-org/button";

const Header: React.FC = () => {
  console.log(useSession())

  return <div className="flex gap-4">
    <Button onClick={() => signIn('github')}>GitHub Login</Button>
    <Button onClick={() => signOut()}>LoginOut</Button>
  </div>
};

export default Header;