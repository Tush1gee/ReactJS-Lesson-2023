import React from "react";
import ThemeSwitch from "../ThemeSwitch";

export default function TopBar(): JSX.Element {
  return (
    <div className="w-full p-2 bg-green-500">
        <div className="w-10/12 m-auto">
            <ThemeSwitch/>
        </div>
    </div>
  )
}
