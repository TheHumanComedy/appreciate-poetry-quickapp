/** @format */

import $ajax from '../ajax'
import $utils from '../utils'

export default {
  searchPoetry(params) {
    return $ajax.get($utils.composeApiPath('searchPoetry'), params)
  },
  getMorePoetry(data) {
    return $ajax.get($utils.composeApiPath('getMorePoetry'), data)
  },
  getPoetryById(data) {
    return $ajax.get($utils.composeApiPath('getPoetryById'), data)
  }
}
