/**
 * @description constants文件夹保存所有常量数据
 */

// 模块路径
export const ROUTER = {
    root: '/',
    resume: '/resume'
}

export const ROUTER_KEY = {
    root: 'root',
    resume: 'resume'
}

// 入口模块，TS定义类型必须为TSRouter.Item
export const ROUTER_ENTRY: TSRouter.Item[] = [
    {
        url: 'https://github.com/ViktorVan22/viz-resume',
        key: "intro",
        text: "介绍"
    },
    {
        url: ROUTER.resume,
        key: ROUTER_KEY.resume,
        text: '简历'
    },
    {
        url: 'https://github.com/ViktorVan22/viz-resume',
        key: 'code',
        text: '源码'
    }
]

