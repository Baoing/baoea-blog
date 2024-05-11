"use client"
import {useEffect, useState} from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, useDisclosure, Snippet} from "@nextui-org/react";
import {sendLogin} from "@/utils/api";
import { Toaster, toast } from 'sonner';
import MembersStore from "@/stores/MembersStore";
import stores from "@/stores";

function validatePhoneNumber(phoneNumber:string) {
  // 使用正则表达式检查手机号码格式
  const reg = /^1[3456789]\d{9}$/;
  return reg.test(phoneNumber);
}

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [phone, setPhone] = useState("")
  const [phoneCode, setPhoneCode] = useState("")
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [captchaValue, setCaptchaValue] = useState("")
  const [captcha, setCaptcha] = useState("https://imgs.bestwehotel.com/socialmember-webservice-sms/vcode/18779580591")
  const [phoneInvalid, setPhoneInvalid] = useState(false)

  const [token, setToken] = useState("6YG6z4rIBQ80EQblIfyHdY1L7lJ2YCcSviGFuZ+dATFgHUjBIMWnQVh42h4nFVsn")

  const { MembersStore } = stores

  const handleGetPhoneCode = () => {
    if(!validatePhoneNumber(phone)){
      setPhoneInvalid(true)
      return
    }

    let url = 'https://ssologin.bestwehotel.com/plateno_mall/unionLogin/gainIdentificationCode/' + phone

    if(captchaValue){
      url +=`?authCode=${captchaValue}`
    }

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if(data.code === 100){
          setCaptcha(data.data)
          onOpen()
        }
        toast(data.msg)
        // 在这里对响应数据进行处理
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
  }

  useEffect(()=>{
    MembersStore.addMember(token)
  },[])


  const handleLogin = () => {
    setLoading(true)
    sendLogin({
      "mobile": phone,
      "validateCode": phoneCode
    }).then(({code, data, msg})=>{
      if(code==200){
        setToken(data)
        toast.success("获取成功")
      } else{
        toast.error(msg)
      }
    }).finally(()=>{
      setLoading(false)
    })
  }

  return <div className={"gap-2 flex flex-col"}>

    <div className={"flex gap-2"}>
      <Input
        value={phone}
        onChange={(e)=> {
          setPhone(e.target.value)
          phoneInvalid && setPhoneInvalid(false)
        }}
        type="phone"
        label="手机号"
        className="max-w-sm"
        errorMessage={phoneInvalid && "请输入正确的手机号"}
        isInvalid={phoneInvalid}
        endContent={
          <Button onClick={handleGetPhoneCode}>获取验证码</Button>
        }
      />
    </div>

    <Input
      value={phoneCode}
      onChange={(e)=> {
        setPhoneCode(e.target.value)
      }}
      type="number"
      label="手机验证码"
      className="max-w-sm"
    />


    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">请输入图形验证码</ModalHeader>
            <ModalBody className={"flex gap-2 flex-row items-center"}>
              <img src={captcha} className={"w-[140px] h-14"} alt=""/>
              <Input
                value={captchaValue}
                onChange={(e)=> {
                  setCaptchaValue(e.target.value)
                }}
                type="text"
                label="图形验证码"
                className="max-w-sm"
              />
            </ModalBody>
            <ModalFooter>
              <Button isDisabled={captchaValue === ""} onPress={()=>{
                handleGetPhoneCode()
                setTimeout(onClose, 1000)
              }}>
                确定
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>

    <Button className={"w-[384px] max-w-full"} onClick={handleLogin} isLoading={loading}>获取Token</Button>
    {
      token && <div className={"w-[384px] max-w-full"}>
        <Snippet className={"w-full"} size={"md"} color="success">
          {token.slice(0, 32)}
          {token.slice(33, 64)}
        </Snippet>
      </div>
    }

    <Toaster richColors  />
  </div>
}

export default Login