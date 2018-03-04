import { MyLoad } from '../template/myload-template/myload-template.js'

let app = getApp()
let myload
let url = 'https://qq.ay28.top/app/index.php?i=55&t=0&v=10&from=wxapp&c=entry&a=wxapp&do=getpage&&m=xyg_xcyy&sign=277f9ac8a7b32ff1b4789751231be88e'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isDataLoad: false,
    },
    onGoWashTap(el) {
        let data = el.currentTarget.dataset
        let data2 = this.data.washcar
        let danxuan = app.globalData.g_washcarJiben

        for (let i in danxuan) {
            if (danxuan[i].isHi) {
                danxuan[i].isHi = false
                break;
            }
        }
        data2[data.key].isHi = true
        // data.isHi = true
        app.globalData.g_washcarJibenMoney = parseFloat(data.option.price)
        app.globalData.g_washcarJiben = data2

        wx.switchTab({
            url: '../washcar/washcar',
        })
    },

    onLoad(options) {
        let that = this
        myload = new MyLoad(this)

        wx.request({
            url: url,
            success(res){
                let data = res.data.data

                let jiben = []

                data.product.forEach((v, i, arr) => {
                    if (v.is_style === '基本') {
                        jiben.push(v)
                    }
                })

                that.setData({
                    swiperImg: data.data,
                    washcar: jiben
                })
            }
        })

        setTimeout(() => {
            myload.hideMyLoad()
        }, 400)
    },
    onPullDownRefresh(){
        let that = this
        myload.showMyLoad()

        wx.request({
            url: url,
            success(res) {
                let data = res.data.data
                let jiben = []

                data.product.forEach((v, i, arr) => {
                    if (v.is_style === '基本') {
                        jiben.push(v)
                    }
                })
                that.setData({
                    washcar: jiben
                })

                wx.stopPullDownRefresh()
                myload.hideMyLoad()
            }
        })
    }

})