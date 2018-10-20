import * as map from './map.js'
import * as challanges from './challanges.js'
import * as math from './math.js'
export default {
    map,
    challanges,
    math,
}
if (process.browser) {
    window.map = map
    window.challanges = challanges
    window.math = math
}
