type If<C extends boolean, T, F> = C extends true ? T : C extends false ? F : never


type cc = {
  a: 1
  b: 2
}

type bb = {
  c: 3
  d: 4
}

const isShow = true

type Test = If<true, cc, bb>

// 项目中怎么用？？
