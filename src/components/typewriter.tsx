"use client";

import React from "react";
import Typewriter from "typewriter-effect";
type Props = {};

const TypeWriter = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Organize")
          .pauseFor(1000)

          .deleteAll();
        typewriter.typeString("Retrieve.").pauseFor(1000).deleteAll();
        typewriter.typeString("Create").pauseFor(1000).deleteAll();
        typewriter.typeString("Delete").pauseFor(1000).deleteAll();
        typewriter.typeString("Edit").pauseFor(1000).deleteAll().start();
      }}
    />
  );
};

export default TypeWriter;
