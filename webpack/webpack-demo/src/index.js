import _ from 'lodash';
// import { square,cube } from './math.js';
// import printMe from './print.js';
// import { from } from '_array-flatten@2.1.2@array-flatten';
// import './style.css';
// import y128 from './y128.png';
// import Data from './data.xml';

if(process.env.NODE_EVN !== 'production'){
    console.log(process.env.NODE_EVN);
    console.log('-----------------------');
    console.log('development mode');
    console.log('-----------------------');
}

function component(){
    var element = document.createElement('div');
    var btn = document.createElement('button');
    // lodash由js引入

    element.innerHTML = _.join(['Hello','webpack'],' ');
    // element.innerHTML = [
    //     'hello webpack',
    //     '5的立方等于'+cube(5),
    //     '3的平方等于'+square(3),
    // ].join('\n\n');

    btn.innerHTML = '点击我看console';
    // btn.onclick = printMe;
    btn.onclick = e => import('./print').then(module => {
        var print = module.default;
        print();
    });
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

//  async function getComponent() {
//     // return import(/* webpackChunkName: "lodash"*/ 'lodash').then(({default:_}) => {
//     //     const element = document.createElement('div');
//     //     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     //     return element;
//     // }).catch(error => '模块加载出错');
//     const element = document.createElement('div');
//     const { default:_ } = await import(/* webpackChunkName: "lodash"*/ 'lodash');
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return element;
// }

// getComponent().then(component => {
//     document.body.appendChild(component);
// })

// if (module.hot) {
//     module.hot.accept('./print.js', function(){
//         console.log('printMe 更新');
//         printMe();
//     });
// }