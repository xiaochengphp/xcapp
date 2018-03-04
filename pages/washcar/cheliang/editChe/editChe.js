import { ParseChe } from '../../../template/picker-template/class/ParseChe-class'
import { PickerChepai } from '../../../template/picker-chepai-template/class/PickerChepai-class'
import { Check } from '../../../../utils/checkData.js'

let app = getApp()
let check = new Check()

Page({
    data: {
        sexs: [
            { value: '先生', checked: 'true' },
            { value: '女士' }
        ],
        ishow: 'none',
        chepai:'',
        zimu:'',
        sex: '先生',
        phone: 13076246666,
        isShowPicker: false,
    },
    onLoad(option) {
        const id = option.id
        
        let editData
        
        for (let i in app.g_baseSql.cheliangs) {
            if (app.g_baseSql.cheliangs[i].id == id) {
                editData = app.g_baseSql.cheliangs[i]
            }
        }

        new PickerChepai(this)
        new ParseChe(this)

        let formatAfter = this.formatData(editData)
        
        this.setData(formatAfter)

    },
    formatData(data) {
        data.username = data.name,
        data.sexs = this.parseSex(data.sex)
        data.phone = data.phone,
        data.chenum = this.parseChepai(data.carpai)
        data.car = this.parseChexing(data.car)
        data.color = data.color

        return data
    },
    // 解析车型
    parseChexing(chexingStr){
        let cheData = app.g_baseSql.cheData
        let value = this.data.value
        
        for (let i in cheData) {
            if (cheData[i].name === chexingStr) {
                value[1] = i
                break;
            }
        }
        this.setData({
            car: chexingStr,
            value: value
        })
        return chexingStr
    },
    // 解析车牌
    parseChepai(chepaiStr){
        let chepai = chepaiStr
        let chepais = app.g_baseSql.chepais
        let zimus = app.g_baseSql.zimus
        let pai = chepaiStr.substr(0, 1)
        let zimu = chepaiStr.substr(1, 1)

        let value2 = [0, 0]

        // 牌
        for (let i in chepais){
            if (chepais[i] === pai) {
                value2[0] = parseInt(i)
                break;
            }
        }
        // 字母
        for (let i in zimus) {
            if (zimus[i] === zimu) {
                value2[1] = parseInt(i)
                break;
            }
        }
        
        this.setData({
            chepai: pai,
            zimu: zimu,
            value2: value2
        })

        return chepai.substr(2,6)
    },
    // 解析性别数组
    parseSex(sex){
        switch (sex) {
            case '男士':
                return  [{ value: sex, checked: 'true' }, { value: '女士' }]
                break
            case '女士':
                return [{ value: '男士' }, { value: sex, checked: 'true' }]
                break
        }
    },
    radioChange: function (e) {
        this.data.sex = e.detail.value
        console.log(this.data.sex)
    },
    // 删除
    del(e) {
        const id = this.data.id

        for (let i in app.g_baseSql.cheliangs){
            if (app.g_baseSql.cheliangs[i].id === id){
                app.g_baseSql.cheliangs.splice(i, 1)
            }
        }

        wx.navigateBack()
    },
    // 提交
    submit(e) {
        let getData = this.data
        let data = {
            name: getData.username,
            sex: getData.sex,
            phone: getData.phone,
            carpai: getData.chepai + getData.zimu + getData.chenum,
            car: getData.car,
            color: getData.color

        }
        console.log(data)
        let resMsg = this.checkPostData(data)

        if (resMsg != true) {
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
        setTimeout(() => {
            wx.navigateBack()
        }, 2000)

    },
    // 校验全部数据
    checkPostData(data) {
        // 姓名
        let resUsername = check.checkName(data.name)
        if (resUsername != true) { return resUsername }
        // 手机号
        let resPhone = check.checkPhone(data.phone)
        if (resPhone != true) { return resPhone }
        // 车牌号
        let resChepai = check.checkChepai(data.carpai)
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
    getColor(e) {
        this.data.color = e.detail.value
    },
    // 获取车牌数字
    getCheNum(e) {
        this.data.chenum = e.detail.value
    },
    onReady(){
        this.setData({ishow:'block'})
    }
})