import { useEffect } from "react";
import { useArray } from "../../hooks";

export const TsReactTest = () => {
  const persons: { name: string; age: number }[] = [
    { name: "jack", age: 25 },
    { name: "ma", age: 22 },
  ];

  const { value, clear, removeIndex, add } = useArray(persons);

  useEffect(() => {}, []);

  return (
    <div>
      <button onClick={() => add({ name: "john", age: 22 })}>add john</button>

      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button onClick={() => clear()}>Clear</button>

      {value.map((person, index) => (
        <div>
          <span>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};
