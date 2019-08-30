---
title: index.ts
nav_order: 1
parent: 模块
---

# 概述

包含一些`object`的函数

选取一些 lodash 函数

---

<h2 class="text-delta">目录</h2>

- [showUnknow (常量)](#showunknow-%E5%B8%B8%E9%87%8F)
- [withDefaults (函数)](#withdefaults-%E5%87%BD%E6%95%B0)
- [clone (导出)](#clone-%E5%AF%BC%E5%87%BA)
- [cloneDeep (导出)](#clonedeep-%E5%AF%BC%E5%87%BA)
- [get (导出)](#get-%E5%AF%BC%E5%87%BA)
- [has (导出)](#has-%E5%AF%BC%E5%87%BA)
- [mapKeys (导出)](#mapkeys-%E5%AF%BC%E5%87%BA)
- [mapValues (导出)](#mapvalues-%E5%AF%BC%E5%87%BA)
- [merge (导出)](#merge-%E5%AF%BC%E5%87%BA)
- [mergeWith (导出)](#mergewith-%E5%AF%BC%E5%87%BA)
- [omit (导出)](#omit-%E5%AF%BC%E5%87%BA)
- [omitBy (导出)](#omitby-%E5%AF%BC%E5%87%BA)
- [pick (导出)](#pick-%E5%AF%BC%E5%87%BA)
- [pickBy (导出)](#pickby-%E5%AF%BC%E5%87%BA)
- [set (导出)](#set-%E5%AF%BC%E5%87%BA)
- [setWith (导出)](#setwith-%E5%AF%BC%E5%87%BA)
- [toPairs (导出)](#topairs-%E5%AF%BC%E5%87%BA)
- [toString (导出)](#tostring-%E5%AF%BC%E5%87%BA)

---

# showUnknow (常量)

未知对象的 Show 实现

**签名**

```ts

export const showUnknow: Show<unknown> = ...

```

**示例**

```ts
import { showUnknow } from 'macoolka-object'
const a = { a: '1', b: 2, c: [{ d: 3, f: 4 }], e: undefined, f: null }
expect(showUnknow.show(a)).toEqual(`{ a: "1", b: 2, c: [ { d: 3, f: 4 } ], e: undefined, f: null }`)
expect(showUnknow.show(1)).toEqual(`1`)
expect(showUnknow.show('abc')).toEqual(`"abc"`)
expect(showUnknow.show(true)).toEqual(`true`)
expect(showUnknow.show(undefined)).toEqual(`undefined`)
expect(showUnknow.show(null)).toEqual(`null`)
expect(showUnknow.show(new Error('abc'))).toEqual(`"Error: abc"`)
expect(showUnknow.show([1, 2])).toEqual(`[ 1,2 ]`)
```

v0.2.0 中添加

# withDefaults (函数)

为一个对象设置缺省值

**签名**

```ts

export const withDefaults = <D extends { [k: string]: any }, A extends D>(defaults: D) => (
    props: Diff<A, keyof D> = {} as Diff<A, keyof D>): A => ...

```

**示例**

```ts
import { withDefaults } from 'macoolka-object'
interface A1 {
  a: string
  b: number
  c: number
}
interface AD {
  a: string
  b: number
}
const aDefault: AD = {
  a: '',
  b: 1
}
const d = withDefaults<AD, A1>(aDefault)
const result: A1 = d({ c: 1 })
expect(result).toEqual({
  a: '',
  b: 1,
  c: 1
})
expect(d({ a: '1', b: 2, c: 3 })).toEqual({ a: '1', b: 2, c: 3 })
```

v0.2.0 中添加

# clone (导出)

**签名**

```ts
;<T>(value: T) => T
```

# cloneDeep (导出)

**签名**

```ts
;<T>(value: T) => T
```

# get (导出)

**签名**

```ts

{ <TObject extends object, TKey extends keyof TObject>(object: TObject, path: TKey | [TKey]): TObject[TKey]; <TObject extends object, TKey extends keyof TObject>(object: TObject, path: TKey | [TKey]): TObject[TKey]; <TObject extends object, TKey extends keyof TObject, TDefault>(object: TObject, path: TKey | [TKey], defaultValue: TDefault): TDefault | Exclude<TObject[TKey], undefined>; <TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1]>(object: TObject, path: [TKey1, TKey2]): TObject[TKey1][TKey2]; <TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1]>(object: TObject, path: [TKey1, TKey2]): TObject[TKey1][TKey2]; <TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TDefault>(object: TObject, path: [TKey1, TKey2], defaultValue: TDefault): TDefault | Exclude<TObject[TKey1][TKey2], undefined>; <TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TKey3 extends keyof TObject[TKey1][TKey2]>(object: TObject, path: [TKey1, TKey2, TKey3]): TObject[TKey1][TKey2][TKey3]; <TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TKey3 extends keyof TObject[TKey1][TKey2]>(object: TObject, path: [TKey1, TKey2, TKey3]): TObject[TKey1][TKey2][TKey3]; <TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TKey3 extends keyof TObject[TKey1][TKey2], TDefault>(object: TObject, path: [TKey1, TKey2, TKey3], defaultValue: TDefault): TDefault | Exclude<TObject[TKey1][TKey2][TKey3], undefined>; <TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TKey3 extends keyof TObject[TKey1][TKey2], TKey4 extends keyof TObject[TKey1][TKey2][TKey3]>(object: TObject, path: [TKey1, TKey2, TKey3, TKey4]): TObject[TKey1][TKey2][TKey3][TKey4]; <TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TKey3 extends keyof TObject[TKey1][TKey2], TKey4 extends keyof TObject[TKey1][TKey2][TKey3]>(object: TObject, path: [TKey1, TKey2, TKey3, TKey4]): TObject[TKey1][TKey2][TKey3][TKey4]; <TObject extends object, TKey1 extends keyof TObject, TKey2 extends keyof TObject[TKey1], TKey3 extends keyof TObject[TKey1][TKey2], TKey4 extends keyof TObject[TKey1][TKey2][TKey3], TDefault>(object: TObject, path: [TKey1, TKey2, TKey3, TKey4], defaultValue: TDefault): TDefault | Exclude<TObject[TKey1][TKey2][TKey3][TKey4], undefined>; <T>(object: NumericDictionary<T>, path: number): T; <T>(object: NumericDictionary<T>, path: number): T; <T, TDefault>(object: NumericDictionary<T>, path: number, defaultValue: TDefault): T | TDefault; <TDefault>(object: null, path: Many<string | number | symbol>, defaultValue: TDefault): TDefault; (object: null, path: Many<string | number | symbol>): undefined; (object: any, path: Many<string | number | symbol>, defaultValue?: any): any; }

```

# has (导出)

**签名**

```ts
;<T>(object: T, path: Many<string | number | symbol>) => boolean
```

# mapKeys (导出)

**签名**

```ts

{ <T>(object: ArrayLike<T>, iteratee?: ListIteratee<T>): Dictionary<T>; <T extends object>(object: T, iteratee?: ObjectIteratee<T>): Dictionary<T[keyof T]>; }

```

# mapValues (导出)

**签名**

```ts

{ <TResult>(obj: string, callback: StringIterator<TResult>): NumericDictionary<TResult>; <T extends object, TResult>(obj: T, callback: ObjectIterator<T, TResult>): { [P in keyof T]: TResult; }; <T>(obj: Dictionary<T> | NumericDictionary<T>, iteratee: object): Dictionary<boolean>; <T extends object>(obj: T, iteratee: object): { [P in keyof T]: boolean; }; <T, TKey extends keyof T>(obj: Dictionary<T> | NumericDictionary<T>, iteratee: TKey): Dictionary<T[TKey]>; <T>(obj: Dictionary<T> | NumericDictionary<T>, iteratee: string): Dictionary<any>; <T extends object>(obj: T, iteratee: string): { [P in keyof T]: any; }; (obj: string): NumericDictionary<string>; <T>(obj: Dictionary<T> | NumericDictionary<T>): Dictionary<T>; <T extends object>(obj: T): T; <T extends object>(obj: T): Partial<T>; }

```

# merge (导出)

**签名**

```ts

{ <TObject, TSource>(object: TObject, source: TSource): TObject & TSource; <TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2; <TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3; <TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4; (object: any, ...otherArgs: any[]): any; }

```

# mergeWith (导出)

**签名**

```ts

{ <TObject, TSource>(object: TObject, source: TSource, customizer: (value: any, srcValue: any, key: string, object: any, source: any) => any): TObject & TSource; <TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: (value: any, srcValue: any, key: string, object: any, source: any) => any): TObject & TSource1 & TSource2; <TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: (value: any, srcValue: any, key: string, object: any, source: any) => any): TObject & TSource1 & TSource2 & TSource3; <TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: (value: any, srcValue: any, key: string, object: any, source: any) => any): TObject & TSource1 & TSource2 & TSource3 & TSource4; (object: any, ...otherArgs: any[]): any; }

```

# omit (导出)

**签名**

```ts

{ <T extends object, K extends keyof T>(object: T, ...paths: Many<K>[]): Pick<T, Exclude<keyof T, K>>; <T extends object>(object: T, ...paths: Many<string | number | symbol>[]): Partial<T>; }

```

# omitBy (导出)

**签名**

```ts

{ <T>(object: Dictionary<T>, predicate?: ValueKeyIteratee<T>): Dictionary<T>; <T>(object: NumericDictionary<T>, predicate?: ValueKeyIteratee<T>): NumericDictionary<T>; <T extends object>(object: T, predicate: ValueKeyIteratee<T[keyof T]>): Partial<T>; }

```

# pick (导出)

**签名**

```ts

{ <T extends object, U extends keyof T>(object: T, ...props: Many<U>[]): Pick<T, U>; <T>(object: T, ...props: Many<string | number | symbol>[]): Partial<T>; }

```

# pickBy (导出)

**签名**

```ts

{ <T, S extends T>(object: Dictionary<T>, predicate: ValueKeyIterateeTypeGuard<T, S>): Dictionary<S>; <T, S extends T>(object: NumericDictionary<T>, predicate: ValueKeyIterateeTypeGuard<T, S>): NumericDictionary<S>; <T>(object: Dictionary<T>, predicate?: ValueKeyIteratee<T>): Dictionary<T>; <T>(object: NumericDictionary<T>, predicate?: ValueKeyIteratee<T>): NumericDictionary<T>; <T extends object>(object: T, predicate?: ValueKeyIteratee<T[keyof T]>): Partial<T>; }

```

# set (导出)

**签名**

```ts

{ <T extends object>(object: T, path: Many<string | number | symbol>, value: any): T; <TResult>(object: object, path: Many<string | number | symbol>, value: any): TResult; }

```

# setWith (导出)

**签名**

```ts

{ <T extends object>(object: T, path: Many<string | number | symbol>, value: any, customizer?: SetWithCustomizer<T>): T; <T extends object, TResult>(object: T, path: Many<string | number | symbol>, value: any, customizer?: SetWithCustomizer<T>): TResult; }

```

# toPairs (导出)

**签名**

```ts

{ <T>(object?: Dictionary<T> | NumericDictionary<T>): [string, T][]; (object?: object): [string, any][]; }

```

# toString (导出)

**签名**

```ts
;(value: any) => string
```
