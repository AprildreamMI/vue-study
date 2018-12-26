<template>
    <div>
      <div v-timer="nowDate">
      </div>
      <div v-timer="timeBefore"></div>
      <div v-birthday="birthday"></div>
    </div>
</template>

<script>
    const timerfn = {
      getUnix: function () {
        let date = new Date()
        return date.getTime()
      },
      getTodayUnix: function () {
        let date = new Date()
        date.setHours(0)
        date.setMinutes(0)
        date.setSeconds(0)
        date.setMilliseconds(0)
        return date.getTime()
      },
      getLastDate: function (time) {
        let date = new Date(time)
        let month = date.getMonth()<9? `0${date.getMonth() + 1}` : date.getMonth() + 1
        let day = date.getDate()<10? `0${date.getDate()}` : date.getDate()
        return `${date.getFullYear()}-${month}-${day}`
      },
      getFormatTime: function (timestamp) {
        let now = this.getUnix()
        let today = this.getTodayUnix();
        let timer = (now - timestamp) / 1000
        let tip = ''

        if (timer <=0) {
          tip = '刚刚'
        } else if ( Math.floor(timer/60) <=0 ) {
          tip = '刚刚'
        } else if ( timer < 3600 ) {
          tip = `${Math.floor(timer / 60)}分钟前`
        } else  if (timer >=3600 && (timestamp - today) >=0) {
          tip = `${Math.floor(timer / 3600)}小时前`
        } else if (timer/86400 <=31) {
          tip = `${Math.ceil(timer / 86400)}天前`
        } else {
          tip = this.getLastDate(timestamp)
        }

        return tip
      }
    }
    export default {
      name: "inswz",
      data () {
        return {
          // 当前时间 获取秒级时间戳
          nowDate: (new Date()).getTime(),
          timeBefore: 1488930695721,
          birthday: new Date('1997-10-13').getTime()
        }
      },
      methods: {

      },
      directives: {
        timer: {
          bind: function (el, binding) {
            console.log(timerfn.getFormatTime(binding.value))
            el.innerHTML = timerfn.getFormatTime(binding.value);
            el.timer = setInterval(function () {
              console.log(timerfn.getFormatTime(binding.value))
              el.innerHTML = timerfn.getFormatTime(binding.value);
            }, 60000)
          },
          unbind: function (el, binding) {
            clearInterval(el.timer)
            delete el.timer
          }
        },
        birthday: {
          bind: function (el, binding) {
            let nowDate = new Date()
            let birDate = new Date(binding.value)
            console.log(timerfn.getLastDate(nowDate))
            console.log(nowDate.getMonth()+1)
            console.log(birDate.getMonth()+1)
            console.log(timerfn.getLastDate(binding.value))
            // 时间戳是毫秒 要转化为秒
            el.innerHTML = `${nowDate.getFullYear() - birDate.getFullYear()}岁${(nowDate.getMonth()+1) - (birDate.getMonth()+1)}月${nowDate.getDate() - birDate.getDate()}日`
          }
        }
      }
    }
</script>

<style scoped>

</style>
