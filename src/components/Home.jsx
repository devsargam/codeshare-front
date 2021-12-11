import React from "react";

export default function Home() {
  // return <>Hello there</>;
  return (
    <section>
      <div className="relative max-w-5xl mx-auto pt-15 text-gray-100 sm:pt-24 lg:pt-32">
        <h1 className="text-white font-extrabold text-4xl text-center">
          “share your code, help your friends”
        </h1>
        <p className="text-center max-w-5xl mt-5 mx-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          porro soluta beatae consequuntur non, accusantium nobis numquam fugit
          culpa. Excepturi quasi rerum perspiciatis hic ratione quam
          voluptatibus quisquam minima odit?
        </p>

        <h1 className="text-gray-100 text-center font-extrabold text-4xl p-5">
          What is this website for?
        </h1>
        <p className="text-white text-center mx-10 max-w-5xl">
          Sharing code has always been a pain in ass for a long time. It is also
          difficult to teach non-techy guys about version control and github so
          due to that fact I created this simple site where anyone can post,
          search and copy code snippits for their benefit
          <br />
          Built on good intentions, I hope this webapp will definitely help
          others and this can be used fairly. Unnecessary api abuse will be
          definitely considered and even ip ban will be implemented if any sort
          of api abuse is observed
        </p>
      </div>
    </section>
  );
}
