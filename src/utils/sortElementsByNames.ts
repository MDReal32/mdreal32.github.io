export const sortElementsByNames = <T extends any = any, R = string>(
  sortedItems: R[],
  elements: T[],
  sortFunction: (elements: T[], element: R) => T | undefined = (elements, element) =>
    elements.find(el => el === element)
) => {
  if (sortedItems.length !== elements.length) throw new Error("Elements count and sortedItems must be same length");

  return sortedItems.map(item => {
    const found = sortFunction(elements, item);

    if (!found) {
      throw new Error(`Cannot find element in sortedItems. With index ${JSON.stringify(item)}`);
    }

    return found;
  });
};
