import { getChainsList } from "../utils/getLocal.js";

function isPositiveNumber(val) {
  var regPos = /(^[1-9]\d*$)/; //正整数
  if (regPos.test(val)) {
    return true;
  } else {
    return false;
  }
}
// 防抖函数
function debounce(fn, wait) {
  let t;
  return () => {
    let context = this;
    let args = arguments;
    if (t) clearTimeout(t);
    t = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

function flatten(arr) {
  // 数组扁平化
  return arr.reduce((result, item) => {
    return result.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}

function handleMulitePerson(sPerson) {
  console.log(44, sPerson.split(","));
  if (typeof sPerson == "string") {
    let personArr = [];
    sPerson.split(",").forEach((item) => {
      let obj = {
        userCode: item.split("/")[0],
        userName: item.split("/")[1],
      };
      personArr.push(obj);
    });
    return personArr;
  }
}

function uniqueArray(array, key) {
  // json数组根据key去重
  var result = [array[0]];
  for (var i = 1; i < array.length; i++) {
    var item = array[i];
    var repeat = false;
    for (var j = 0; j < result.length; j++) {
      if (item[key] == result[j][key]) {
        repeat = true;
        break;
      }
    }
    if (!repeat) {
      result.push(item);
    }
  }
  return result;
}

function setSessionStorage(key, val) {
  if (typeof val == "object") {
    sessionStorage.setItem(key, JSON.stringify(val));
  } else {
    sessionStorage.setItem(key, val);
  }
}

function getSessionStorage(key) {
  return sessionStorage.getItem(key);
}

function removeStorage(key) {
  sessionStorage.removeItem(key);
}

function urlParams() {
  // 获取链接参数
  var str = location.search.length > 0 ? location.search.substring(1) : "";
  var items = str.length ? str.split("&") : [];
  var args = {};
  var item = null;
  var name = null;
  var value = null;
  for (let i = 0, len = items.length; i < len; i++) {
    item = items[i].split("=");
    name = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);
    if (name.length) {
      args[name] = value;
    }
  }
  return args;
}

function urlAfterParams() {
  var str =
    window.location.hash.length > 0
      ? window.location.hash.substring(window.location.hash.indexOf("?") + 1)
      : "";
  var items = str.indexOf("&") > 0 ? str.split("&") : str.split("?");
  var args = {};
  var item = null;
  var name = null;
  var value = null;
  for (let i = 0, len = items.length; i < len; i++) {
    item = items[i].split("=");
    name = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);
    if (name.length) {
      args[name] = value;
    }
  }
  return args;
}

function parseParams(url) {
  url = decodeURIComponent(url);
  var params = {};
  var idx = url.indexOf("?");
  if (idx > 0) {
    var queryStr = url.substring(idx + 1);
    if (queryStr.length > 0) {
      var arr = queryStr.split("&");
      for (let i = 0; i < arr.length; i++) {
        var pair = arr[i].split("=");
        if (pair.length == 2 && pair[0].length > 0) {
          params[pair[0]] = pair[1];
        }
      }
    }
  }
  return params;
}

//提示消息
function toastMsgSuccess(mainTitle, subTitle, position) {
  //This Is Success Message  Top Center toast-top-center
  toastr.success(subTitle, mainTitle, {
    positionClass: position,
    timeOut: 2000,
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    preventDuplicates: !0,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
    tapToDismiss: !1,
  });
}
function toastMsgWarn(mainTitle, subTitle, position) {
  //This Is Success Message  Top Center toast-top-center
  toastr.warning(subTitle, mainTitle, {
    positionClass: position,
    timeOut: 2000,
    closeButton: true,
    debug: false,
    newestOnTop: true,
    progressBar: false,
    preventDuplicates: !0,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
    tapToDismiss: !1,
  });
}

function toastMsgError(mainTitle, subTitle, position) {
  //This Is Success Message  Top Center toast-top-center
  toastr.error(subTitle, mainTitle, {
    positionClass: position,
    timeOut: 2500,
    closeButton: true,
    debug: false,
    newestOnTop: !0,
    progressBar: false,
    preventDuplicates: !0,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
    tapToDismiss: !1,
  });
}

function getUrlParams(dParam) {
  var dPageURL = window.location.search.substring(1),
    dURLVariables = dPageURL.split("&"),
    dParameterName,
    i;

  for (i = 0; i < dURLVariables.length; i++) {
    dParameterName = dURLVariables[i].split("=");

    if (dParameterName[0] === dParam) {
      return dParameterName[1] === undefined
        ? true
        : decodeURIComponent(dParameterName[1]);
    }
  }
}
function toastShowWait(mainTitle,subTitle,position){
  toastr.warning(subTitle,mainTitle , {
      positionClass: position,
      timeOut: 10000,
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      preventDuplicates: !0,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
      tapToDismiss: !1
  });
}
function toastClear(){
  toastr.clear();
}
export default {
  isPositiveNumber,
  toastClear,
  toastShowWait,
  toastMsgSuccess,
  toastMsgError,
  toastMsgWarn,
  getUrlParams,
  setSessionStorage,
  urlParams,
  urlAfterParams,
  parseParams,
  debounce,
  handleMulitePerson,
  uniqueArray,
  flatten,
  getSessionStorage,
  removeStorage,
};
