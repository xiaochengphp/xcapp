
let jinxing = [{
    id: 0,
    fwType: '五座轿车',
    yuyueTime: '2018年1月25日17:51:51',
    createTime: '2018年1月25日17:52:15',
    address: '广东省韶关市浈江区风度北路125号',
    carpai: '粤F22222',
    car: '奔驰',
    state: '进行中'
}, {
    id: 2,
    fwType: '七座轿车',
    yuyueTime: '2018年1月26日17:56:32',
    createTime: '2018年1月26日17:56:39',
    address: '广东省韶关市浈江区风度北路125号',
    carpai: '粤F88888',
    car: '本田',
    state: '进行中'
}]
let wancheng = [{
    id: 1,
    fwType: '五座轿车',
    yuyueTime: '2018年1月25日17:51:51',
    createTime: '2018年1月25日17:52:15',
    address: '广东省韶关市浈江区风度北路125号',
    carpai: '粤F22222',
    car: '奔驰',
    state: '已完成'
}, {
    id: 3,
    fwType: '七座轿车',
    yuyueTime: '2018年1月26日17:56:32',
    createTime: '2018年1月26日17:56:39',
    address: '广东省韶关市浈江区风度北路125号',
    carpai: '粤F88888',
    car: '本田',
    state: '已完成'
}]
let all = [{
    id: 0, fwType: '五座轿车', yuyueTime: '2018年1月25日17:51:51', createTime: '2018年1月25日17:52:15',
    address: '广东省韶关市浈江区风度北路125号', carpai: '粤F22222', car: '奔驰', state: '进行中'
},
{
    id: 1, fwType: '五座轿车', yuyueTime: '2018年1月25日17:51:51', createTime: '2018年1月25日17:52:15',
    address: '广东省韶关市浈江区风度北路125号', carpai: '粤F33333', car: '本田', state: '已完成'
},
{
    id: 2, fwType: '五座轿车', yuyueTime: '2018年1月25日17:51:51', createTime: '2018年1月25日17:52:15',
    address: '广东省韶关市浈江区风度北路125号', carpai: '粤F44444', car: '奔驰', state: '进行中'
}, 
{
    id: 3, fwType: '七座轿车', yuyueTime: '2018年1月26日17:56:32', createTime: '2018年1月26日17:56:39',
    address: '广东省韶关市浈江区风度北路125号', carpai: '粤F88888', car: '本田', state: '已完成'
}]

Page({
    data: {
        table_active: 0,
        dataList: jinxing
    },
    onLoad(e) {
        // console.log(e)
    },
    onConduct(e) {
        this.setData({
            table_active: 0,
            dataList: jinxing
        })
    },
    onComplete(e) {
        this.setData({
            table_active: 1,
            dataList: wancheng
        })
    },
    onAll(e) {
        this.setData({
            table_active: 2,
            dataList: all
        })
    }
})