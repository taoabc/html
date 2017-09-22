document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
  alert(JSON.stringify(WeixinJSBridge))
  // 通过下面这个API隐藏右上角按钮
  WeixinJSBridge.call('hideOptionMenu');
});
