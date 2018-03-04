import { cheData } from '../../../../data/che-data'

class ParseChe {

    constructor(_this) {
        this._this = _this
        this.cheData = cheData

        this.init()
    }
    // 初始化
    init() {
        let that = this._this

        that.setData({
            indexs: this.getIndexArr(),
            cars: this.getAllCheArr(),
            value: [0,0]
        })
        this.animationEvents(that, 200, false)

        // 显示Piceker
        that.hiddenFloatView = () => {
            if (that.data.isShowPicker) {
                // 隐藏
                this.animationEvents(that, 200, true)
            } else {
                // 显示
                that.setData({value: that.data.value})
                this.animationEvents(that, 0, true)
                if (that.data.car === undefined) {
                    that.setData({
                        car: that.data.cars[that.data.value[0]].name
                    })
                }
            }
        }
        that.bindChange = (e) => {
            const val = e.detail.value
            this.pickerChange(val)
            that.setData({
                value: val,
            })
        }
    }
    // 获取索引数组
    getIndexArr() {
        let IndexArr = []
        let json = this.cheData
        let flag = '#'

        IndexArr.push('#')
        for (let v in json) {

            if (json[v].index === flag) {
                continue;
            }
            flag = json[v].index
            IndexArr.push(json[v].index)
        }
        return IndexArr
    }
    // 获取所有车
    getAllCheArr() {
        let carsArr = []

        for (let v in this.cheData) {
            carsArr.push({
                'name': this.cheData[v].name,
                'icon': this.cheData[v].icon,
            })
        }
        // console.log(carsArr)
        return carsArr
    }
    pickerChange(val) {
        let json = this.cheData
        let indexArr = this.getIndexArr()
        let carsArr = this.getAllCheArr()
        let cars = []

        if (val[0] != this._this.data.value[0]) {

            let currentIndex = indexArr[val[0]] // 当前索引
            if (currentIndex === '#') {
                cars = carsArr
            } else {
                for (let v in json) {
                    if (json[v].index === currentIndex) {
                        cars.push({
                            'name': json[v].name,
                            'icon': json[v].icon,
                        })
                    }
                }
            }
            val[1] = 0
            this._this.setData({
                cars: cars,
                car: cars[0].name,
                value: val
            })
        } else {
            this._this.setData({
                car: this._this.data.cars[val[1]].name,
            })
        }
    }
    // Picker动画
    animationEvents(that, moveY, duration) {
        that.animation = wx.createAnimation({
            transformOrigin: "50% 50%",
            timingFunction: "ease",
            delay: 0
        })

        that.animation.translateY(moveY + 'vh').step()
        if (duration) {
            that.setData({
                animation: that.animation.export(),
                isShowPicker: !that.data.isShowPicker
            })
        } else {
            that.setData({
                animation: that.animation.export(),
            })
        }
    }
}

export {
    ParseChe
}