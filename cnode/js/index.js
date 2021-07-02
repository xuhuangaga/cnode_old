//tab选项卡
let tab = document.getElementsByClassName('tab')
Array.from(tab).map((item) => {
  item.addEventListener('click', () => {
    Array.from(tab).map((item1) => {
      item1.classList.remove('tab-active')
    })
    item.classList.add('tab-active')
  })
})


//获取主题数据 并显示在页面上
$.ajax({
  url: 'https://cnodejs.org/api/v1/topics',
  method: 'GET',
  success: (res) => {
    // console.log(res);
    if (res.success) {
      let topic = document.getElementById("topic")
      // id
      // 头像图片路径 author  avatar_url
      //top 是否置顶
      //reply_count 回复数
      //visit_count 点击数
      //title 标题
      //last_reply_at 最后一次回复时间
      res.data.map((item) => {

        //每一行的大盒子
        let dv = document.createElement('div')
        dv.classList.add('flex-j-between')
        dv.classList.add('a-center')
        dv.classList.add('topic_dv')

        //左边盒子
        let dv_l = document.createElement('div')
        dv_l.classList.add('middle-c-l')
        dv_l.classList.add('flex')
        dv_l.classList.add('a-center')

        //头像盒子
        let head_dv = document.createElement('div')
        let head_img = document.createElement('img')
        head_img.classList.add('head-pic')
        head_img.src = item.author.avatar_url
        head_dv.appendChild(head_img)
        dv_l.appendChild(head_dv)

        //回复数 斜杠 点击数 大盒子
        var num_dv = document.createElement('div')
        num_dv.classList.add('num_dv')
        num_dv.classList.add('flex')

        //回复数盒子
        let volume_dv = document.createElement('div')
        volume_dv.classList.add('reading-volume')
        volume_dv.title = '回复数'
        volume_dv.innerText = item.reply_count
        num_dv.appendChild(volume_dv)

        //斜杠盒子
        let slash_dv = document.createElement('div')
        slash_dv.classList.add('slash')
        slash_dv.innerText = '/'
        num_dv.appendChild(slash_dv)

        //点击数盒子
        let visits_dv = document.createElement('div')
        visits_dv.classList.add('visits')
        visits_dv.title = '点击数'
        visits_dv.innerText = item.visit_count
        num_dv.appendChild(visits_dv)

        dv_l.appendChild(num_dv)

        //置顶盒子
        let tips_dv = document.createElement('div')
        if (item.top) {
          //置顶绿色背景样式
          tips_dv.classList.add('tips')
          tips_dv.innerText = '置顶'
        }
        else {
          //不是置顶灰色背景样式
          tips_dv.classList.add('tips1')
          if (item.tab === 'share') {
            tips_dv.innerText = '分享'
          } else {
            tips_dv.innerText = '问答'
          }
        }
        dv_l.appendChild(tips_dv)

        // 标题盒子
        let title_dv = document.createElement('div')
        title_dv.classList.add('topic-title')
        title_dv.classList.add('c-hand')
        title_dv.title = item.title
        title_dv.innerText = item.title
        dv_l.appendChild(title_dv)

        dv.appendChild(dv_l)

        //右边大盒子
        let dv_r = document.createElement('div')
        dv_r.classList.add('middle-c-r')

        // 时间盒子
        let date_dv = document.createElement('div')
        date_dv.classList.add('comment-date')
        //此处计算时间差
        date_dv.innerText = getTime(item.last_reply_at, new Date())
        dv_r.appendChild(date_dv)

        dv.appendChild(dv_r)

        //点击主题触发事件 跳转到详情页
        dv.addEventListener('click', () => {
          //跳转到详情页
          window.open(`detail.html?id=${item.id}`, '_self')
        })

        topic.appendChild(dv)
      })
    }
  },
  erro: (err) => {
    console.log(`请求数据失败${err}`);
  }
})

//如果是登录状态   右边显示用户名
let username = localStorage.getItem('username')
// console.log(username);
if (username != null) {
  document.getElementById('userName').innerText = username
  document.getElementById('logindv').style.display = 'block'
  document.getElementById('head_logindv').innerText='退出'
} else {
  document.getElementById('no-logindv').style.display = 'block'
}





