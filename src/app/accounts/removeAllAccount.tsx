import React, {useState} from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Textarea} from "@nextui-org/input";
import stores from "@/stores";
import Login from "@/app/member/login";
import {toast} from "sonner";
export default function RemoveAllAccount() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {  MembersStore}= stores
  return (
    <>
      <Button color="danger" variant="shadow" onPress={onOpen}>
        移除所有账户
      </Button>

      <Modal placement={"center"} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">提示</ModalHeader>
              <ModalBody>
                <p>确定要移除所有账户吗</p>
              </ModalBody>

                <ModalFooter>
                    <Button color="default"  onPress={onClose}>
                        取消
                    </Button>
                    <Button color="danger" onPress={()=>{
                        MembersStore.removeUsers()
                        onClose()
                        toast.success("删除所有账户成功")
                    }}>
                        删除
                    </Button>
                </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
