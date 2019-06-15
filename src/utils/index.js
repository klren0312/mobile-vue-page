export const getToken = ()=>{
  return localStorage.getItem('token')
}
//JS操作cookies方法!
//写cookies
export const setCookie = (name,value)=>{
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days*24*60*60*1000);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

export const getCookie = (name)=>{
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
      return unescape(arr[2]);
  else
      return null;
}
export const delCookie = (name)=>{
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval=getCookie(name);
  if(cval!=null)
      document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
/*img canvas压缩*/
export const compressionImage = (path, obj, callback) =>{
  if(path.size/1024<512){
      return path;
  }
  var img = new Image();
  img.src = path;

  img.onload = function(e){

      var that = this;
      // 默认按比例压缩
      var w = that.width,
          h = that.height,
          scale = w / h;
      w = obj.width || w;
      h = obj.height || (w / scale);
      var quality = 0.7;  // 默认图片质量为0.7
      //生成canvas
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      // 创建属性节点
      var anw = document.createAttribute("width");
      anw.nodeValue = w;
      var anh = document.createAttribute("height");
      anh.nodeValue = h;
      canvas.setAttributeNode(anw);
      canvas.setAttributeNode(anh);
      ctx.drawImage(that, 0, 0, w, h);
      // 图像质量
      if(obj.quality && obj.quality <= 1 && obj.quality > 0){
          quality = obj.quality;
      }
      // quality值越小，所绘制出的图像越模糊
      var base64 = canvas.toDataURL('image/jpeg', quality );
      // 回调函数返回base64的值

      callback(base64);
  }
};
/*图片下载*/
export const downloadImg = (img,imgName)=>{
  function getBase64Image(img) {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, img.width, img.height);
      var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
      var dataURL = canvas.toDataURL("image/"+ext)
      return dataURL;
  };
  var image = new Image();
  image.src = img + '?v=' + Math.random(); // 处理缓存
  image.crossOrigin = "*";  // 支持跨域图片
  image.onload = function(){
      var base64 = getBase64Image(image);
      downloadFile(imgName,base64)
  }
  function downloadFile(filename, content){
      let save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
      save_link.href = content;
      save_link.download = filename;
      let event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      save_link.dispatchEvent(event);
  }
}
//数字自增动画
export const numAutoAdd =  function(options){
  /*
 @params el:dom节点
 @params duration:时间间隔
 @params num:数字
 @parmas decimalPoint:保留小数点个数
 @params formatNu:是否3位数格式化
 */

  if(!options.el)return;
  this.startTime = new Date();
  this.elm = document.getElementById(options.el);
  this.duration = options.duration ||1000;
  this.num = options.num||0;
  this.decimalPoint = options.decimalPoint||0;
  this.formatNu = options.formatNu||true;

  this.fomatNum = function (num) {
      var str = num.toFixed(this.decimalPoint);//精确到小数位数多少位
      var num1, x1, x2, reg;
      var arr = str.split(".");
      x1 = arr[0];
      x2 = arr.length > 1 ? '.' + arr[1] : "";
      reg = /(\d+)(\d{3})/;
      if (this.formatNu) {
          while (reg.test(x1)) {
              x1 = x1.replace(reg, '$1' + "," + "$2");
          }
      }
      if (this.formatNu) {
          return x1 + x2;
      } else {
          return str;
      }
  };
  this.change = function () {
      var self = this;
      var p = Math.min(1.0, (new Date().getTime() - this.startTime) / this.duration);//当前时间减去开始时间，然后除以总时间，Math.min,两个数取最小值。
      var nums = this.num * p;

      this.elm.innerHTML =this.fomatNum(nums)
      if (p < 1.0) {//
          var change = requestAnimationFrame(function() {
              self.change();
          });
      } else {
          cancelAnimationFrame(change);
      }
  };
  this.init = function () {
      var self = this
      requestAnimationFrame(function() {
          self.change();
      });
  }

}
/*数字自减动画*/
export const numAutoReduce = function(options){
  /*
   @params el:dom节点
   @params duration:时间间隔
   @params maxNum:最大数字
   @params minNum:最小数字
   @parmas decimalPoint:保留小数点个数
   @params formatNu:是否3位数格式化
   */
  if(!options.el)return;
  this.startTime = new Date();
  this.elm = document.getElementById(options.el);
  this.duration = options.duration ||1000;
  this.maxNum = options.maxNum||0;
  this.minNum = options.minNum||0;
  this.decimalPoint = options.decimalPoint||0
  this.formatNu = options.formatNu||true;

  this.fomatNum = function (num) {
      var str = num.toFixed(this.decimalPoint);//精确到小数位数多少位
      var num1, x1, x2, reg;
      var arr = str.split(".");
      x1 = arr[0];
      x2 = arr.length > 1 ? '.' + arr[1] : "";
      reg = /(\d+)(\d{3})/;
      if (this.formatNu) {
          while (reg.test(x1)) {
              x1 = x1.replace(reg, '$1' + "," + "$2");
          }
      }
      if (this.formatNu) {
          return x1 + x2;
      } else {
          return str;
      }
  };
  this.change = function () {
      var self = this;
      var p = Math.min(1.0, (new Date().getTime() - this.startTime) / this.duration);//当前时间减去开始时间，然后除以总时间，Math.min,两个数取最小值。
      var nums =this.maxNum - (this.maxNum-this.minNum) * p;
      this.elm.innerHTML =this.fomatNum(nums)
      if (p < 1.0) {//
          var change = requestAnimationFrame(function() {
              self.change();
          });
      } else {
          cancelAnimationFrame(change);
      }
  };
  this.init = function () {
      var self = this
      requestAnimationFrame(function() {
          self.change();
      });
  }
}

