import React, { useState } from 'react';
import vscode from "../assets/icons/vscode.ico";
import Terminal from "../features/terminal/Terminal";

const list = ["File", "Edit", "View", "Go", "Run", "Terminal", "Help"];

function NavBar({ theme }) {
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);

  const toggleTerminal = () => setIsTerminalVisible(!isTerminalVisible);

  return (
    <>
      <header className={`bg-titlebarBg text-textColor`}>
        <nav className={`mx-3 flex h-8 items-center justify-between text-center`}>
          <div className="mr-auto flex items-center md:gap-x-3">
            <img src={vscode} height={20} width={20} alt="" />
            <ul className="flex gap-x-3 max-md:hidden">
              {list.map((item, index) => (
                <li
                  className="cursor-pointer"
                  key={index}
                  onClick={item === "Terminal" ? toggleTerminal : null}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <h1 className="md:mr-auto">Shweta Kadam-Visual Studio Code</h1>
          <div className="ml-auto flex gap-x-2">
            <div className="h-3 w-3 rounded-full bg-yellow-200 md:h-4 md:w-4"></div>
            <div className="h-3 w-3 rounded-full bg-green-500 md:h-4 md:w-4"></div>
            <div className="h-3 w-3 rounded-full bg-red-400 md:h-4 md:w-4"></div>
          </div>
        </nav>
      </header>
      {isTerminalVisible && <Terminal />}
    </>
  );
}

export default NavBar;
