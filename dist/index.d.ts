export declare const array: (someLikeArray: any) => Array<any>;
export declare const shuffleArray: (array: any[]) => any[];
export declare const random: (from: number, to_?: number) => number;
export declare const isNumber: (n: any) => boolean;
export declare const inRange: (number: number, from: number, to: number) => boolean;
export declare const keys: (obj: any) => string[];
export declare const values: (obj: any) => any[];
export interface IKeyValuePair {
    key: string;
    value: any;
}
export declare const keyValues: (obj: any) => IKeyValuePair[];
export declare const forKeys: (obj: any, cb: (value: any, index: number, array: any[]) => void) => void;
export declare const forValues: (obj: any, cb: (value: any, index: number, array: any[]) => void) => void;
export declare const keyForValue: (obj: any, value: any) => string;
export declare const forLoop: (start: number, end: number, cb: (iterator: number, stop: () => void) => void) => void;
export declare const forTimes: (times: number, cb: (iterator: number, stop: () => void) => void) => void;
export declare const forLoopToArray: (start: number, end: number, cb: (iterator: number, stop: () => void) => void) => any[];
export declare const hasValue: (array: any[], value: any) => boolean;
export declare const hasValues: (array: any[], values: any[]) => boolean;
export declare const hasSomeValues: (array: any[], values: any[]) => boolean;
export declare const arrayPermutations: (array: any[]) => any[];
export declare const arrayCombinations: (array: any[]) => any[];
export declare const arrayPermutedCombinations: (array: any[]) => any[];
export declare const uniques: (array: any[]) => any[];
declare const _default: {
    array: (someLikeArray: any) => any[];
    arrayPermutations: (array: any[]) => any[];
    arrayCombinations: (array: any[]) => any[];
    arrayPermutedCombinations: (array: any[]) => any[];
    shuffleArray: (array: any[]) => any[];
    random: (from: number, to_?: number) => number;
    isNumber: (n: any) => boolean;
    inRange: (number: number, from: number, to: number) => boolean;
    keys: (obj: any) => string[];
    values: (obj: any) => any[];
    keyValues: (obj: any) => IKeyValuePair[];
    keyForValue: (obj: any, value: any) => string;
    forKeys: (obj: any, cb: (value: any, index: number, array: any[]) => void) => void;
    forValues: (obj: any, cb: (value: any, index: number, array: any[]) => void) => void;
    forLoop: (start: number, end: number, cb: (iterator: number, stop: () => void) => void) => void;
    forTimes: (times: number, cb: (iterator: number, stop: () => void) => void) => void;
    forLoopToArray: (start: number, end: number, cb: (iterator: number, stop: () => void) => void) => any[];
    hasValue: (array: any[], value: any) => boolean;
    hasValues: (array: any[], values: any[]) => boolean;
    hasSomeValues: (array: any[], values: any[]) => boolean;
    uniques: (array: any[]) => any[];
};
export default _default;
