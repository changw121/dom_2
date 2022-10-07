window.$ = window.jQuery = function(selectorOrArray) {
    let elements;
    if (typeof selectorOrArray === "string") elements = document.querySelectorAll(selectorOrArray);
    else if (selectorOrArray instanceof Array) elements = selectorOrArray;
    //上面声明了一个对象叫api下面return api，是不是可以直接return对象
    return {
        find (selector) {
            //jQuery('.test1').find('.child') 需要在test1里面找child，怎样获取test1这个范围呢
            let array = [];
            for(let i = 0; i < elements.length; i++){
                //遍历每一个test1，看里面是否有child,有将其放入array返回
                const elements2 = Array.from(elements[i].querySelectorAll(selector));
                array = array.concat(elements2);
            }
            // const newApi = jQuery(array)
            // return newApi
            array.oldApi = this // this是 旧api
            ;
            return jQuery(array);
        },
        each (fn) {
            for(let i = 0; i < elements.length; i++)fn.call(null, elements[i], i);
            return this;
        },
        parent () {
            const array = [];
            this.each((node)=>{
                if (array.indexOf(node.parentNode) === -1) array.push(node.parentNode);
            });
            return jQuery(array);
        },
        children () {
            const array = [];
            this.each((node)=>{
                array.push(...node.children) //相当于node.children[0],node.children[1],node.children[3]即将数组展开
                ;
            });
            return jQuery(array);
        },
        print () {
            console.log(elements);
        },
        //闭包：函数访问外部变量
        addClass (className) {
            //遍历所有刚才获取的元素，添加className
            for(let i = 0; i < elements.length; i++)elements[i].classList.add(className);
            // return api   //方面进行链式操作，如果没有定义api，就不能return api喽，只能用下面的this
            return this // addClass的this就是api，所以return api等价于return this
            ;
        },
        oldApi: selectorOrArray.oldApi,
        end () {
            return this.oldApi //this 是 新api
            ;
        }
    };
} // window.$ = window.jQuery  //可以简写成第一行的三个连等
;

//# sourceMappingURL=index.3e2f9b55.js.map
