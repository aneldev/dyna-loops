export const array: (someLikeArray: any) => Array<any> = (someLikeArray: any) => {
  if (typeof someLikeArray === 'string') someLikeArray = someLikeArray.split('');
  if (typeof someLikeArray === 'number') {
    let newArray: any[] = [];
    forTimes((someLikeArray as number), () => newArray.push(undefined));
    someLikeArray = newArray;
  }
  return Array.apply(this, someLikeArray)
};

export const shuffleArray = (array: any[]): any[] => {
  let output: any[] = [];
  let source: any[] = [].concat(array);
  while (source.length) output.push(source.splice(random(0,source.length-1), 1)[0]);
  return output;
};

export const random = (from: number, to_?: number): number => {
  if (to_ === undefined) {
    to_ = from;
    from = 0;
  }
  if (to_ < from) {
    let h = from;
    from = to_;
    to_ = h;
  }
  return Math.floor((Math.random() * ((to_ - from) + 1)) + from);
};

export const isNumber = (n: any): boolean => !isNaN(parseFloat(n)) && isFinite(n);

export const inRange = (number: number, from: number, to: number): boolean => number >= from && number <= to;

export const keys = (obj: any): string[] => Object.keys(obj);

export const values = (obj: any): any[] => Object.keys(obj).map((key: string) => obj[key]);

export interface IKeyValuePair {
  key: string,
  value: any
}

export const keyValues = (obj: any): IKeyValuePair[] => Object.keys(obj).map((key: string) => ({key, value: obj[key]}));

export const forKeys = (obj: any, cb: (value: any, index: number, array: any[]) => void): void => keys(obj).forEach(cb);

export const forValues = (obj: any, cb: (value: any, index: number, array: any[]) => void): void => values(obj).forEach(cb);

export const keyForValue = (obj: any, value: any): string => {
  let found: IKeyValuePair = keyValues(obj).find((kvp: IKeyValuePair) => kvp.value === value);
  return found && found.key;
};

export const forLoop = (start: number, end: number, cb: (iterator: number, stop: () => void) => void): void => {
  let stop: boolean = false;
  for (let iterator: number = start; !stop && iterator <= end; iterator++)
    cb(iterator, () => stop = true);
};

export const forTimes = (times: number, cb: (iterator: number, stop: () => void) => void): void => {
  forLoop(0, times - 1, cb);
};

export const forLoopToArray = (start: number, end: number, cb: (iterator: number, stop: () => void) => void): any[] => {
  let output: any[] = [];
  forLoop(start, end, (iterator: number, stop: () => void) => {
    output.push(cb(iterator, stop));
  });
  return output;
};

export const hasValue = (array: any[], value: any): boolean => array.indexOf(value) > -1;

export const hasValues = (array: any[], values: any[]): boolean => {
  let foundValues: number = 0;
  values.forEach((value: any) => {
    if (hasValue(array, value)) foundValues++;
  });
  return foundValues === values.length;
};

export const hasSomeValues = (array: any[], values: any[]): boolean => {
  let foundValues: number = 0;
  values.forEach((value: any) => {
    if (hasValue(array, value)) foundValues++;
  });
  return foundValues > 0;
};

export const arrayPermutations = (array: any[]): any[] => {
  // credits: http://rextester.com/OUC90847
  let combinations: any[] = [];
  let combination: any[] = [];
  let indices: any[] = [];

  const generate = (level: number): void => {
    for (let i = 0; i < array.length; i++) {
      if (!indices[i]) {
        indices[i] = true;
        combination[level] = array[i];
        if (level < array.length - 1)
          generate(level + 1);
        else
          combinations.push([].concat(combination));
        indices[i] = false;
      }
    }
  };

  generate(0);
  return combinations;
};

export default {
  array,
  arrayPermutations,
  shuffleArray,
  random,
  isNumber,
  inRange,
  keys,
  values,
  keyValues,
  keyForValue,
  forKeys,
  forValues,
  forLoop,
  forTimes,
  forLoopToArray,
  hasValue,
  hasValues,
  hasSomeValues,
}
