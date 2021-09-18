import Nav from "./nav"

const components = [Nav]

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
