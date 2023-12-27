declare const useResize: {
    // useResize自身接收的参数
    (el: HTMLElement, callback: Function): void;
    // useResize上面挂载的install方法
    install: (app:App) => void;
}
export default useResize