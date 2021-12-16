import React, { useEffect, useState } from "react";

export default function Codes() {
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    setCodes([1, 2, 3, 4, 5]);
  }, []);

  return (
    <ol>
      {codes.map((elem) => {
        return <Code item={elem} />;
      })}
    </ol>
  );
}

const Code = ({ item }) => {
  return (
    <li className="text-white flex justify-between w-full ml-12 mt-4">
      <p>{item}</p>
      <p className="text-white">Hello </p>
    </li>
  );
};
