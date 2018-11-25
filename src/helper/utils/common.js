/** @format */

export default {
  /* @desc: 统一组装 HTTP 请求的 Url 地址 */
  composeApiPath(apiName) {
    const requestBaseUrl = 'http://39.108.93.82:8888/api/'
    return `${requestBaseUrl}${apiName}`
  },

  getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  },

  setInterval(callback, interval) {
    const now = Date.now
    let startTime = now()
    let endTime = startTime
    const loop = () => {
      this.intervalTimer = global.requestAnimationFrame(loop)
      endTime = now()
      if (endTime - startTime >= interval) {
        startTime = endTime = now()
        callback()
      }
    }
    this.intervalTimer = global.requestAnimationFrame(loop)
    return this.intervalTimer
  },

  clearInterval(intervalTimerId) {
    global.cancelAnimationFrame(intervalTimerId)
    intervalTimerId = null
  },

  getRandomArray(arr, count) {
    let i = arr.length,
      temp,
      index
    const shuffled = arr.slice(0),
      min = i - count
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random())
      temp = shuffled[index]
      shuffled[index] = shuffled[i]
      shuffled[i] = temp
    }
    return shuffled.slice(min)
  }
}
