// 删除的思想
// 1. 绑定点击事件
// 2. 获取id
// 3. 删除list中的项

//添加的思想
//1. 数据的双向绑定
//2. 按键事件@keyup
//3. 更新list

//修改list值的内容思想
//1. 使用dblclick绑定双击事件
//2. 在data中添加一个id，用于保存双击id
//3. 当前双击的内容id与labelitem.id比较，如果一致就允许label有editing属性


var vm = new Vue({
    el: ".todoapp",
    data: {
        list: [
            {id: 1, content:"敲代码", flag: false},
            {id: 2, content: "玩游戏", flag: true},
            {id: 3, content:"休息", flag: true}
        ],
        todoContent: "",
        updataID: -1
    },
    methods: {
        // 删除单个项目
        delItem(id){
            // 两种方式
            // 1. 将id对应的项 的下标找出来，再用数组的 方式去删除 findIndex
            const index = this.list.findIndex(item => item.id === id)
             this.list.splice(index,1)
            
            // 2. 使用filter  根据条件，保留所有满选项
        //    this.list = this.list.filter(
        //         item => {
        //             return item.id != id
        //         }
        //     )
        },

        //添加list按钮
        addItem(){
            // if (this.todoContent != ""){
                this.list.unshift({
                    id: +new Date(),    //时间戳，保证id值唯一
                    content: this.todoContent,
                    flag: true
                })
            // }else{
            //     alert("请输入内容")
            // }
               

            
            // },
          


            //清空输入框 的内容
            this.todoContent=""

        },

        //修改list
        updataItem(id){
            this.updataID = id

        },
        updataView(){
            
                this.updataID = -1
        
            

        }
    }
})