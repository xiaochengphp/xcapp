// pages/washcar/yuyue/yuyue.js
import { MyLoad } from '../../template/myload-template/myload-template.js'
import { Yuyue } from 'class/yuyue-class.js'
let url = 'https://qq.ay28.top/app/index.php?i=55&t=0&v=10&from=wxapp&c=entry&a=wxapp&do=gettime&&m=xyg_xcyy&sign=38aa6c10a839f756a4bb03044a50f5df'

let app = getApp()
let myLoad
let yuYue

Page({

    data: {
        isc: 0,
        isDataLoad: false,
    },
    choose_date(el) {
        this.setData({ isc: el.currentTarget.dataset.isc })
        app.globalData.g_washcarYuyueDay = el.currentTarget.dataset.data.day
        this.getTimeList(el.currentTarget.dataset.data.time)
    },

    onLoad: function (options) {
        // 获取加载类
        myLoad = new MyLoad(this)
        // 实例化预约类
        yuYue = new Yuyue(this, myLoad)
        // 初始化预约
        yuYue.init(url)
    },

    // 选择时间
    swTime(e) {
        // app.globalData.g_washcarYuyueDay = e.currentTarget.dataset.data.day
        app.globalData.g_washcarYuyueTime = e.currentTarget.dataset.start
        // console.log(app.globalData.g_washcarYuyueDay)
        wx.navigateBack()
    },
    // 选择已过期时间
    noSwTime(e) {
        wx.showModal({
            title: '提示',
            content: '当前预约时间已过,请重新选择',
        })
    },
    // 获取日期的时间数组
    getTimeList(time) {
        yuYue.getTimeList(time)
    },
})