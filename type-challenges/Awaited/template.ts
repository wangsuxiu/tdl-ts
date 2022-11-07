type MyAwaited<P extends Promise<any>> = P extends Promise<infer X> ? X extends Promise<any> ? MyAwaited<X>: X: P


// infer的用法
// 在extends语句中，支持infer关键字，可以推断一个类型变量，高效的对类型进行模式匹配。但是，这个类型变量只能在true的分支中使用。
// // 内置 ReturnType
// type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
// 理解为：如果 T 继承了 (...args: any[]) => any 类型，则返回类型 R，否则返回 any。其中 R 是什么呢？R 被定义在 extends (...args: any[]) => infer R 中，即 R 是从传入参数类型中推导出来的。
// 例子：
// 如果泛型T是()=> infer R的子集，则返回infer R获取到的类型，否则返回boolean
// type Func<T> = T extends () => infer R ? R : boolean;

// let func1: Func<number>; // boolean;
// let func2: Func<''>; // boolean
// let func3: Func<() => Promise<number>>; // Promise<number>



// type Obj<T> = T extends { a: infer VT, b: infer VT } ? VT : number;

// let obj1: Obj<string>;  // number;
// let obj2: Obj<true>;  // number;
// let obj3: Obj<{a: string, b: string}>;   // string
// let obj4: Obj<a: number, b: string>;   // string | number
// 当a、b为不同类型时，返回联合类型
