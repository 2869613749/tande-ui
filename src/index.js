import Button from "../packages/button"
import Nav from "../packages/nav"

const components = [Button, Nav]

const install = function(Vue) {
	// 注册所有的组件
	components.forEach(item => {
		Vue.component(item.name, item)
	})
}

if (typeof window !== "undefined" && window.Vue) {
	install(window.Vue)
}

export default {
	install,
}
