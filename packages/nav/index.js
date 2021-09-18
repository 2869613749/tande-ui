import TdNav from "./src/main";

TdNav.install = function(Vue) {
  Vue.component(TdNav.name, TdNav);
};

export default TdNav;
