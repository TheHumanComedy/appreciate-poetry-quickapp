/** @format */

import $ajax from '../ajax'
import $utils from '../utils'

export default {
  getMorePoetry(data) {
    return $ajax.get($utils.composeApiPath('getMorePoetry'), data)
  }
}
