import { useEffect, useState } from "react";

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// debounce 函数
// const debounce = (func, delay) => {
//   let timeout;
//   return (...param) => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(function () {
//       func(...param);
//     }, delay);
//   };
// };

// any是不好的，后面我们会用 泛型来改正
export const useDebounce = <V,>(value: V, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    //每次value变化后，设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay);

    // 每次在上一个useEffect处理完后，在运行
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debounceValue;
};

//阿依西八，还能这样用！！！！学到了
export const useArray = <T,>(initArray: T[]) => {
  const [value, setValue] = useState(initArray);
  return {
    value,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};
