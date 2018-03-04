// pages/washcar/xuanxiang/xuanxiang.js
let app = getApp()
let url = 'https://qq.ay28.top/app/index.php?i=55&t=0&v=10&from=wxapp&c=entry&a=wxapp&do=getpage&&m=xyg_xcyy&sign=277f9ac8a7b32ff1b4789751231be88e'

Page({

    data: {
        allMoney:0,
        money: 0,
        jibenMoney: 0
    },
    danxuan(e) {
        let data = e.currentTarget.dataset
        let danxuan = app.globalData.g_washcarJiben
        let tempJiben = 0;

        for(let i in danxuan){
            if(danxuan[i].isHi){
                danxuan[i].isHi = false
                // tempJiben = parseFloat(danxuan[i].price)
                break;
            }
        }
        danxuan[data.key].isHi = !danxuan[data.key].isHi
        
        this.data.jibenMoney = parseFloat(danxuan[data.key].price)

        // tempJiben = this.data.jibenMoney - tempJiben
        
        console.log(this.data.jibenMoney)
        this.setData({
            jiben: danxuan,
            allMoney: this.data.money + this.data.jibenMoney
        })
        
        wx.setNavigationBarTitle({
            title: `共计 ${this.data.allMoney} 元`,
        })
    },
    duoxuan(e) {
        let key = e.currentTarget.dataset.key
        let data = e.currentTarget.dataset.data
        let duoxuan = app.globalData.g_washcarDuoxuan
        duoxuan[key].isHi = !duoxuan[key].isHi

        this.setData({
            duoxuan: duoxuan
        })
        if (duoxuan[key].isHi) {
            let price = this.data.money + parseFloat(data.price)
            this.data.money = price

            this.setData({
                allMoney: this.data.money + this.data.jibenMoney
            })
        } else {
            let price = this.data.money - parseFloat(data.price)
            this.data.money = price
            
            this.setData({
                allMoney: this.data.money + this.data.jibenMoney
            })
        }
        wx.setNavigationBarTitle({
            title: `共计 ${this.data.allMoney} 元`,
        })
    },
    onLoad: function (options) {
        let that = this
        // 如果数据为空
        
        if (app.globalData.g_washcarJiben === '') {
            wx.request({
                url: url,
                success(res) {
                    let fw = res.data.data.product
                    let jiben = []
                    let kexuan = []

                    fw.forEach((v, i, arr) => {
                        if (v.is_style === '基本') {
                            jiben.push(v)
                        } else if(v.is_style === '可选'){
                            kexuan.push(v)
                        }
                    })
                    that.setData({
                        jiben: jiben,
                        duoxuan: kexuan,
                        money: app.globalData.g_washcarMoney,
                        jibenMoney: app.globalData.g_washcarJibenMoney,
                        allMoney: app.globalData.g_washcarMoney + app.globalData.g_washcarJibenMoney,
                        originalJiben: jiben,
                        originalDuoxuan: kexuan
                    })

                    app.globalData.g_washcarJiben = jiben
                    app.globalData.g_washcarDuoxuan = kexuan
                    console.log(jiben)
                }
            })
        } else {
            let jiben = app.globalData.g_washcarJiben
            let duoxuan = app.globalData.g_washcarDuoxuan

            this.setData({
                jiben: jiben,
                duoxuan: duoxuan,
                money: app.globalData.g_washcarMoney,
                jibenMoney: app.globalData.g_washcarJibenMoney,
                allMoney: app.globalData.g_washcarMoney + app.globalData.g_washcarJibenMoney,
                originalJiben: jiben,
                originalDuoxuan: duoxuan
            })
        }
        
        wx.setNavigationBarTitle({
            title: `共计 ${this.data.allMoney} 元`,
        })
    },
    // 取消
    quxiao(){
        // 还原数据
        app.globalData.g_washcarJiben = this.data.originalJiben
        app.globalData.g_washcarDuoxuan = this.data.originalDuoxuan
        wx.navigateBack()
    },
    submit(){
        app.globalData.g_washcarMoney = this.data.money
        app.globalData.g_washcarJibenMoney = this.data.jibenMoney
        app.globalData.g_washcarJiben = this.data.jiben
        app.globalData.g_washcarDuoxuan = this.data.duoxuan

        wx.navigateBack()
    },
    onUnload(){
        // this.quxiao()
    }
})