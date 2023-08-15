import React from "react";
import { Link } from "react";

export default function Root() {
  return (
    <>
      <div id="sidebar" className="pt-5 pl-5 pr-5">
        <nav className="duration-500 ease-in-out font-brico">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <h1 className="text-2xl text-center md:text-left font-semibold">
              svenefolio.
            </h1>
            <div className="sticky top-2.5">
              <ul className="flex flex-row gap-3 items-center">
                <li>
                  <a href={`/contacts/1`}>index</a>
                </li>
                <li>
                  <a href={`/contacts/2`}>things</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
