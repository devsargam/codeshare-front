import React, { useEffect, useState } from "react";

export default function Codes() {
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    setCodes([1, 2, 3, 4, 5]);
    // fetch("https://jsonplaceholder.typicode.com/comments")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setCodes(data);
    //     console.log(data);
    //   });
    setCodes(data);
  }, []);

  return (
    <ol>
      {codes.map((elem) => {
        return (
          <>
            <Code name={elem.name} email={elem.email} />
          </>
        );
      })}
    </ol>
  );
}

const Code = ({ name, body, email }) => {
  return (
    <li className="text-white flex flex-col justify-between m-auto my-4 p-4 border-2 rounded-2xl max-w-screen-lg ">
      <h2 className="text-3xl w-auto hover:text-blue-300 cursor-pointer">
        {name}
      </h2>
      <hr className="py-2" />
      <h1 className="pl-5 w-auto hover:text-blue-300 cursor-pointer">
        By: {email}
      </h1>
    </li>
  );
};
