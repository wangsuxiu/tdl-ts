type Join<T extends string[], U extends string | number> = T extends [infer First, ...infer Rest]
  ? First extends string
    ? Rest extends string[]
      ? Rest extends [] ? `${First}` : `${First}${U}${Join<Rest, U>}`
      : never
    : never
  : ''


type getFirst<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never
type aa = getFirst<['1', '2', '3']>