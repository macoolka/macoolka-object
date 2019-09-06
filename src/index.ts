/**
 * The contains some funcitons about object
 *
 * choose some lodash function
 *
 * @desczh
 * 包含一些`object`的函数
 *
 * 选取一些lodash函数
 * @file
 * @since 0.2.0
 */
import { isNumber, isBoolean, isString, isArray, isObject, isNull, isUndefined, isError } from 'macoolka-predicate'
import { showString, showNumber, showBoolean, Show } from 'fp-ts/lib/Show'
import {
    get, has, mapKeys, mapValues, pick, pickBy, merge,
    toPairs, omit, omitBy, mergeWith, set, setWith, clone, cloneDeep, toString
} from 'lodash'
import { fromFoldableMap } from 'fp-ts/lib/Record'
import { getLastSemigroup } from 'fp-ts/lib/Semigroup'
import { zip, array } from 'fp-ts/lib/Array'
export {
    get, has, mapKeys, mapValues,
    pick, pickBy, merge, toPairs, omit, omitBy,
    mergeWith, set, setWith, clone, cloneDeep,
    toString
}
import { identity } from 'fp-ts/lib/function'
import { Diff } from 'macoolka-typescript'

/**
 * Give a object with default value
 * @desczh
 * 为一个对象设置缺省值
 * @example
 * import {withDefaults} from 'macoolka-object'
 * interface A1 {
 *  a: string;
 *    b: number;
 *    c: number;
 * }
 * interface AD {
 *    a: string;
 *    b: number;
 * }
 * const aDefault: AD = {
 *    a: '',
 *    b: 1,
 * };
 * const d = withDefaults<AD, A1>(aDefault);
 * const result: A1 = d({ c: 1 });
 * expect(result).toEqual({
 *   a: '',
 *    b: 1,
 *    c: 1,
 * });
 * expect(d({ a: '1', b: 2, c: 3 })).toEqual({ a: '1', b: 2, c: 3 });
 *
 * @since 0.2.0
 */
export const withDefaults = <D extends { [k: string]: any }, A extends D>(defaults: D) => (
    props: Diff<A, keyof D> = {} as Diff<A, keyof D>): A => merge({}, defaults, props) as A
export const zipObject = <K extends string, A>(keys: Array<K>, values: Array<A>): Record<K, A> =>
    fromFoldableMap(getLastSemigroup<A>(), array)(zip(keys, values), identity)
/**
 * `Show` a unknown object
 * @desczh
 * 未知对象的Show实现
 * @example
 * import {showUnknow} from 'macoolka-object'
 * const a = { a: '1', b: 2, c: [{ d: 3, f: 4 },] ,e:undefined,f:null}
 * expect(showUnknow.show(a)).toEqual(`{ a: "1", b: 2, c: [ { d: 3, f: 4 } ], e: undefined, f: null }`);
 * expect(showUnknow.show(1)).toEqual(`1`);
 * expect(showUnknow.show('abc')).toEqual(`"abc"`);
 * expect(showUnknow.show(true)).toEqual(`true`);
 * expect(showUnknow.show(undefined)).toEqual(`undefined`);
 * expect(showUnknow.show(null)).toEqual(`null`);
 * expect(showUnknow.show(new Error('abc'))).toEqual(`"Error: abc"`);
 * expect(showUnknow.show([1,2])).toEqual(`[ 1,2 ]`);
 * @since 0.2.0
 */
export const showUnknow: Show<unknown> = {
    show: (a: unknown): string =>
        isError(a)
            ? showString.show(`${a.name}: ${a.message}`)
            : isString(a) ?
                showString.show(a)
                : isNumber(a)
                    ? showNumber.show(a)
                    : isBoolean(a)
                        ? showBoolean.show(a)
                        : isNull(a)
                            ? 'null' :
                            isUndefined(a)
                                ? 'undefined'

                                : isArray(a) ?
                                    `[ ${a.map(value => showUnknow.show(value)).join(',')} ]`
                                    : isObject(a) ? `{ ${Object.keys(a)
                                        .map(k => `${k}: ${showUnknow.show(get(a, [k]))}`)
                                        .join(', ')} }`
                                        : 'unknown'
}
