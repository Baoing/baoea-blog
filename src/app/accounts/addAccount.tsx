import React, {useState} from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Textarea} from "@nextui-org/input";
import stores from "@/stores";
import Login from "@/app/member/login";
export default function AddAccount() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button color="primary" variant="shadow" onPress={onOpen}>
        添加账户
      </Button>

      <Modal placement={"top-center"} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">添加账户</ModalHeader>
              <ModalBody>
                <Login />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
