// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never

type arr = [1,2,3]
type union = arr[number]







//知识点
// 1. extends类型条件判断
// 2. 获取tuple的length属性 indexed
// 3. extends union 判断的规则
// 4. infer的使用(推断)


