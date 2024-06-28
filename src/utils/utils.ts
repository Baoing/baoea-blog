import copy from "copy-to-clipboard";
import {toast} from "sonner";

export const isBrowser = () => {
    return typeof window !== 'undefined'
}

/**
 * 复制内容
 * @param content
 */
export const copyToClipboard = (content: string) => {
    if(!content) {
        return toast.error("内容为空")
    }
    copy(content)
    toast.success("复制成功")
}

/**
 * 定时执行
 * @param purchaseTime 预定时间 时分秒
 * @param purchaseCount 执行次数
 * @param purchaseFunction 执行函数
 */
export function purchaseAtTime(purchaseTime:string, purchaseCount:number, purchaseFunction: ()=> void) {
    // 获取当前时间
    // const now = new Date();
    console.log(new Date())
    const now = new Date(new Date().getTime() + (24 * 60 * 60 * 1000));
    const currentTime = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

    console.log(currentTime <= purchaseTime)
    // 计算距离抢购时间的时间差（毫秒）
    let timeDiff;
    if (currentTime <= purchaseTime) {
        const purchaseDateTime = new Date(now.toDateString() + ' ' + purchaseTime);
        timeDiff = purchaseDateTime.getTime() - now.getTime();
    } else {
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const purchaseDateTime = new Date(tomorrow.toDateString() + ' ' + purchaseTime);
        timeDiff = purchaseDateTime.getTime() - now.getTime();
    }

    // 输出距离下一次抢购的时间
    console.log('距离下一次抢购的时间为：' + (timeDiff / 1000) + '秒');

    toast("距离执行定时抢购的时间："+(timeDiff / 1000 / 60).toFixed(2) + "分钟")

    // 设置定时器，在抢购时间触发
    setTimeout(() => {
        console.log('开始抢购！');

        let i = purchaseCount
        const purchaseInterval = setInterval(() => {
            console.log('第 ' + (purchaseCount - i + 1) + ' 次抢购');
            purchaseFunction();
            i--;
            if (i <= 0) {
                clearInterval(purchaseInterval);
            }
        }, 800); // 每500毫秒执行一次抢购函数
    }, timeDiff);
}

export const validatePhoneNumber = (phoneNumber:string) => {
    // 使用正则表达式检查手机号码格式
    const reg = /^1[3456789]\d{9}$/;
    return reg.test(phoneNumber);
}
