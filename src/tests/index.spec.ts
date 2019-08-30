
import {
  
    withDefaults,
 
    showUnknow
} from '../index';
describe('object', () => {
   
    it('withDefaults', () => {
        interface A1 {
            a: string;
            b: number;
            c: number;
        }
        interface AD {
            a: string;
            b: number;
        }
        const aDefault: AD = {
            a: '',
            b: 1,
        };
        const d = withDefaults<AD, A1>(aDefault);
        const result: A1 = d({ c: 1 });
        expect(result).toEqual({
            a: '',
            b: 1,
            c: 1,
        });
        expect(d({ a: '1', b: 2, c: 3 })).toEqual({ a: '1', b: 2, c: 3 });
    });
   
  
    it('showUnknow', () => {
        
        const a = { a: '1', b: 2, c: [{ d: 3, f: 4 },] ,e:undefined,f:null}
        expect(showUnknow.show(a)).toEqual(`{ a: "1", b: 2, c: [ { d: 3, f: 4 } ], e: undefined, f: null }`);
        expect(showUnknow.show(1)).toEqual(`1`);
        expect(showUnknow.show('abc')).toEqual(`"abc"`);
        expect(showUnknow.show(true)).toEqual(`true`);
        expect(showUnknow.show(undefined)).toEqual(`undefined`);
        expect(showUnknow.show(null)).toEqual(`null`);
        expect(showUnknow.show(new Error('abc'))).toEqual(`"Error: abc"`);
        expect(showUnknow.show([1,2])).toEqual(`[ 1,2 ]`);
       
    })
    
    
});
