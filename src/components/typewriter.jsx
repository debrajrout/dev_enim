"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterTitle = (props) => {
  const a = "hello";
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(`${props.firstLine}`)
          .pauseFor(1000)
          .deleteAll()
          .typeString(`${props.secondLine}`)
          .start();
      }}
    />
  );
};

export default TypewriterTitle;
