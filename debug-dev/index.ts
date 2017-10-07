export const arrayPermutations = (array: any[]): any[] => {
  // credits: http://rextester.com/OUC90847
  let combinations: any[] = [];
  let combination: any[] = [];
  let indices: any[] = [];
  let debugObject = () => ({combinations, combination, indices});

  const generate = (level: number): void => {
    console.log('01 generate', {level}, debugObject());
    for (let i = 0; i < array.length; i++) {
      console.log('02 for', {i, level}, debugObject());
      if (!indices[i]) {
        console.log('02.2 ', i);
        indices[i] = true;
        combination[level] = array[i];
        console.log('02.5 comp upd', combination.join(''));
        if (level < array.length - 1)
          generate(level + 1);
        else {
          combinations.push([].concat(combination));
          console.log('03 push comb', {i, level}, debugObject());
        }
        indices[i] = false;
      }
    }
  };

  generate(0);
  return combinations;
};

console.log('arrayPermutations', arrayPermutations([1, 2]));
