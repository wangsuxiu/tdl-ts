type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}


interface User {
  readonly name: string
}


const xiaohong: User = {
  name: "xiaohong"
}

xiaohong.name = 'xiaohua'


// 1. 返回一个新接口、
// 2. 遍历接口
// 3. 加上readonly关键字
// 4. 通过key来获取接口里面的值
