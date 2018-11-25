/** @format */

import $ajax from '../ajax'
import $utils from '../utils'

export default {
  searchPoetry(params) {
    return $ajax.get($utils.composeApiPath('getMorePoetry'), params)
  }
}
