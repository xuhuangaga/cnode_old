
//点击登录
let login = document.getElementsByClassName('login')
Array.from(login).map((item) => {
  item.addEventListener('click', () => {
    localStorage.removeItem('username')
    window.open('login.html', '_self')
  })
})
//点击首页
let home = document.getElementsByClassName('home')

Array.from(home).map((item) => {
  item.addEventListener('click', () => {
    window.open('index.html', '_self')
  })
})

//判断时间是在多少秒 多少分 多少时......之前
function getTime(a, b) {
  let minute = 1000 * 60
  let hour = minute * 60
  let day = hour * 24
  let week = day * 7
  let month = day * 30
  let year = month * 12
  let time1 = dayjs(b).valueOf() //当前的时间戳
  let time2 = dayjs(a).valueOf()//指定时间的时间戳
  let time = time1 - time2

  let result = null
  if (time < 0) {
    result = "--"
  }
  else if (time / year >= 1) {
    result = parseInt(time / year) + "年前"
  } else if (time / month >= 1) {
    result = parseInt(time / month) + "个月前"
  } else if (time / week >= 1) {
    result = parseInt(time / week) + "周前"
  } else if (time / day >= 1) {
    result = parseInt(time / day) + "天前"
  } else if (time / hour >= 1) {
    result = parseInt(time / hour) + "小时前"
  } else if (time / minute >= 1) {
    result = parseInt(time / minute) + "分钟前"
  } else {
    result = "刚刚"
  }
  return result
}

// let backtotop = document.getElementById('backtotop')
// backtotop.addEventListener('click',()=>{
//   scrollTo(0,0)
// })