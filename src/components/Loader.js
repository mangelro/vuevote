import { defineComponent,h } from "vue";

export default defineComponent({
    name: 'Loader',
   
    render() {
      return h('div',{class:'overlay active center-loader'},[
        h('a', { class: 'loader large'})
      ])
    }
})