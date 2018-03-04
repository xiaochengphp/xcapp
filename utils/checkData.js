
class Check {
    // 校验颜色
    checkColor(str) {
        if (str === undefined || str === '') {
            return '请输入颜色'
        }
        return true
    }

    // 校验车型
    checkCar(str) {
        if (str === undefined || str === '') {
            return '请选择车型'
        }
        return true
    }
    // 校验名字
    checkName(str) {
        if (str === undefined || str === '') {
            return '名字不能为空'
        }
        if (str.length <= 4) {
            return true
        } else {
            return '请输入正确的名字'
        }
    }
    // 校验手机号
    checkPhone(str) {
        if (str === undefined || str === '') {
            return '手机号码不能为空'
        }
        var reg = /^1[0-9]{10}$/
        if (reg.test(str)) {
            return true
        } else {
            return '手机号码格式不正确'
        }
    }

    // 校验车牌
    checkChepai(str) {
        var reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/

        if (reg.test(str)) {
            return true
        } else {
            return '车牌号码格式不正确'
        }
    }
}

export { Check }