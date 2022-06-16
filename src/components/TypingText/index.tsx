import { useEffect, useState } from "react";

interface Props {
  values: string[];
  mainIndex?: number;
  timePerValue?: number;
  speed?: number;
}

export const TypingText = ({
  values = [],
  timePerValue = 5000,
  mainIndex = 0,
  speed = 50,
}: Props) => {
  const [text, setText] = useState(values[0]);
  const [index, setIndex] = useState(1);
  const [pointer, setPointer] = useState(0);

  function restartPointer() {
    setPointer(0);
    if (index < values.length) {
      setText(values[index % values.length]);
      setIndex((old) => old + 1);
    } else {
      setText(values[0]);
      setIndex(1);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (pointer < text.length) {
        setPointer(pointer + 1);
      } else {
        setTimeout(() => restartPointer(), timePerValue);
      }
    }, speed);
  }, [pointer]);

  return <div className="text-lg italic my-5 text-center">Eu sou {text.slice(0, pointer)}</div>;
};
