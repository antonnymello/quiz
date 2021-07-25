export const shuffle = (elements: any[]): any => {
  return elements
    .map((value) => ({ value, random: Math.random() }))
    .sort((object1, object2) => object1.random - object2.random)
    .map((obj) => obj.value);
};
