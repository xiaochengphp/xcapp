// require('../../utils/md5.js')

let app = getApp()

Page({
    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 获取用户信息
        var _this = this;
        wx.getUserInfo({
            success: function (res) {
                _this.setData({
                    username: res.userInfo.nickName,
                    avatarUrl: res.userInfo.avatarUrl,
                })
                app.userInfo = {
                    username: res.userInfo.nickName,
                    avatarUrl: res.userInfo.avatarUrl,
                }
            }
        })
    },

    chongzhi(e) {
        console.log(app.openid);
        wx.request({
            url: 'https://qq.ay28.top/app/index.php?i=55&t=0&v=10&from=wxapp&c=entry&a=wxapp&do=gettoken&&m=xyg_xcyy&sign=de6cf1cb7b659f25c6ab0c5a61e6d70e' + '&func=chongzhi',
            data: {
                openid: app.openid
            },
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
                console.log(res)
                wx.requestPayment({
                    'timeStamp': res.data.timeStamp,
                    'nonceStr': res.data.nonceStr,
                    'package': res.data.package,
                    'signType': 'MD5',
                    'paySign': res.data.paySign,
                    'success': function (res) {
                        console.log('success');
                        wx.showToast({
                            title: '支付成功',
                            icon: 'success',
                            duration: 3000
                        });
                    },
                    'fail': function (res) {
                        console.log(res);
                    },
                    'complete': function (res) {
                        console.log(res);
                    }
                });
            },
            fail: function (res) {
                console.log(res.data)
            }
        });
    },
    getTimeStamp() {
        var tmp = Date.parse(new Date()).toString();
        tmp = tmp.substr(0, 10);
        return tmp
    },
    onMyCar(e) {
        wx.navigateTo({
            url: 'myCar/myCar',
        })
    },
    // 我的订单
    onGoOrder(e) {
        wx.switchTab({
            url: '../order/order',
        })
    },
    // 地址管理
    onAddressAdmin(e) {
        wx.chooseAddress({
            success: function (res) {
            }
        })
    },
    // 打开摄像头
    onOpenShext(e) {
        wx.navigateTo({
            url: 'openShext/openShext',
        })
    },

    // 修改权限
    onChengeRoot(e) {
        wx.openSetting({
            success: (res) => {
                res.authSetting = {
                    "scope.userInfo": true,
                    "scope.userLocation": true
                }
            }
        })
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