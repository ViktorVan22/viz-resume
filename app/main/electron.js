/**
 * @desc electron 主入口
 * 
 * BrowserWindow创建浏览器窗口（也就是一个渲染进程）
 * 可以将其看成浏览器的一个Tab
 */

const path = require('path')
const { app, BrowserWindow } = require('electron')

function createWindow() {
    // 创建浏览器窗口
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,  // 注入node模块
        }
    })
    mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})
