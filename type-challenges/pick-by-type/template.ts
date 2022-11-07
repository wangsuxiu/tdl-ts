type PickByType<T, U> = { [P in keyof T as T[P] extends U ? P : never]: T[P] }


// 如何在对象的循环中给键值做判断
// 用 as 关键字，as 后面接上条件语句，如果为 false，则返回 never 就可以排除掉某个键值了
// P in keyof as any extends P ? never : P 是什么意思
// P in keyof 是一组
// extends P ? never : P 是一组
// 最后 2 组的值用 as 链接起来，形成当前循环的键



// P in keyof as any extends P 是什么意思
// [
//   (P in keyof T) as
//   (P extends K ? never : P)
// ]

// 以 as 为分界，把这段代码分为 2 段
// P in keyof T 是遍历的意思，这个好理解
// as 在这里姑且认定为是 断言
// P extends K ? never : P 这里是为了判断类型
// 连起来怎么看
// P 在 T 的范围循环
// P 得到的是 T 中的键
// 对于这个 P 我们为他断言 为 P / never
// 如果 P 的这个键在 K 的范围中，我们就断言当前的 P 是 never（抛弃原先 P 的值），那么在对象循环的时候 never 就会被忽略掉，
