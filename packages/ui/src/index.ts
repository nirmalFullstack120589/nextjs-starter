export { default as AppProvider } from "./components/AppProvider/AppProvider"
export { default as ContentModule } from "./components/ContentModule/ContentModule"
export { default as getPageMetadata } from "./utils/getPageMetadata"
export { default as isPreview } from "./utils/isPreview"

import getFirstOfArray from "./utils/getFirstOfArray"
import useThemeProps from "./utils/useThemeProps"
// import getPageMetadata  from "./utils/getPageMetadata"

const utils = {
getFirstOfArray,
useThemeProps,
}

export default utils