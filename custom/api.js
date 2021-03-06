/**
 * 随机生成十六进制颜色
 */

function randomColor() {
  var hex = Math.floor(Math.random() * 0xffffff).toString(16); //随机生成ffffff以内16进制数
  while (hex.length < 6) {
    //while循环判断hex位数，少于6位前面加0凑够6位
    hex = "0" + hex;
  }
  return `#${hex}`; //返回'#'开头16进制颜色
}

/**
 * 生成唯一ID
 */
function guid() {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}
/**
 *对象数组的深拷贝
 */
function clone(Obj) {
  var buf;
  if (Obj instanceof Array) {
    buf = []; //创建一个空的数组
    var i = Obj.length;
    while (i--) {
      buf[i] = clone(Obj[i]);
    }
    return buf;
  } else if (Obj instanceof Object) {
    buf = {}; //创建一个空对象
    for (var k in Obj) {
      //为这个对象添加新的属性
      buf[k] = clone(Obj[k]);
    }
    return buf;
  } else {
    return Obj;
  }
}
/**
 * 数组的深拷贝
 */
function deepCopyArr(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      newArr[i] = deepCopyArr(arr[i]);
    } else {
      newArr[i] = arr[i];
    }
  }
  return newArr;
}

/**
 * 对象的深拷贝
 * 转换成json再转换成对象
 */
function deepCopyObj(obj) {
  var newObj = obj.constructor === Array ? [] : {}; //数组对象 or 对象
  if (typeof obj !== "object") {
    //obj是否为对象
    return;
  } else if (window.JSON) {
    //支持json
    newObj = JSON.parse(JSON.stringify(obj)); //序列化 + 反序列化
  } else {
    //不支持json
    for (var i in obj) {
      newObj[i] = typeof obj[i] === "object" ? deepCopyObj(obj[i]) : obj[i];
    }
  }
  return newObj;
}

/**
 * 对象是否未空
 */
function isEmptyObject(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

/**
 * 对象数组根据属性排序
 * var result = obj.sort(compare(property))
 */
function sortObj(property) {
  return function(obj1, obj2) {
    var value1 = obj1[property];
    var value2 = obj2[property];
    return value2 - value1; //降序
  };
}
/**
 * 判断两个日期相差天数
 */
function compare(start, end) {
  start = new Date(start);
  end = new Date(end);
  startDay = (start.getTime() + 8 * 3600 * 1000) / (3600 * 24 * 1000);
  endDay = (end.getTime() + 8 * 3600 * 1000) / (3600 * 24 * 1000);
  startDay = Math.ceil(startDay);
  endDay = Math.ceil(endDay);
  var day = Math.abs(startDay - endDay);
  console.log(day);
  return day;
}