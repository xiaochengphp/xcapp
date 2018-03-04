//app.js
import { cheData } from 'data/che-data'
const chepais = ['京', '津', '冀', '晋', '蒙', '辽', '吉', '黑', '沪', '苏', '浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤', '桂', '琼', '渝', '川', '贵', '云', '藏', '陕', '甘', '青', '宁', '新']

const zimus = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// 获取所有车
function getAllCheArr() {
    let carsArr = []

    for (let v in cheData) {
        carsArr.push({
            'name': cheData[v].name,
            'icon': cheData[v].icon,
        })
    }
    return carsArr
}

let cars = getAllCheArr()
App({
    globalData: {
        g_washcarMoney: 0,
        g_washcarJibenMoney: 0,
        g_washcarYuyueDay: '',
        g_washcarYuyueTime: '',
        g_washcarWeizhi: '',
        g_washcarAddress: '',
        g_washcarJiben: '',
        g_washcarDuoxuan: '',
        g_wasgcarSelChe: '',
    },
    g_baseSql: {
        cheData: cars,
        chepais: chepais,
        zimus: zimus,
        cheliangs: [{
            id: 0,
            name: '小陈',
            sex: '男士',
            phone: '13076248607',
            car: '宝马',
            carpai: '粤F22222',
            color: '白色'
        }, {
            id: 1,
            name: '明海',
            sex: '女士',
            phone: '13076248607',
            car: '劳斯莱斯',
            carpai: '云C88888',
            color: '绿色'
        }]
    },
    onLaunch: function () {
        let that = this
        wx.login({
            success: function (res) {
                if (res.code) {
                    //发起网络请求
                    wx.request({
                        url: 'https://qq.ay28.top/app/index.php?i=55&t=0&v=10&from=wxapp&c=entry&a=wxapp&do=gettoken&&m=xyg_xcyy&sign=de6cf1cb7b659f25c6ab0c5a61e6d70e' + '&func=getCode',
                        data: {
                            code: res.code
                        },
                        success(res){
                            that.openid = res.data.openid
                            that.session_key = res.data.session_key
                        }
                    })
                } else {
                    console.log('获取用户登录态失败！' + res.errMsg)
                }
            }
        });
    }
})