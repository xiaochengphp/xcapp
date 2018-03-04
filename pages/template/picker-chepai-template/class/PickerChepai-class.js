let chepais = []
let zimus = []

chepais = ['京', '津', '冀', '晋', '蒙', '辽', '吉', '黑', '沪', '苏', '浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤', '桂', '琼', '渝', '川', '贵', '云', '藏', '陕', '甘', '青', '宁', '新']

zimus = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

class PickerChepai{
    constructor(that){
        this.that = that

        this.init()
    }

    init(){
        let that = this.that

        that.setData({
            chepai: chepais[18],
            chepais: chepais,
            zimu: zimus[5],
            zimus: zimus,
            value2: [18,5]
        })

        this.animationEvents(that, 200, false)

        // 显示Piceker
        that.hiddenFloatView2 = () => {
            if (that.data.isShowPicker2) {
                this.animationEvents(that, 200, true)
            } else {
                this.animationEvents(that, 0, true)
                that.setData({ value2: that.data.value2 })
            }
        }
        that.bindChange2 = (e)=> {
            let val = e.detail.value

            that.setData({
                chepai: that.data.chepais[val[0]],
                zimu: that.data.zimus[val[1]],
                value2: val
            })
        }

    }
    // Picker动画
    animationEvents(that, moveY, duration) {
        that.animation2 = wx.createAnimation({
            transformOrigin: "50% 50%",
            timingFunction: "ease",
            delay: 0
        })

        that.animation2.translateY(moveY + 'vh').step()
        if (duration) {
            that.setData({
                animation2: that.animation2.export(),
                isShowPicker2: !that.data.isShowPicker2
            })
        } else {
            that.setData({
                animation2: that.animation2.export(),
            })
        }
    }
}

export { PickerChepai }