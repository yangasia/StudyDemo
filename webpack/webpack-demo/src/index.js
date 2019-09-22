import _ from 'lodash';
import printMe from './print.js';
// import './style.css';
// import y128 from './y128.png';
// import Data from './data.xml';

function component(){
    var element = document.createElement('div');
    var btn = document.createElement('button');
    // lodash由js引入

    element.innerHTML = _.join(['Hello','webpack'],' ');

    btn.innerHTML = '点击我看console';
    btn.onclick = printMe;
    element.appendChild(btn);
    // element.classList.add('hello');
    //加图片
    // var myICon = new Image();
    // myICon.src = y128;

    // element.appendChild(myICon);
    // console.log(Data);
    return element;
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function(){
        console.log('printMe 更新');
        printMe();
    });
}