/*get传参获取*/
export const getQuery=()=>{
  if(document.location.href.split('?').length<=1)return{};

  let queryString = document.location.href.split('?')[1].split('&')
  let obj = {}
  for(let i in queryString){
      var name = queryString[i].split('=')[0];
      var value = queryString[i].split('=')[1];
      obj[name] = value
  }
  return obj;
};
/*身份证验证*/
export const  testIdCard = (t)=> {
  var e = /^[1-6][0-7][\d]{4}((19[\d]{2})|(20[0-1][\d]))((0[1-9])|(1[0-2]))((0[1-9])|([1-2]\d)|(3[0-1]))[\d]{3}([\dx]|[\dX])$/
      , n = e.test(t);
  if (!n)
      return !1;
  for (var r = t.split(""), i = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], o = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2], s = 0, a = 0; a < i.length; a++)
      s += i[a] * r[a];
  var c = o[s % 11];
  return c == r[r.length - 1].toUpperCase()
};
/*全为中文正则*/
export const isChn = (str)=>{
  var reg=/^[\u4e00-\u9fa5]+$/
  if (!reg.test(str)){
      return false
  }else{
      return true
  }
};
/*不包含中文正则*/
export const hasChn = (str)=>{
  var reg = /.*[\u4e00-\u9fa5]+.*$/
  if(!reg.test(str)) {//不能包含中文
      return false;
  }
  return true;
}
/*手机号验证*/
export const isPoneAvailable = (pone) =>{
  var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  if (!myreg.test(pone)) {
      return false;
  } else {
      return true;
  }
}
/*随机数生成*/
export const  randomWord = (randomFlag, min, max)=>{
  var str = "",
      pos="",
      range = min,
      arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // 随机产生
  if(randomFlag){//长度随机  最小-最大
      range = Math.round(Math.random() * (max-min)) + min;
  }
  for(var i=0; i<range; i++){
      pos = Math.round(Math.random() * (arr.length-1));
      str += arr[pos];
  }
  return str;
}
/*canvas 圆百分比*/
export const drawMain = (drawing_elem, percent, forecolor, bgcolor,msg)=> {
  /*
  @drawing_elem: 绘制对象
  @percent：绘制圆环百分比, 范围[0, 100]
  @forecolor: 绘制圆环的前景色，颜色代码
  @bgcolor: 绘制圆环的背景色，颜色代码
*/
  var canvas = document.getElementById(drawing_elem)
  var context = canvas.getContext("2d");
  var center_x = canvas.width / 2;
  var center_y = canvas.height / 2;
  var rad = Math.PI*2/100;
  var speed = 0;
  var width = canvas.width,
      height=canvas.height;
  if (window.devicePixelRatio) {//移动端锯齿解决方案
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      canvas.height = height * window.devicePixelRatio;
      canvas.width = width * window.devicePixelRatio;
      context.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
  // 绘制背景圆圈
  function backgroundCircle(){
      context.save();
      context.beginPath();
      context.lineWidth = 20; //设置线宽
      var radius = center_x - context.lineWidth-50;
      context.lineCap = "round";
      context.strokeStyle = bgcolor;
      context.arc(center_x, center_y, radius, 0, Math.PI*2, false);
      context.stroke();
      context.closePath();
      context.restore();
  }

  //绘制运动圆环
  function foregroundCircle(n){
      context.save();
      context.strokeStyle = forecolor;
      context.lineWidth = 20;
      /*context.lineCap = "round";*/
      var radius = center_x - context.lineWidth-50;
      context.beginPath();
      context.arc(center_x, center_y, radius , -Math.PI/2, -Math.PI/2 +n*rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
      context.stroke();
      context.closePath();
      context.restore();
  }
  console.log(msg.label)
  //绘制文字
  function text(n){
      context.beginPath();
      context.fillStyle = '#a9a9a9'
      context.font="14px Arial";
      var msg_width = context.measureText(msg.label+':'+msg.value).width;
      context.fillText(msg.label+':'+msg.value,center_x-msg_width/2, center_y + msg_width/2-80)
      context.closePath()
      context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
      context.fillStyle = forecolor;
      var font_size = 40;
      context.font = font_size + "px Helvetica";
      var text_width = context.measureText(n.toFixed(0)+"%").width;
      context.fillText(n.toFixed(0)+"%", center_x-text_width/2, center_y + font_size/2);
      context.restore();
  }
  //执行动画
  (function drawFrame(){
      window.requestAnimationFrame(drawFrame);
      context.clearRect(0, 0, canvas.width, canvas.height);
      backgroundCircle();
      text(speed);
      foregroundCircle(speed);
      if(speed >= percent) return;
      speed += 1;
  }());

}
