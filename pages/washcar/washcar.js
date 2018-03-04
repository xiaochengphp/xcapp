// import { ParseChe } from '../template/picker-template/class/ParseChe-class'

let app = getApp();

Page({

    data: {
        money: 0,
        isShowPicker: false
    },
    onGoWeizhi(e){
        let that = this

        wx.chooseLocation({
            success(res){
                that.setData({
                    washcarWeizhi: res.name,
                    washcarAddress: res.address
                })
                app.globalData.g_washcarWeizhi = res.name
                app.globalData.g_washcarAddress = res.address
            }
        })
    },
    onGoCheliang(e){
        wx.navigateTo({
            url: 'cheliang/cheliang',
        })
    },
    onGoXuanxiang(e){
        wx.navigateTo({
            url: 'xuanxiang/xuanxiang',
        })
    },
    onGoYuye(e) {
        // console.log(e)
        wx.navigateTo({
            url: 'yuyue/yuyue',
        })
    },
    onLoad: function (options) {
        // 初始化数据
        // new ParseChe(this)
    },
    // 失去焦点获取手机号
    getPhone(e){
        this.setData({ phone: e.detail.value})
    },
    // 失去焦点获取备注
    getBeizhu(e){
        this.setData({ beizhu: e.detail.value })
    },
    submit(e){
        let str = '';
        for(let i in this.data){
            str += this.data[i]
        }
        wx.showModal({
            title: '提交结果',
            content: str,
        })
        console.log(str)
    },
    onShow: function () {
        let data = app.globalData
        let swFwDay = app.globalData.g_washcarYuyueDay
        let swFwTime = app.globalData.g_washcarYuyueTime
        let yuyueTime = ''
        let yuyueXX = ''
        let money = 0
        
        let fwCheliang = '';

        if (data.g_wasgcarSelChe){
            fwCheliang = `[${data.g_wasgcarSelChe.carpai}]${data.g_wasgcarSelChe.car}`
        }  

        // 单选
        let danxuan = data.g_washcarJiben
        for (let i in danxuan){
            if (danxuan[i].isHi){
                yuyueXX =  `${danxuan[i].title};`
                break;
            }
        }

        // 多选
        let duoxuan = data.g_washcarDuoxuan
        let tempStr = ''
        for (let i in duoxuan) {
            if (duoxuan[i].isHi) {
                tempStr += (duoxuan[i].title + ';')
            }
        }
        this.setData({
            
        })

        if (swFwDay != '' && swFwTime != ''){
            yuyueTime = `周${swFwDay} ${swFwTime}`
        }

        this.setData({
            'fwCheliang': fwCheliang,
            'washMoney': data.g_washcarMoney,
            'yuyueTime': yuyueTime,
            'yuyueXX': yuyueXX + tempStr,
            'money': data.g_washcarMoney + data.g_washcarJibenMoney
        })
    }
})