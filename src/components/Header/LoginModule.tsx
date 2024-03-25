"use client"
import React from "react";
import {signIn, signOut, useSession} from "next-auth/react";

import {Avatar, NavbarItem, Button, Image, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/react";

const LoginModule = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {data, status} = useSession()
  const isAuthenticated = status === "authenticated"
  const isLoading = status === "loading"

  return <div>
    {
      isAuthenticated && <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <div className={"flex gap-4 items-center"}>
                {data.user?.name}
                <Avatar src={data.user?.image || ""} />
              </div>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu key={"userInfo"} itemClasses={{ base: "gap-2" }}>
            <DropdownItem href={"/setting"}>
                Profiles
            </DropdownItem>
            <DropdownItem onPress={((e:any) => signOut)}>
                Sign out
            </DropdownItem>
          </DropdownMenu>
      </Dropdown>
    }

    {
      !isAuthenticated && <NavbarItem>
        <Button
          isLoading={isLoading}
          onPress={onOpen}
          variant="flat"
        >
          Sign in
        </Button>
      </NavbarItem>
    }

    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Sign in</ModalHeader>
            <ModalBody className="pb-5">
              <Button variant="flat" radius="full" onPress={()=> signIn("google")}>
                <Image width={20} src={"/icons/google.svg"}/> Google
              </Button>
              <Button variant="flat" radius="full" onPress={()=> signIn("github")}>
                <Image width={20} src={"/icons/github.svg"}/> Github
              </Button>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  </div>
}

export default LoginModule