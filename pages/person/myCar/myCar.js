
let app = getApp()

Page({

    data: {
        carsList: app.g_baseSql.cheliangs
    },

    onLoad: function (options) {

    },
    // 编辑
    carEdit(e) {
        const id = e.currentTarget.dataset.id
        console.log(id)
        wx.navigateTo({
            url: `../../washcar/cheliang/editChe/editChe?id=${id}`,
        })
    },
    // 洗车
    xiche(e){
        const data = e.currentTarget.dataset.data

        app.globalData.g_wasgcarSelChe = data
        wx.switchTab({
            url: '../../washcar/washcar',
        })
    },
    // 添加爱车
    carAdd(e){
        wx.navigateTo({
            url: '../../washcar/cheliang/addChe/addChe',
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})