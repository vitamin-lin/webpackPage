jQuery.extend({
  //扩展的东西（参数）是以json对象的形式来出现的；
  // 获取链接参数
  getQueryVariable: function(variable) {
    var query = window.location.search.substring(1)
    var vars = query.split('&')
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=')
      if (pair[0] == variable) {
        return pair[1]
      }
    }
    return false
  },
  setCookie: function(cookieName, cookieValue, expiredays, domain) {
    /* 
      存储cookie setCookie(key, value, 过期天数, 域名)
      关闭浏览器删除 => setCookie('userId', 1234, 0) 
    */
    if (0 === cookieValue) {
      cookieValue = 0
    } else if (!cookieValue) {
      cookieValue = ''
    }
    cookieValue = encodeURIComponent(cookieValue)
    var cookieStr = cookieName + '=' + cookieValue

    if (expiredays && !isNaN(expiredays)) {
      var exdate = new Date()
      exdate.setDate(exdate.getDate() + expiredays)
      cookieStr += '; expires=' + exdate.toUTCString()
    }

    if (domain) {
      cookieStr += '; path=' + '/'
      cookieStr += '; domain=' + domain
    }

    document.cookie = cookieStr
    return cookieValue
  },
  getCookie: function(cookieName) {
    /* 获取cookie */
    var strCookie = document.cookie
    var arrCookie = strCookie.split('; ')
    var cookieValue = null
    for (var i = 0; i < arrCookie.length; i++) {
      var arr = arrCookie[i].split('=')
      if (cookieName == arr[0]) {
        cookieValue = arr[1]
        break
      }
    }
    if (!cookieValue) {
      cookieValue = ''
    }
    cookieValue = decodeURIComponent(cookieValue)
    return cookieValue
  },

  delCookie: function(name) {
    $.setCookie(name, ' ', -1)
  },
  // 链接添加新参数
  addUrlPara: function(name, value) {
    var currentUrl = window.location.href.split('#')[0]
    if (/\?/g.test(currentUrl)) {
      if (/name=[-\w]{4,25}/g.test(currentUrl)) {
        currentUrl = currentUrl.replace(/name=[-\w]{4,25}/g, name + '=' + value)
      } else {
        currentUrl += '&' + name + '=' + value
      }
    } else {
      currentUrl += '?' + name + '=' + value
    }
    if (window.location.href.split('#')[1]) {
      window.location.href =
        currentUrl + '#' + window.location.href.split('#')[1]
    } else {
      window.location.href = currentUrl
    }
  },
  getQueryString: function(name) {
    var reg = new RegExp('(^|&)' + name + '([^&*])(&|$)')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unscape(r[2])
    return null
  },

  getPlatform: function() {
    var srcUid = $.getCookie('openidFrom')
    if (srcUid) {
      $.setCookie('platform', 'share')
      return 'share'
    }

    var cookiePlatform = $.getCookie('platform')
    var linkPlatform = $.getQueryVariable('platform')
    if (linkPlatform) {
      if (cookiePlatform) {
        return cookiePlatform
      } else {
        $.setCookie('platform', linkPlatform)
        return linkPlatform
      }
    } else {
      return cookiePlatform ? cookiePlatform : 'no-platform'
    }
  },
  getSrcuid: function() {
    var cookieSrcuid = $.getCookie('openidFrom')
    return cookieSrcuid
  }
})
