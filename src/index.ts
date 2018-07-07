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
  while (source.length) output.push(source.splice(random(0, source.length - 1), 1)[0]);
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


export const forLoopByNext = (start: number, end: number, cb: (iterator: number, next: () => void) => void): void => {
  const funcs: Array<(iterator: number, next: () => void) => void> = Array(end - start + 1).fill(cb);
  let index: number = start;
  const run = (): void => {
    if (funcs.length) {
      const func = funcs.pop();
      func(index, () => {
        index++;
        run();
      });
    }
  };
  run();
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


export const arrayCombinations = (array: any[]): any[] => {
  // credits: http://js-algorithms.tutorialhorizon.com/2015/10/23/combinations-of-an-array/
  let combinations: any[] = [];
  let compsPower: number = Math.pow(2, array.length);

  for (let i = 0; i < compsPower; i++) {
    let combination: any[] = [];
    for (let j = 0; j < array.length; j++) {
      if ((i & Math.pow(2, j))) {
        combination.push(array[j]);
      }
    }
    if (combination.length) {
      combinations.push(combination)
    }
  }
  return combinations;
};

export const arrayPermutedCombinations = (array: any[]): any[] => {
  return [].concat(arrayCombinations(array).map((a: any[]) => arrayPermutations(a)));
};

export const uniques = (array: any[]): any[] => {
  return array.reduce((acc: any[], item) => {
    if (acc.indexOf(item) === -1) acc.push((item));
    return acc;
  }, []);
};

export const round = (value: number, digits: number): number => {
  return Math.round(value * Math.pow(10, digits)) / Math.pow(10, digits);
};

export const floor = (value: number, digits: number): number => {
  return Math.floor(value * Math.pow(10, digits)) / Math.pow(10, digits);
};

export const roundToString = (value: number, digits: number): string => {
  const minValue: number = 1 / (Math.pow(10, digits));

  if (value === 0 || value >= minValue) {
    return round(value, digits).toLocaleString();
  }
  else {
    return '<' + (minValue.toLocaleString());
  }
};

// Debounce factory function like _.debounce
// Creates a function that calls the given function in debounce mode.
// On 1st hit is calls the function immediately. On repeated in timeout hits waits till the end of timeout and then it calls is again.
export const debounce = (func: any, timeout: number = 100): any => {
  let active: boolean = false;
  let toCall: any = null;
  let timerHandler: any;

  const callIt = () => {
    active = false;
    if (!active && toCall) {
      toCall();
      toCall = null;
    }
  };

  return (...args) => {
    if (active) {
      toCall = () => func(...args);
      clearTimeout(timerHandler);
      timerHandler = setTimeout(callIt, timeout);
    }
    else {
      func(...args);
      active = true;
      timerHandler = setTimeout(callIt, timeout);
    }
  }
};



export default {
  array,
  arrayPermutations,
  arrayCombinations,
  arrayPermutedCombinations,
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
  forLoopByNext,
  forTimes,
  forLoopToArray,
  hasValue,
  hasValues,
  hasSomeValues,
  uniques,
  debounce,
}
