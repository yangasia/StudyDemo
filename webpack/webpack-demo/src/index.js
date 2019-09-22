// import _ from 'lodash';
import { square,cube } from './math.js';
import printMe from './print.js';
import { from } from '_array-flatten@2.1.2@array-flatten';
// import './style.css';
// import y128 from './y128.png';
// import Data from './data.xml';

function component(){
    var element = document.createElement('div');
    var btn = document.createElement('button');
    // lodash由js引入

    // element.innerHTML = _.join(['Hello','webpack'],' ');
    element.innerHTML = [
        'hello webpack',
        '5的立方等于'+cube(5),
        '3的平方等于'+square(3),
    ].join('\n\n');

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