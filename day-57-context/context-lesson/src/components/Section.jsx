import React from "react";
import { LevelContext } from "../context/LevelContext";

export default function Section({level, children}) {

  return (
    <section className="section">
        <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  )
}
