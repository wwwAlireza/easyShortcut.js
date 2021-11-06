new shortcut({
    ctrl: true,
    alt: true,
    shift: false, //default
    meta: false, //default
    key: "d",
    fn: () => {
        window.open("https://github.com/wwwAlireza/easyShortcut.js", "_blank")
    }
})

console.log(shortcut);