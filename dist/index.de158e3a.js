// const api = jQuery('.test') //不返回elements，返回api对象
// api.addClass('red')
//    .addClass('blue')
//    .addClass('green')  //链式操作
// const api1 = jQuery('.test')
// const api2 = api1.find('.child').addClass('red').addClass('blue').addClass('green')
// const oldApi = api2.end().addClass('yellow')
// jQuery('.test')
//     .find('.child')
//     .addClass('red')
//     .addClass('blue')
//     .addClass('green')
//     .end() //当前结束，回到上一个，即从child回到test
//     .addClass('yellow') //加到上一个里面即test里面
// const x = jQuery('.test').find('.child')
// x.each((div)=>{console.log(div)})
const x = jQuery(".test");
// x.parent().print()
x.children().print();

//# sourceMappingURL=index.de158e3a.js.map
