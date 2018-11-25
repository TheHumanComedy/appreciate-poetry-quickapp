/** @format */

import $ajax from '../ajax'
import $utils from '../utils'

export default {
  search(params) {
    return $ajax.get($utils.composeApiPath('searchPoetry'), params)
  },
  getDetail(params) {
    const p = {
      _id: '5beaeea4256c4e2494227a50',
      title: '临洛水',
      author: '太宗皇帝',
      paragraphs: [
        '春搜驰骏骨，总辔俯长河。',
        '霞处流萦锦，风前瀁卷罗。',
        '水花翻照树，堤兰倒插波。',
        '岂必汾阴曲，秋云发棹歌。'
      ]
    }
    return Promise.resolve(p)
  }
}
