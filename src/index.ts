import Vue from "vue";
import Index from "./components/Index.vue";
import "./scss/global.scss";

let v = new Vue({
  el: "#app",
  components: {
    Index
  },
  template: `
    <div>
      <Index />
    </div>
    `
});
