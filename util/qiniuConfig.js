
var qiniu = require('qiniu')  //引入七牛

module.exports = function() { // 将获得token封装成一个方法，以后获取token直接调用方法就行
    var accessKey = 'hiaSMM1QqBT-0Q0KywiDrpp_tXbgBz8p1mFXkoil';//许可钥匙
    var secretKey = 'A4to1dxJHlKuQ_HuoKWhdf34-J3B_dYzt4eIT5tl';//秘密钥匙
    var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);//签名
    
    var options = {    
        scope: 'didi', //设置包裹层   didi
        expires: 108000   //设置token过期时间三个小时
      };
    var putPolicy = new qiniu.rs.PutPolicy(options);  
    var uploadToken=putPolicy.uploadToken(mac);    
    return uploadToken;  //uploadToken就是我们的上传凭证
}