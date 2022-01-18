export const use = (plugin) => {
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(plugin)
    }
}

export const registerComponent = (app, component) => {
    app.component(component.name, component)
}

export const registerComponentProgrammatic = (app, property, component) => {

    if (app.config.globalProperties.$beer===undefined) 
        app.config.globalProperties.$beer={}

    app.config.globalProperties.$beer[property]=component
}   