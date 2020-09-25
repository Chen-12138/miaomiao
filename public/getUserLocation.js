//百度地图获取城市名称的方法
let getCurrentCityName = function () {
    return new Promise(function (resolve, reject) {
        let myCity = new BMap.LocalCity()
        // console.log(myCity)
        myCity.get(function (result) {
            resolve(result)
        })
    })
}
export default getCurrentCityName