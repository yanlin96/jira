// 这个可以用来排除 !0 == true
export const isFalsy = (value: any) => (value === 0 ? false : !value);

export const cleanObject = (obj: object) => {
  // 这里记住，等价objes.assign，保证不改变传出参数的任何东西
  const result = { ...obj };
  Object.keys(result).forEach((key: any) => {
    //@ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      //@ts-ignore
      delete result[key];
    }
  });
  return result;
};
