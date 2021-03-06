/* github.com/wwwAlirzea/easyShortcut.js */
"use strict";
class shortcut {
    constructor(options = new Object) {
        this.ctrl = options.ctrl || false;
        this.alt = options.alt || false;
        this.meta = options.meta || false;
        this.shift = options.shift || false;
        this.key = options.key || false;
        this.fn = options.fn || false;
        let validation = false;
        if (this.key != false && typeof this.fn == "function") {
            validation = true;
        };
        if (this.ctrl == true && this.alt == true && this.shift == false && this.meta == false) {
            if (validation) {
                eventSetter.ctrlAlt(this.key, this.fn);
            };
        } else if (this.ctrl == true && this.alt == false && this.shift == false && this.meta == false) {
            if (validation) {
                eventSetter.ctrl(this.key, this.fn);
            };
        } else if (this.ctrl == false && this.alt == true && this.shift == false && this.meta == false) {
            if (validation) {
                eventSetter.alt(this.key, this.fn);
            };
        } else if (this.ctrl == false && this.alt == false && this.shift == false && this.meta == false) {
            if (validation) {
                eventSetter.withKey(this.key, this.fn);
            };
        } else if (this.ctrl == false && this.alt == false && this.shift == false && this.meta == true) {
            if (validation) {
                eventSetter.meta(this.key, this.fn);
            };
        } else if (this.ctrl == false && this.alt == false && this.shift == true && this.meta == false) {
            if (validation) {
                eventSetter.shif(this.key, this.fn);
            };
        } else if (this.ctrl == true && this.alt == false && this.shift == true && this.meta == false) {
            if (validation) {
                eventSetter.ctrlShift(this.key, this.fn);
            };
        } else if (this.ctrl == true && this.alt == false && this.shift == false && this.meta == true) {
            if (validation) {
                eventSetter.ctrlMeta(this.key, this.fn, this.keyValid);
            };
        } else if (this.ctrl == false && this.alt == true && this.shift == false && this.meta == true) {
            if (validation) {
                eventSetter.altMeta(this.key, this.fn);
            };
        } else if (this.ctrl == false && this.alt == true && this.shift == true && this.meta == false) {
            if (validation) {
                eventSetter.altShift(this.key, this.fn);
            };
        } else if (this.ctrl == true && this.alt == true && this.shift == true && this.meta == true) {
            if (validation) {
                eventSetter.ctrlAltShiftMeta(this.key, this.fn);
            };
        } else if (this.ctrl == true && this.alt == true && this.shift == true && this.meta == false) {
            if (validation) {
                eventSetter.ctrlAltShift(this.key, this.fn);
            };
        } else if (this.ctrl == true && this.alt == true && this.shift == false && this.meta == true) {
            if (validation) {
                eventSetter.ctrlAltMeta(this.key, this.fn);
            };
        } else if (this.ctrl == true && this.alt == false && this.shift == true && this.meta == true) {
            if (validation) {
                eventSetter.ctrlShiftMeta(this.key, this.fn);
            };
        } else if (this.ctrl == false && this.alt == true && this.shift == true && this.meta == true) {
            if (validation) {
                eventSetter.altShiftMeta(this.key, this.fn);
            };
        } else if (this.ctrl == true && this.alt == true && this.shift == true && this.meta == false) {
            if (validation) {
                eventSetter.ctrlAltShift(this.key, this.fn);
            };
        } else if (this.ctrl == false && this.alt == false && this.shift == true && this.meta == true) {
            if (validation) {
                eventSetter.shiftMeta(this.key, this.fn);
            };
        };
    };
};
const eventSetter = {
    ctrl: (key, fn) => {
        window.addEventListener("keyup", (e) => {
            if (e.ctrlKey == true && e.altKey == false && e.shiftKey == false && e.metaKey == false && e.key == key || e.key == key.toUpperCase() || e.key == key.toLowerCase()) {
                fn();
            };
        });
    },
    alt: (key, fn) => {
        window.addEventListener("keyup", (e) => {
            if (e.altKey == true && e.ctrlKey == false && e.shiftKey == false && e.metaKey == false && e.key == key || e.key == key.toUpperCase() || e.key == key.toLowerCase()) {
                fn();
            };
        });
    },
    meta: (key, fn) => {
        window.addEventListener("keyup", (e) => {
            if (e.metaKey == true && e.ctrlKey == false && e.altKey == false && e.shiftKey == false && e.key == key || e.key == key.toUpperCase() || e.key == key.toLowerCase()) {
                fn();
            };
        });
    },
    shif: (key, fn) => {
        window.addEventListener("keyup", (e) => {
            if (e.shiftKey == true && e.metaKey == false && e.ctrlKey == false && e.altKey == false && e.key == key || e.key == key.toUpperCase() || e.key == key.toLowerCase()) {
                fn();
            };
        });
    },
    ctrlAlt: (key, fn) => {
        window.addEventListener("keyup", (e) => {
            if (e.ctrlKey == true && e.altKey == true && e.shiftKey == false && e.metaKey == false && e.key == key || e.key == key.toUpperCase() || e.key == key.toLowerCase()) {
                fn();
            };
        });
    },
    ctrlMeta: (key, fn) => {
        window.addEventListener("keyup", (e) => {
            if (e.ctrlKey == true && e.altKey == false && e.shiftKey == false && e.metaKey == true && e.key == key || e.key == key.toUpperCase() || e.key == key.toLowerCase()) {
                fn();
            };
        });
    },
    ctrlShift: (key, fn) => {
        window.addEventListener("keyup", (e) => {
            if (e.ctrlKey == true && e.altKey == false && e.shiftKey == true && e.metaKey == false && e.key == key || e.key == key.toUpperCase() || e.key == key.toLowerCase()) {
                fn();
            };
        });
    },
    altMeta: (key, fn) => {
        window.addEventListener("keyup", (e) => {
            if (e.ctrlKey == false && e.altKey == false && e.shiftKey == false && e.metaKey == true && e.key == key || e.key == key.toUpperCase() || e.key == key.toLowerCase()) {
                fn();
            };
        });
    },
    altShift: (key, fn) => {
        window.addEventListener("keyup", (e) => {
            if (e.ctrlKey == false && e.altKey == false && e.shiftKey == true && e.metaKey == false && e.key == key || e.key == key.toUpperCase() || e.key == key.toLowerCase()) {
                fn();
            };
        });
    },
    ctrlAltShiftMeta: (key, fn) => {
        window.addEventListener("keyup", (e) => {
            if (e.ctrlKey == true && e.altKey == true && e.shiftKey == true && e.metaKey == true && e.key == key || e.key == key.toUpperCase() || e.key == key.toLowerCase()) {
                fn();
            };
        });
    },
    ctrlAltShift: (key, fn) => {
        window.addEventListener("keyup", (e) => {
            if (e.ctrlKey == true && e.altKey == true && e.shiftKey == true && e.metaKey == false && e.key == key || e.key == key.toUpperCase() || e.key == key.toLowerCase()) {
                fn();
            };
        });
    },
    ctrlAltMeta: (key, fn) => {
        window.addEventListener("keyup", (e) => {
            if (e.ctrlKey == true && e.altKey == true && e.shiftKey == false && e.metaKey == true && e.key == key || e.key == key.toUpperCase() || e.key == key.toLowerCase()) {
                fn();
            };
        });
    },
    ctrlShiftMeta: (key, fn) => {
        window.addEventListener("keyup", (e) => {
            if (e.ctrlKey == true && e.altKey == false && e.shiftKey == true && e.metaKey == true && e.key == key || e.key == key.toUpperCase() || e.key == key.toLowerCase()) {
                fn();
            };
        });
    },
    ctrlAltShift: (key, fn) => {
        window.addEventListener("keyup", (e) => {
            if (e.ctrlKey == true && e.altKey == true && e.shiftKey == false && e.metaKey == true && e.key == key || e.key == key.toUpperCase() || e.key == key.toLowerCase()) {
                fn();
            };
        });
    },
    altShiftMeta: (key, fn) => {
        window.addEventListener("keyup", (e) => {
            if (e.ctrlKey == false && e.altKey == true && e.shiftKey == true && e.metaKey == true && e.key == key || e.key == key.toUpperCase() || e.key == key.toLowerCase()) {
                fn();
            };
        });
    },
    shiftMeta: (key, fn) => {
        window.addEventListener("keyup", (e) => {
            if (e.ctrlKey == false && e.altKey == false && e.shiftKey == true && e.metaKey == true && e.key == key || e.key == key.toUpperCase() || e.key == key.toLowerCase()) {
                fn();
            };
        });
    },
    withKey: (key, fn) => {
        window.addEventListener("keyup", (e) => {
            if (e.key == key || e.key == key.toUpperCase() || e.key == key.toLowerCase() && e.ctrlKey == false && e.altKey == false && e.shiftKey == false && e.metaKey == false) {
                fn();
            };
        });
    }
};

function showKeyInfo() {
    window.addEventListener("keyup", (e) => {
        console.log(`%ceasyShortcut >> {key : "${e.key}"} | {Code : "${e.code}"}`, `        color:#fff;        background:#0d1117;        padding: 5px;        border-radius: 2px;,        `);
    });
};