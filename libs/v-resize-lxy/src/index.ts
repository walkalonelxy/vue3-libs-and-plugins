import type { App, DirectiveBinding } from 'vue'
// 自定义hook监听元素宽高变化
function useResize(el:HTMLElement, callback:Function) {
    const resize = new ResizeObserver(entries => {
        callback(entries[0].contentRect)
    })
    resize.observe(el)
}

// 自定义指令监听宽高变化
const install = (app: App) => {
    app.directive('resize', {
        mounted(el: HTMLElement, binding: DirectiveBinding<Function>) {
            useResize(el, binding.value)
        }
    })
}
useResize.install = install
export default useResize