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


## forTimes = (times: number, cb: (iterator: number, stop: () => void) => void): void  

As the `forLoop` that starts from `0`. The callback provides the `iterator: number` and also as second argument the `stop: Function` in order to break the loop.

```
forTimes(3, i => console.log('value', i))
// it consoles
// value 0
// value 1
// value 2
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

## keys = (obj: any): string[]

Get the keys of the Object.

This is a shorthand of `Object.keys(obj)`.

## values = (obj: any): any[]

Get the valus of the properties of an object.

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

Google's Chrome with v8 has optimized for function calls. 

That means that now the classic old school `for` statement:

`for (var i=0; i<100; i++) console.log('my value', myArray[i]);`

is much more  expensive than this:

`myArray.forEach(v => console.log('my value', v));`

Many methods of `dyna-loops` use functions like this internally.

But the `forLoop` and `forTimes` are using the traditional `for` loop.