# About
 
In now days we use rarely the `for` statement. But when we need it, it is ugly.

`dyna-loops` is a very small library with no dependencies that beautifies our `for` loops.

This library has many features that are also exist in `lodash`, but `dyna-loops` focuses only in loops and is not going to be extended, except if another awesome function come to life. 

But anyway this library will remain as small as possible and definitely the signatures won't change!  

This library is written in Typescript but you can use in any Javascript enviroment.

# Installation

`npm install --save dyna-loops`

# Usage

Import the method(s) you want only
```
import {forLoop} from "dyna-loops";

forLoop(0, 10, i => console.log(i));
```
or import them all in one variable
```
import loops from "dyna-loops"; 

loops.forLoop(0, 10, i => console.log(i));

```

# Methods

## forLoop = (start: number, end: number, cb: (iterator: number, stop: () => void) => void): void

The replacement of `for` loop, the callback provides the `iterator: number` and also as second argument the `stop: Function` in order to break the loop.

```
forLoop(0, 3, i => console.log('value', i))
// it consoles
// value 0
// value 1
// value 2
// value 3
```
You can break the loop calling the provided `stop()`
```
forLoop(0, 10, (i, stop) => { if (i==3) stop(); else console.log('value', i);})
// it consoles
// value 0
// value 1
// value 2
```

## forLoopByNext = (start: number, end: number, cb: (iterator: number, next: () => void) => void): void

Iterates asynchronously. It calls the cb passing as 2nd argument the `next()` function that should be called to call the next.

## forTimes = (times: number, cb: (iterator: number, stop: () => void) => void): void  

As the `forLoop` that starts from `0`. The callback provides the `iterator: number` and also as second argument the `stop: Function` in order to break the loop.

```
forTimes(3, i => console.log('value', i))
// it consoles
// value 0
// value 1
// value 2
```
## forLoopToArray = (start: number, end: number, cb: (iterator: number, stop: () => void) => void): any[]

Create fast arrays with `forLoopToArray`. 

The usage is exactly like the `forLoop` with the only difference that in the callback you have to return a value. The amount of values will be in am array where is the result of `forLoopToArray`.


```
forLoopToArray(0, 5, i => ({imageNo: i}))
// this returns
// (6) [Object, Object, Object, Object, Object, Object]
// 0: Object -> imageNo: 0
// 1: Object -> imageNo: 1
// 2: Object -> imageNo: 2
// 3: Object -> imageNo: 3
// 4: Object -> imageNo: 4
// 5: Object -> imageNo: 5
// length: 6
```

**Some other goodies are included as well**

## array: (someLikeArray: any) => Array<any>

Converts everything like array to array. 

Useful for the DOM queries.

```
// this damn thing has not the `forEach` method
document.querySelectorAll('div'); 

// get it!
array(document.querySelectorAll('div')).forEach !== undefined; 

// play
array(document.querySelectorAll('div')).forEach(element => console.log(element));

```

## shuffleArray = (array: any[]): any[]

Returns the array shuffled.

## random = (from: number, to_?: number): number

Returns a number within range.

```
random(1, 100); // return 23
random(1000);   // return 521

```

## keys = (obj: any): string[]

Get the keys of the Object.

This is a shorthand of `Object.keys(obj)`.

## isNumber = (n: any): boolean

Returns if the given is number.

## inRange = (number: number, from: number, to: number): boolean

Returns if the given number is within the range.

## values = (obj: any): any[]

Get the values of the properties of an object.

## keyValues = (obj: any): IKeyValuePair[]

Returns an array of `{key, value}` pair objects, from the content of obj.

## forKeys = (obj: any, cb: (value: any, index: number, array: any[]) => void): void

Iterates the keys of an object.

## forValues = (obj: any, cb: (value: any, index: number, array: any[]) => void): void

Iterates the values of an object.

## keyForValue = (obj: any, value: any): string

Finds the fist key in the object that contains this value.

## hasValue = (array: any[], value: any): boolean

Returns true is the value is contained in the array.

## hasValues = (array: any[], values: any[]): boolean

Returns true if all values are contained in the array.

## hasSomeValues = (array: any[], values: any[]): boolean

Returns true if some of the values are contained in the array.

## arrayPermutations = (array: any[]): any[]

Find all permutations of an array.   

## uniques = (array: any[]): any[] 

Removes the douplicated elements in an array (by ===).

# Interfaces

It offers these interfaces:

## interface IKeyValuePair 
```
{
    key: string,
    value: any
}
```
 
# Performance

Google's Chrome with v8 has optimized for  	function calls. 

That means that now the classic old school `for` statement:

`for (var i=0; i<100; i++) console.log('my value', myArray[i]);`

is much more  expensive than this:

`myArray.forEach(v => console.log('my value', v));`

Many methods of `dyna-loops` use functions like this internally.

But the `forLoop` and `forTimes` are using the traditional `for` loop.