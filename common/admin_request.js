/**
 * @param {Object} data
 * 各个 数据请求 方法
 */
import network from "./network.js";
/**
 * 获取店铺信息
 * @param {Object} data
 */
const shopAdmin = function(action,data) {
	return adminNetwork("shops",action,data);
}
/**
 * 订单管理
 * @param {Object} data
 */
const orderAdmin = function(action,data) {
	return adminNetwork("orders",action,data);
}

/**
 * 商品信息管理
 * @param {Object} data
 */
const goodsAdmin = function(action,data) {
	return adminNetwork("goods",action,data);
}

/**
 * 商品信息管理
 * @param {Object} data
 */
const categoryAdmin = function(action,data) {
	return adminNetwork("categories",action,data);
}

const adminNetwork = (module,action,data)=>{
	//统一读取店铺id,必填项
	let adminShopId = uni.getStorageSync("adminShopId");
	if(!adminShopId){
		return false;
	}
	//console.log(adminShopId)
	return network({
		url: "admin",
		data: {
			module:module,
			action:action,
			data:data,
			shopid:adminShopId
		},
		auth: true,
		isShowLoading: true
	});
}
export {
	shopAdmin,
	orderAdmin,
	goodsAdmin,
	categoryAdmin
}
