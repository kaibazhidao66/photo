// 鼠标样式
var CURSOR;
Math.lerp = (a, b, n) => (1 - n) * a + n * b;
const getStyle = (el, attr) => {
    try {
    return window.getComputedStyle ?
        window.getComputedStyle(el)[attr] :
        el.currentStyle[attr];
    } catch (e) {}
    return "";
};
class Cursor {
constructor() {
this.pos = {
curr: null,
prev: null
};
this.pt = [];
this.create();
this.init();
this.render();
}
move(left, top) {
this.cursor.style["left"] = `${left}px`;
this.cursor.style["top"] = `${top}px`;
}
create() {
if (!this.cursor) {
this.cursor = document.createElement("div");
this.cursor.id = "cursor";
this.cursor.classList.add("hidden");
document.body.append(this.cursor);
}
var el = document.getElementsByTagName('*');
for (let i = 0; i < el.length; i++)
if (getStyle(el[i], "cursor") == "pointer")
this.pt.push(el[i].outerHTML);
document.body.appendChild((this.scr = document.createElement("style")));
this.scr.innerHTML =
`* {cursor: url("https://fastly.jsdelivr.net/gh/kaibazhidao66/tcb/cur/a11.cur") 4 4, auto}`;
}
refresh() {
this.scr.remove();
this.cursor.classList.remove("hover");
this.cursor.classList.remove("active");
this.pos = {
curr: null,
prev: null
};
this.pt = [];
this.create();
this.init();
this.render();
}
init() {
document.onmouseover = e => this.pt.includes(e.target.outerHTML) && this.cursor.classList.add("hover");
document.onmouseout = e => this.pt.includes(e.target.outerHTML) && this.cursor.classList.remove("hover");
document.onmousemove = e => {
(this.pos.curr == null) && this.move(e.clientX - 8, e.clientY - 8);
this.pos.curr = {
x: e.clientX - 8,
y: e.clientY - 8
};
this.cursor.classList.remove("hidden");
};
document.onmouseenter = e => this.cursor.classList.remove("hidden");
document.onmouseleave = e => this.cursor.classList.add("hidden");
document.onmousedown = e => this.cursor.classList.add("active");
document.onmouseup = e => this.cursor.classList.remove("active");
}
render() {
if (this.pos.prev) {
this.pos.prev.x = Math.lerp(this.pos.prev.x, this.pos.curr.x, 0.45);
this.pos.prev.y = Math.lerp(this.pos.prev.y, this.pos.curr.y, 0.45);
this.move(this.pos.prev.x, this.pos.prev.y);
} else {
this.pos.prev = this.pos.curr;
}
requestAnimationFrame(() => this.render());
}
}
(() => {
CURSOR = new Cursor();
// 需要重新获取列表时，使用 CURSOR.refresh()
})();

// 相册卡片
window.addEventListener('load', function () {
    setTimeout(lazyLoad, 1000);
});
    function lazyLoad() {
    var card_images = document.querySelectorAll('.card-image');
    card_images.forEach(function (card_image) {
    var image_url = card_image.getAttribute('data-image-full');
    var content_image = card_image.querySelector('img');
    content_image.src = image_url;
    content_image.addEventListener('load', function () {
        card_image.style.backgroundImage = 'url(' + image_url + ')';
        card_image.className = card_image.className + ' is-loaded';
        });
    });
}

// 点击特效
onload = function() {
    var click_cnt = 0;
    var $html = document.getElementsByTagName("html")[0];
    var $body = document.getElementsByTagName("body")[0];
    $html.onclick = function(e) {
        var $elem = document.createElement("b");
        $elem.style.color = "#E94F06";
        $elem.style.zIndex = 9999;
        $elem.style.position = "absolute";
        $elem.style.select = "none";
        var x = e.pageX;
        var y = e.pageY;
        $elem.style.left = (x - 10) + "px";
        $elem.style.top = (y - 20) + "px";
        clearInterval(anim);
        switch (++click_cnt) {
            case 10:
                $elem.innerText = "OωO";
                break;
            case 20:
                $elem.innerText = "(๑•́ ∀ •̀๑)";
                break;
            case 30:
                $elem.innerText = "(๑•́ ₃ •̀๑)";
                break;
            case 40:
                $elem.innerText = "(๑•̀_•́๑)";
                break;
            case 50:
                $elem.innerText = "（￣へ￣）";
                break;
            case 60:
                $elem.innerText = "(╯°口°)╯(┴—┴";
                break;
            case 70:
                $elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
                break;
            case 80:
                $elem.innerText = "╮(｡>口<｡)╭";
                break;
            case 90:
                $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
                break;
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
                $elem.innerText = "(ꐦ°᷄д°᷅)";
                break;
            default:
                $elem.innerText = "❤";
                break;
        }
        $elem.style.fontSize = Math.random() * 10 + 8 + "px";
        var increase = 0;
        var anim;
        setTimeout(function() {
            anim = setInterval(function() {
                if (++increase == 150) {
                    clearInterval(anim);
                    $body.removeChild($elem);
                }
                $elem.style.top = y - 20 - increase + "px";
                $elem.style.opacity = (150 - increase) / 120;
            }, 8);
        }, 70);
        $body.appendChild($elem);
    };
};

/* 禁止右键，F12 */
function unmouse(){
	document.oncontextmenu = new Function("return false;");
	document.onkeydown = document.onkeyup = document.onkeypress = function(event) {
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if (e && (e.keyCode == 123 || (e.keyCode == 116 && e.type!='keypress')))
		{
			e.returnValue = false;
			return (false);
		}
	}
}
unmouse()

//控制台输出
var styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
var styleTitle2 = `
font-size:12px;
color: rgb(244,167,89);
`
var styleContent = `
color: rgb(30,152,255);
`
var title1 = 'XKの相册'
var title2 = `版权所有`
var content = `
主页:  https://www.xukaiyyds.cn
地址:  https://github.com/kaibazhidao66/photo
`
console.log(`%c${title1} %c${title2}
%c${content}`, styleTitle1, styleTitle2, styleContent)