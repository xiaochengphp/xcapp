class MyLoad {
    constructor(that) {
        this.that = that
    }

    // 显示数据加载
    showMyLoad() {
        this.that.setData({ isDataLoad: false })
        wx.showNavigationBarLoading()
    }

    // 隐藏数据加载
    hideMyLoad() {
        this.that.setData({ isDataLoad: true })
        wx.hideNavigationBarLoading()
    }
}

export { MyLoad }