
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/h_np_home","pages/home/h_jtzx_home","pages/GRZX/user","pages/GRZX/userLogin","pages/GRZX/wxLogin","pages/GRZX/passengerInfo","pages/GRZX/addPassenger","pages/GRZX/addFreeChildren","pages/home/serve","pages/order/newOrderList","pages/GRZX/notice","pages/ZXDT/zxdt_information","pages_GRZX/pages/GRZX/personal","pages_GRZX/pages/GRZX/set","pages_GRZX/pages/GRZX/aboutApp","pages_GRZX/pages/GRZX/infoList","pages_GRZX/pages/GRZX/privacyService","pages_GRZX/pages/GRZX/complaint","pages_GRZX/pages/GRZX/complaintList","pages_GRZX/pages/GRZX/complaintStatus","pages_GRZX/pages/GRZX/Feedback","pages_GRZX/pages/GRZX/FeedbackView","pages_ZXGP/pages/ZXGP/SpecialBus/Home/specialBusHome","pages_ZXGP/pages/ZXGP/SpecialBus/Home/specialLinePicker","pages_ZXGP/pages/ZXGP/SpecialBus/Home/specialReserve","pages_ZXGP/pages/ZXGP/SpecialBus/Home/zxgpHomePage","pages_ZXGP/pages/ZXGP/SpecialBus/ScheduleLineList/specialBusLineList","pages_ZXGP/pages/ZXGP/SpecialBus/ScheduleLineList/specialBusTakeOrder","pages_ZXGP/pages/ZXGP/SpecialBus/stationPicker/specialBusStationPicker","pages_ZXGP/pages/ZXGP/SpecialBus/specialBusOrderPayment/specialBusOrderPayment","pages_ZXGP/pages/ZXGP/TraditionSpecial/Home/ctkyIndex","pages_ZXGP/pages/ZXGP/TraditionSpecial/stationPicker/homeSattionPick","pages_ZXGP/pages/ZXGP/TraditionSpecial/Order/selectTickets","pages_ZXGP/pages/ZXGP/TraditionSpecial/Order/scheduleDetails","pages_ZXGP/pages/ZXGP/TraditionSpecial/seatSelection","pages_ZXGP/pages/ZXGP/TraditionSpecial/Order/oederList","pages_ZXGP/pages/ZXGP/TraditionSpecial/Order/orderDetail","pages_ZXGP/pages/ZXGP/TraditionSpecial/issueView","pages_ZXGP/pages/ZXGP/TraditionSpecial/MapMark/traditionCarMark","pages_ZXGP/pages/ZXGP/TraditionSpecial/MapMark/specialMark","pages_ZXGP/pages/ZXGP/TraditionSpecial/MapMark/checkBusLocation","pages_ZXGP/pages/ZXGP/TraditionSpecial/PayMent/orderPayment","pages_ZXGP/pages/ZXGP/TraditionSpecial/stationPicker/selectStation","pages_ZXGP/pages/ZXGP/TraditionSpecial/PayMent/CTKYPaySuccess","pages_ZXGP/pages/ZXGP/TraditionSpecial/PayMent/CTKYPayFail","pages_ZXGP/pages/ZXGP/TraditionSpecial/Home/stzxIndex","pages_BUS/pages/Bus/BusQuery","pages_BUS/pages/Bus/BusLocation","pages_BUS/pages/Bus/RoutePlan","pages_BUS/pages/Bus/SearchDetail","pages_BUS/pages/Bus/TicketPurchase","pages_BUS/pages/Bus/TransitSearch"],"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#333333","selectedColor":"#ff9012","backgroundColor":"#FFFFFF","borderStyle":"black","fontSize":"16px","list":[{"pagePath":"pages/home/h_np_home","text":"首页"},{"pagePath":"pages/GRZX/notice","text":"通知"},{"pagePath":"pages/home/serve","text":"服务"},{"pagePath":"pages/order/newOrderList","text":"订单"},{"pagePath":"pages/GRZX/user","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"南平综合出行","compilerVersion":"2.8.11","entryPagePath":"pages/home/h_np_home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/h_np_home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","animationType":"fade-in","background":"transparent","backgroundColor":"rgba(0,0,0,0)","popGesture":"none"}},{"path":"/pages/home/h_jtzx_home","meta":{},"window":{"navigationStyle":"custom","animationType":"fade-in","background":"transparent","backgroundColor":"rgba(0,0,0,0)","popGesture":"none"}},{"path":"/pages/GRZX/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/GRZX/userLogin","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/GRZX/wxLogin","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/GRZX/passengerInfo","meta":{},"window":{"enablePullDownRefresh":true,"navigationStyle":"custom"}},{"path":"/pages/GRZX/addPassenger","meta":{},"window":{"navigationStyle":"custom","scrollIndicator":"none"}},{"path":"/pages/GRZX/addFreeChildren","meta":{},"window":{"navigationStyle":"custom","scrollIndicator":"none"}},{"path":"/pages/home/serve","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"服务"}},{"path":"/pages/order/newOrderList","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/GRZX/notice","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"通知"}},{"path":"/pages/ZXDT/zxdt_information","meta":{},"window":{}},{"path":"/pages_GRZX/pages/GRZX/personal","meta":{},"window":{}},{"path":"/pages_GRZX/pages/GRZX/set","meta":{},"window":{"navigationBarTitleText":"设置"}},{"path":"/pages_GRZX/pages/GRZX/aboutApp","meta":{},"window":{"navigationBarTitleText":"关于App"}},{"path":"/pages_GRZX/pages/GRZX/infoList","meta":{},"window":{"enablePullDownRefresh":true,"navigationStyle":"custom"}},{"path":"/pages_GRZX/pages/GRZX/privacyService","meta":{},"window":{"navigationBarTitleText":"软件许可及服务协议","navigationBarBackgroundColor":"#FFFFFF"}},{"path":"/pages_GRZX/pages/GRZX/complaint","meta":{},"window":{}},{"path":"/pages_GRZX/pages/GRZX/complaintList","meta":{},"window":{}},{"path":"/pages_GRZX/pages/GRZX/complaintStatus","meta":{},"window":{}},{"path":"/pages_GRZX/pages/GRZX/Feedback","meta":{},"window":{}},{"path":"/pages_GRZX/pages/GRZX/FeedbackView","meta":{},"window":{}},{"path":"/pages_ZXGP/pages/ZXGP/SpecialBus/Home/specialBusHome","meta":{},"window":{}},{"path":"/pages_ZXGP/pages/ZXGP/SpecialBus/Home/specialLinePicker","meta":{},"window":{}},{"path":"/pages_ZXGP/pages/ZXGP/SpecialBus/Home/specialReserve","meta":{},"window":{}},{"path":"/pages_ZXGP/pages/ZXGP/SpecialBus/Home/zxgpHomePage","meta":{},"window":{"navigationBarTitleText":"武夷新区直达","navigationBarBackgroundColor":"#ffad29"}},{"path":"/pages_ZXGP/pages/ZXGP/SpecialBus/ScheduleLineList/specialBusLineList","meta":{},"window":{"navigationBarTitleText":"班次列表"}},{"path":"/pages_ZXGP/pages/ZXGP/SpecialBus/ScheduleLineList/specialBusTakeOrder","meta":{},"window":{}},{"path":"/pages_ZXGP/pages/ZXGP/SpecialBus/stationPicker/specialBusStationPicker","meta":{},"window":{}},{"path":"/pages_ZXGP/pages/ZXGP/SpecialBus/specialBusOrderPayment/specialBusOrderPayment","meta":{},"window":{}},{"path":"/pages_ZXGP/pages/ZXGP/TraditionSpecial/Home/ctkyIndex","meta":{},"window":{"navigationBarTitleText":"车票订购"}},{"path":"/pages_ZXGP/pages/ZXGP/TraditionSpecial/stationPicker/homeSattionPick","meta":{},"window":{"navigationBarTitleText":"选择站点"}},{"path":"/pages_ZXGP/pages/ZXGP/TraditionSpecial/Order/selectTickets","meta":{},"window":{"enablePullDownRefresh":true,"navigationBarTitleText":"班次列表"}},{"path":"/pages_ZXGP/pages/ZXGP/TraditionSpecial/Order/scheduleDetails","meta":{},"window":{"backgroundColor":"#F1F1F1","navigationBarBackgroundColor":"#FC4646","navigationBarTextStyle":"white","navigationBarTitleText":"班次详情"}},{"path":"/pages_ZXGP/pages/ZXGP/TraditionSpecial/seatSelection","meta":{},"window":{"backgroundColor":"#F1F1F1","navigationBarBackgroundColor":"#FC4646","navigationBarTextStyle":"white","navigationBarTitleText":"选择座位"}},{"path":"/pages_ZXGP/pages/ZXGP/TraditionSpecial/Order/oederList","meta":{},"window":{"navigationBarTitleText":"订单列表"}},{"path":"/pages_ZXGP/pages/ZXGP/TraditionSpecial/Order/orderDetail","meta":{},"window":{"navigationBarTitleText":"订单详情"}},{"path":"/pages_ZXGP/pages/ZXGP/TraditionSpecial/issueView","meta":{},"window":{"navigationBarTitleText":"订单评价"}},{"path":"/pages_ZXGP/pages/ZXGP/TraditionSpecial/MapMark/traditionCarMark","meta":{"isNVue":true},"window":{"navigationBarTitleText":"传统地图标识"}},{"path":"/pages_ZXGP/pages/ZXGP/TraditionSpecial/MapMark/specialMark","meta":{"isNVue":true},"window":{"navigationBarTitleText":"定制标识"}},{"path":"/pages_ZXGP/pages/ZXGP/TraditionSpecial/MapMark/checkBusLocation","meta":{"isNVue":true},"window":{"navigationBarTitleText":"查看班车位置"}},{"path":"/pages_ZXGP/pages/ZXGP/TraditionSpecial/PayMent/orderPayment","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages_ZXGP/pages/ZXGP/TraditionSpecial/stationPicker/selectStation","meta":{},"window":{"navigationBarTitleText":"上下车点选择","navigationBarBackgroundColor":"#FE6C66"}},{"path":"/pages_ZXGP/pages/ZXGP/TraditionSpecial/PayMent/CTKYPaySuccess","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages_ZXGP/pages/ZXGP/TraditionSpecial/PayMent/CTKYPayFail","meta":{},"window":{}},{"path":"/pages_ZXGP/pages/ZXGP/TraditionSpecial/Home/stzxIndex","meta":{},"window":{"navigationBarTitleText":"邵泰专线"}},{"path":"/pages_BUS/pages/Bus/BusQuery","meta":{},"window":{"navigationBarBackgroundColor":"#6BD78C","titleNView":{"searchInput":{"align":"left","disabled":"true","borderRadius":"10px","backgroundColor":"#ffffff","placeholder":"搜索线路/站点/地点","placeholderColor":"#AAAAAA"}}}},{"path":"/pages_BUS/pages/Bus/BusLocation","meta":{},"window":{"navigationBarTitleText":"公交位置"}},{"path":"/pages_BUS/pages/Bus/RoutePlan","meta":{},"window":{"navigationBarTitleText":"线路方案"}},{"path":"/pages_BUS/pages/Bus/SearchDetail","meta":{},"window":{"navigationBarTitleText":"搜索详情"}},{"path":"/pages_BUS/pages/Bus/TicketPurchase","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages_BUS/pages/Bus/TransitSearch","meta":{},"window":{"navigationBarTitleText":"公交搜索"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
