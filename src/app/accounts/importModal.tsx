import React, {useState} from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Textarea} from "@nextui-org/input";
import stores from "@/stores";
export default function ImportModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [tokens, setTokens] = useState("")

  const {MembersStore} = stores

  return (
    <>
      <Button color="primary" variant="shadow" onPress={onOpen}>
        导入账户
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">导入账户</ModalHeader>
              <ModalBody>
                <Textarea
                  value={tokens}
                  label="导入Token数据"
                  placeholder="批量导入使用,分割"
                  className="max-w-xs"
                  onChange={(e)=>setTokens(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="default"  onPress={() => {
                  MembersStore.importTokens(tokens)
                  onClose()
                }}>
                  增量导入
                </Button>
                <Button color="default" onPress={()=>{
                  MembersStore.importTokens(tokens, true)
                  onClose()
                }}>
                  覆盖导入
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
