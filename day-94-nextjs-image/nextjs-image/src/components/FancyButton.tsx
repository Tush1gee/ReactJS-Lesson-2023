import React from "react";

export default function FancyButton(props: any): JSX.Element {
  return (
    <div>
        <button className="button">{props.children}</button>
        <style jsx>
            {`
                .button {
                    padding: 1em;
                    border-radius: 1em;
                    border: none;
                    background: purple;
                    color: white;
                }
            `}
        </style>
    </div>
  )
}
