const compareNumbers = (a: number, b: number) => a - b;

const compareStrings = (a: string, b: string) => {
  const nameA = a.toUpperCase();
  const nameB = b.toUpperCase();

  if (nameA < nameB) {
    return -1;
  } else if (nameB > nameA) {
    return 1;
  }
  return 0;
};

export const SortUtil = {compareNumbers, compareStrings};
