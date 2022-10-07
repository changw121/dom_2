// window.jQuery = function(selector){
//     const elements = document.querySelectorAll(selector);
//     //api 可以操作 elements
//     // const api = {
//     //     //闭包：函数访问外部变量
//     //     addClass(className){
//     //         //遍历所有刚才获取的元素，添加className
//     //         for(let i=0; i<elements.length; i++){
//     //             elements[i].classList.add(className)
//     //         }
//     //         // return api   //链式操作
//     //         return this // addClass的this就是api
//     //     }
//     // }
//     // return api

//     //上面声明了一个对象叫api下面return api，是不是可以直接return对象
//     return {
//         //闭包：函数访问外部变量
//         addClass(className){
//             //遍历所有刚才获取的元素，添加className
//             for(let i=0; i<elements.length; i++){
//                 elements[i].classList.add(className)
//             }
//             // return api   //方面进行链式操作，如果没有定义api，就不能return api喽，只能用下面的this
//         return this // addClass的this就是api，所以return api等价于return this
//         },
//         find(selector){
//             //jQuery('.test1').find('.child') 需要在test1里面找child，怎样获取test1这个范围呢
//             let array = []
//             for(let i=0; i<elements.length; i++){
//                 //遍历每一个test1，看里面是否有child,有将其放入array返回
//                 const elements2 = Array.from(elements[i].querySelectorAll(selector))
//                 array = array.concat(elements2) 
//             }
//             return array
//         }
//     }
// }


//上面的代码中，find不能实现链式调用，所以我们下面重新封装
window.jQuery = function(selectorOrArray){
    let elements
    if(typeof selectorOrArray === 'string'){
        elements = document.querySelectorAll(selectorOrArray);
    } else if(selectorOrArray instanceof Array){
        elements = selectorOrArray;
    }
    //上面声明了一个对象叫api下面return api，是不是可以直接return对象
    return {
        oldApi: selectorOrArray.oldApi,
        //闭包：函数访问外部变量
        addClass(className){
            //遍历所有刚才获取的元素，添加className
            for(let i=0; i<elements.length; i++){
                elements[i].classList.add(className)
            }
            // return api   //方面进行链式操作，如果没有定义api，就不能return api喽，只能用下面的this
        return this // addClass的this就是api，所以return api等价于return this
        },
        find(selector){
            //jQuery('.test1').find('.child') 需要在test1里面找child，怎样获取test1这个范围呢
            let array = []
            for(let i=0; i<elements.length; i++){
                //遍历每一个test1，看里面是否有child,有将其放入array返回
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2) 
            }
            // const newApi = jQuery(array)
            // return newApi
            array.oldApi = this // this是 旧api
            return jQuery(array)
        },
        end(){
            return this.oldApi //this 是 新api
        }
    }
}