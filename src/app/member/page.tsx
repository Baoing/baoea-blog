"use client"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Tab,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
  TimeInput,
  useDisclosure
} from "@nextui-org/react";
import {addBooking, getMallCouponList, getOrderDetailById} from "@/utils/api"

import {Observer} from "mobx-react"
import stores from "@/stores";
import {
  get0Mango,
  get100Points,
  get149Mango,
  get19Himalaya,
  get1Himalaya,
  get1Mango,
  get399Mango,
  get49Mango,
  getDSNCoupon,
  getParkingCoupon
} from "./metadata"
import {toast} from "sonner";
import {Table} from "@nextui-org/table";
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/modal";
import {Time} from "@internationalized/date";
import {ClockCircleLinearIcon} from "@/app/components/Icons";
import {Input} from "@nextui-org/input";
import {useState} from "react";
import {copyToClipboard, purchaseAtTime} from "@/utils/utils";


export default function Member() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [maxCount, setMaxCount] = useState(10)
  const [time, setTime] = useState(new Time(11, 0))
  const [couponIds, setCouponIds] = useState({couponid0: "", couponid1: "", couponid2: "", couponid5: ""})

  /**
   * 下单
   * @param token
   * @param body
   */
  const handleAddbooking = (token: string, body: any) => {
    addBooking({
      token,
      body
    }).then(({code, msg, data}) => {
      if (code === 200 && data) {
        toast.success('购买成功!')
        getOrderDetailCode(token, data.orderNo)
      } else {
        toast.error(msg)
      }
    })
  }

  /**
   * 获取订单
   * @param token
   * @param orderId
   */
  const getOrderDetailCode = (token, orderId) => {
    getOrderDetailById(token, orderId).then(res => {
      try {
        if (res.code === 200) {
          const {couponName, couponId} = res.data.subOrderDetails[0].productInfo[0].virtualInfos[0]

          if (couponId) {
            MembersStore.addCoupons(token, {name: couponName, code: couponId})
          }
        }
      } catch (e) {
        toast.error(e)
      }
    })
  }


  const {MembersStore} = stores

  const getCouponList = (token: string) => {
    getMallCouponList(token).then(res => {
      if (res.code === 200) {
        const {mallCoupons} = res.data

        const couponids = {couponid0: "", couponid1: "", couponid2: "", couponid5: ""}

        mallCoupons.forEach(coupon => {
          switch (coupon.configId) {
            case 31100:
              couponids.couponid0 = coupon.couponId;
              break;
            case 31277:
              couponids.couponid1 = coupon.couponId;
              break;
            case 31280:  //这是100积分卷获取id存储id
              couponids.couponid2 = coupon.couponId;
              break;
            case 30942:
              couponids.couponid5 = coupon.couponId;
              break;
            default:
              break;
          }
        });


        // 检查是否有有效的 couponId 存储，如果没有则输出错误信息
        if (couponids.couponid0 || couponids.couponid1 || couponids.couponid2 || couponids.couponid5) {
          toast('成功收集到卷码');
          console.log(couponids)
          setCouponIds(couponids)
        } else {
          toast.error('未找到有效的卷码信息');
        }
      }
    })
  }

  return <Observer>{() => {
    // 定时抢购
    const handleFlashSale = () => {
      const body = getParkingCoupon()
      purchaseAtTime(time.toString(), maxCount, () => {
        toast("开始抢购！")
        MembersStore.users.map(user => {
          handleAddbooking(user.token, body)
        })
      })
    }

    return <div className="p-5">
      {
        MembersStore.users.length <= 0
          ? <div className="p-4">暂未登录账户</div>
          : <Tabs aria-label="Options">
            {
              MembersStore.users.map(user =>
                <Tab key={user.data.mobile} title={user.data.mobile}>
                  <Card>
                    <CardHeader className="flex gap-3">
                      <div className="flex flex-col">
                        <p className="text-small text-default-500">手机号：{user.data.mobile}</p>
                        <p className="text-small text-default-500">剩余积分：{user.data.mebPoint}</p>
                        <p className="text-small text-default-500 flex gap-2 items-center">
                          <span>Token：{user.token.slice(0, 20)}...</span>
                          <Button size={"sm"} onClick={() => copyToClipboard(user.token)}>复制</Button>
                        </p>
                      </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="flex gap-2 flex-row flex-wrap">
                      <Button className="w-[100px]" onClick={() => handleAddbooking(user.token, getParkingCoupon())}>
                        购买停车券(9)
                      </Button>

                      <Button className="w-[160px]"
                              onClick={() => handleAddbooking(user.token, getDSNCoupon(user.data.mobile))}>
                        购买迪士尼(23750)
                      </Button>


                      <Button className="w-[160px]"
                              onClick={() => getCouponList(user.token)}>
                        获取所有券码
                      </Button>

                      <Button className="w-[160px]"
                              onClick={() => handleAddbooking(user.token, get100Points(couponIds.couponid2))}>
                        100积分（需券码）
                      </Button>

                      <Button className="w-[160px]"
                              onClick={() => handleAddbooking(user.token, get1Himalaya())}>
                        1积分喜马拉雅
                      </Button>

                      <Button className="w-[160px]"
                              onClick={() => handleAddbooking(user.token, get19Himalaya())}>
                        19积分喜马拉雅
                      </Button>

                      <Button className="w-[160px]"
                              onClick={() => handleAddbooking(user.token, get1Mango())}>
                        1积分芒果
                      </Button>

                      <Button className="w-[160px]"
                              onClick={() => handleAddbooking(user.token, get0Mango(couponIds.couponid1))}>
                        0积分芒果（需券码）
                      </Button>
                      <Button className="w-[160px]"
                              onClick={() => handleAddbooking(user.token, get399Mango(couponIds.couponid1))}>
                        399芒果季卡（需券码）
                      </Button>
                      <Button className="w-[160px]"
                              onClick={() => handleAddbooking(user.token, get49Mango(couponIds.couponid5))}>
                        49芒果月卡（需券码）
                      </Button>
                      <Button className="w-[160px]"
                              onClick={() => handleAddbooking(user.token, get149Mango(couponIds.couponid0))}>
                        149芒果月卡（需券码）
                      </Button>

                    </CardBody>
                  </Card>
                </Tab>)
            }
          </Tabs>
      }

      <Divider className="mb-4"/>


      <Card>
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-small">定时抢购</p>
            <p className="text-small text-default-500">开启定时抢购后请勿退出页面， 所有账户自动抢购</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody className="flex gap-2 flex-row flex-wrap">
          <Button className="w-[100px]" onPress={onOpen}>
            抢购停车券(9)
          </Button>
        </CardBody>
      </Card>

      <Modal placement={"top-center"} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">抢购配置</ModalHeader>
              <ModalBody>
                <p>
                  <TimeInput
                    label="抢购时间"
                    labelPlacement="outside"
                    value={time}
                    onChange={(e) => {
                      setTime(e)
                    }}
                    defaultValue={new Time(11, 0)}
                    startContent={(
                      <ClockCircleLinearIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0"/>
                    )}
                  />
                </p>
                <p>
                  <Input
                    label="每个号最大抢购次数"
                    type={"number"}
                    value={maxCount}
                    onChange={(e) => {
                      setMaxCount(Number(e.target.value))
                    }}
                  />
                </p>

              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={() => {
                  handleFlashSale()
                  onClose()
                }}>
                  确定
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Divider className="mt-4 mb-4"/>

      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>名称</TableColumn>
          <TableColumn>券码</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"暂无券码"}>
          {
            MembersStore.coupons.map((coupon, index) => <TableRow key={index}>
              <TableCell>{coupon.name}</TableCell>
              <TableCell>{coupon.code}</TableCell>
            </TableRow>)
          }
        </TableBody>
      </Table>

      <Button className={"mt-4"} onClick={() => {
        if (MembersStore.coupons.length <= 0) {
          return toast.error("暂无券码")
        }
        let result = '';
        MembersStore.coupons.forEach(item => {
          result += `${item.name}: ${item.code},\n`;
        });
        copyToClipboard(result)
      }}>复制所有券码</Button>
    </div>
  }}</Observer>
}