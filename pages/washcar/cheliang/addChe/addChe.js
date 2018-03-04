import { ParseChe } from '../../../template/picker-template/class/ParseChe-class'
import { PickerChepai } from '../../../template/picker-chepai-template/class/PickerChepai-class'
import { Check } from '../../../../utils/checkData.js'

let check = new Check()

Page({
    data: {
        sexs: [
            { value: '先生', checked: 'true'},
            { value: '女士' }
        ],
        sex: '先生',
        chepai: '粤',
        zimu: 'F',
        phone: 13076246666,
        isShowPicker: false,
    },
    onLoad(){
        new PickerChepai(this)
        new ParseChe(this)
    },
    radioChange: function (e) {
        this.data.sex = e.detail.value
        console.log(this.data.sex)
    },
    // 提交
    submit(e){
        let getData = this.data
        let data = {
            name: getData.username,
            sex: getData.sex,
            phone: getData.phone,
            chepai: getData.chepai + getData.zimu + getData.chenum,
            car: getData.car,
            color: getData.color

        }
        let resMsg = this.checkPostData(data)
        
        if (resMsg != true){
            wx.showModal({
                title: '警告',
                content: resMsg,
            })
            console.log(resMsg)
            return 0;
        }
        wx.showModal({
            content: '结果在控制台看',
        })
        console.log(data)
        setTimeout(()=>{
            wx.navigateBack()
        }, 2000)

    },
    // 校验全部数据
    checkPostData(data){
        // 姓名
        let resUsername = check.checkName(data.name)
        if(resUsername != true){return resUsername}
        // 手机号
        let resPhone = check.checkPhone(data.phone)
        if (resPhone != true){return resPhone}
        // 车牌号
        let resChepai = check.checkChepai(data.chepai)
        if (resChepai != true) { return resChepai }
        // 车型
        let resCar = check.checkCar(data.car)
        if (resCar != true) { return resCar }
        // 颜色
        let resColor = check.checkColor(data.color)
        if (resColor != true) { return resColor }
        
        return true
    },
    // 获取姓名
    getName(e) {
        this.data.username = e.detail.value
    },
    // 获取联系电话
    getPhone(e) {
        this.data.phone = e.detail.value
    },
    // 获取车颜色
    getColor(e){
        this.data.color = e.detail.value
    },
    // 获取车牌数字
    getCheNum(e){
        this.data.chenum = e.detail.value
    }
})