"use client"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, useDisclosure, Snippet} from "@nextui-org/react";
import {getLishengImgCode, getLishengLingqu} from "@/utils/api";
import {useState} from "react";
import {toast, Toaster} from "sonner";

const Lisheng = () => {
    const [phone, setPhone] = useState("");
    const [picCode, setPicCode] = useState("");
    const [phoneCode, setPhoneCode] = useState("");
    const [verifyPicUrl, setVerifyPicUrl] = useState("");

    const handleGetImageCode = () => {
        getLishengImgCode(phone).then(res=>{
            setVerifyPicUrl(res.data.verifyPicUrl)
            toast(res.msg)
        })
    }
    const handleGetPhoneCode = () => {
        getLishengImgCode(phone,picCode).then(res=>{
            console.log(res)
            toast(res.msg)
        })
    }
    const handleLingqu = () => {
        getLishengLingqu(phone, phoneCode).then(res=>{
            toast(res.msg)
        })
    }

    return <div className={"flex gap-4 flex-col p-4"}>
      <Input
        value={phone}
        onChange={(e)=> {
          setPhone(e.target.value)
        }}
        type="phone"
        label="手机号"
        className="max-w-sm"
        endContent={
          <Button onClick={handleGetImageCode}>获取验证码</Button>
        }
      />
        {verifyPicUrl &&
          <Input
            value={picCode}
            onChange={(e)=> {
              setPicCode(e.target.value)
            }}
            type="text"
            label="图形验证码"
            className="max-w-sm"
            endContent={
                <img className={"h-full"} src={verifyPicUrl} alt=""/>
            }
          />
        }

        <Input
            value={phoneCode}
            onChange={(e)=> {
                setPhoneCode(e.target.value)
            }}
            type="text"
            label="手机验证码"
            className="max-w-sm"
            endContent={
                <Button onClick={handleGetPhoneCode}>发送验证码</Button>
            }
        />

        <Button onClick={handleLingqu}>领取礼包</Button>
    </div>
}

export default Lisheng