class Yuyue {
    constructor(that, load){
        this.that = that
        this.myLoad = load
        // console.log(this.that)
    }

    init(url){
        let self = this
        let that = this.that
        let myLoad = this.myLoad
        let app = getApp()
        this.url = url

        myLoad.showMyLoad()

        wx.request({
            url: this.url + '&func=getDayList',
            success(res) {
                // console.log(res)
                // return 0;
                let dayArr = res.data.data.day
                let dayList = []
                dayArr.forEach((v, i) => {

                    let day = new Date(parseInt(`${v}000`))
                    day = day.getDay();

                    day = self.parseDay(day)

                    dayList.push({
                        day: day,
                        time: v
                    })
                    
                })
                app.globalData.g_washcarYuyueDay = dayList[0].day

                setTimeout(() => {
                    let dayTime = res.data.data.daytime
                    that.setData({
                        dayList: dayList,
                        swTimeList: dayTime[0],
                        xwTimeList: dayTime[1],
                        wsTimeList: dayTime[2],
                    })
                    myLoad.hideMyLoad()
                }, 400)
            }
        })
    }
    // 获取当前日期的时间数组
    getTimeList(time){
        let that = this.that
        let myLoad = this.myLoad

        myLoad.showMyLoad()

        wx.request({
            url: this.url + '&func=getTimeList&time=' + time,
            success(res) {
                setTimeout(() => {
                    let dayTime = res.data.data
                    // console.log(res)
                    that.setData({
                        swTimeList: dayTime[0],
                        xwTimeList: dayTime[1],
                        wsTimeList: dayTime[2],
                    })
                    myLoad.hideMyLoad()
                }, 1000)
            }
        })
    }

    // 把获取到的数据解析成星期几
    parseDay(data) {
        let day

        switch (data) {
            case 0:
                day = '七'
                break
            case 1:
                day = '一'
                break
            case 2:
                day = '二'
                break
            case 3:
                day = '三'
                break
            case 4:
                day = '四'
                break
            case 5:
                day = '五'
                break
            case 6:
                day = '六'
                break
        }
        return day
    }

}

export { Yuyue }