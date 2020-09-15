let div = document.querySelector('#div')
let style = document.querySelector('#style')
let str =
    `/**你好，我叫小于
    *下面我要展示一下我的前端功底了，
    *首先我要准备一个div
    *然后把div的位置设置一下
    **/
#div1{
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width:200px;
    height:200px;
    border:1px solid red;
}
/**接下来我要把div变成八卦图
 * 注意看好了
 * 首先把div变成一个圆**/
#div1{
    border-radius: 50%;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border:none
}
/**八卦是阴阳形成的
 * 一黑一白**/
#div1{
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
/**加上两个神秘的小球**/
#div1::after{
    content:'';
    display:block;
    width:100px;
    height:100px;
    position: absolute;
    left:50%;
    border-radius: 50%;
    transform:translateX(-50%);
    bottom:0;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(255,255,255,1) 30%);
}
#div1::before{
    content:'';
    display:block;
    width:100px;
    height:100px;
    position: absolute;
    left:50%;
    border-radius: 50%;
    transform:translateX(-50%);
    top:0;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 30%, rgba(0,0,0,1) 30%);
}
`
    // str = str.replace(/\n/g, '<br>')
let n = 0
let str2 = ''
let step = () => {
    let add = setTimeout(() => {
        //如果是空格就加上br，如果不是空格就加str[n]
        if (str[n] === '\n') {
            // 如果是空格就加上br
            str2 += '<br>'
        } else if (str[n] === ' ') {
            // 如果是缩进就加上&nbsp;
            str2 += '&nbsp;'
        } else {
            // 如果没有特殊的就加str[n]
            str2 += str[n]
        }

        console.log(str2);
        div.innerHTML = str2
        window.scrollTo(0, 999);
        div.scrollTo(0, 999)
        style.innerHTML = str.substring(0, n)
        if (n < str.length - 1) {
            n = n + 1
            step()
        }
    }, 50)
}
step()