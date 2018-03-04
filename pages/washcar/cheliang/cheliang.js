// pages/washcar/cheliang/cheliang.js
let app = getApp()

Page({

    data: {
        selCheIndex: null,
        ches: app.g_baseSql.cheliangs
    },
    // 选择车
    selChe(e){
        let data = e.currentTarget.dataset.data

        app.globalData.g_wasgcarSelChe = data
        wx.navigateBack()
    },
    // 编辑选择的车
    selCheEdit(e){
        const id = e.currentTarget.dataset.id
        wx.navigateTo({
            url: `editChe/editChe?id=${id}`,
        })
        // console.log(id)
    },
    // 新增车
    addChe(e){
        wx.navigateTo({
            url: 'addChe/addChe',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

        if (app.globalData.g_wasgcarSelChe){
            this.setData({
                selCheIndex: app.globalData.g_wasgcarSelChe.id
            })
        }
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        
        this.setData({
            ches: app.g_baseSql.cheliangs
        })
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