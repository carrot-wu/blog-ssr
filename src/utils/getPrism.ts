import serverPrism from 'prismjs'
// @ts-ignore
import * as loadLanguages from 'prismjs/components/'
import {isBrowser} from "@src/config/constants";
// 如果实在浏览器环境那么可以通过window.prism 获取 但是server不行

const prismLanguages = ["markup", "css", "clike", "javascript", "docker", "less", "typescript", "nginx", "scss", "jsx", "tsx", "regex"]
let safePrism

if (isBrowser) {
  safePrism = (window && window.Prism)
} else {
  loadLanguages(prismLanguages)
  safePrism = serverPrism
}
export default safePrism as typeof serverPrism
