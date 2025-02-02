import { useState } from "react";
import { useRef } from "react";
import { gsap } from "gsap";

function App() {
  const [count, setCount] = useState(0);

  const headerRef = useRef(null);

  const animate = () => {
    gsap.from(headerRef.current, { duration: 1, y: "-100%" });
  };

  return (
    <>
      <div data-t="wrapper" className="m-0 flex h-[100vh] flex-col text-3xl">
        <div ref={headerRef} id="header" className="h-[15vh] bg-red-500">
          <div
            data-t="div-links"
            className="flex h-full items-center justify-around text-white"
          >
            <div data-t="link">Link 1</div>
            <div data-t="link">Link 2</div>
            <div data-t="link">Link 3</div>
          </div>
        </div>

        <button
          onClick={animate}
          className="mt-5 rounded bg-blue-500 p-3 text-white"
        >
          Animate Header
        </button>

        <div data-t="content" className="flex h-full justify-between">
          <div data-t="sidebar left" className="w-[15vw] bg-green-500"></div>
          <button
            data-t="btn"
            className="cursor-pointer self-center rounded-xl border bg-slate-700 p-4 text-white transition-opacity duration-300 hover:opacity-75"
          >
            Reverse!
          </button>
          <div data-t="sidebar right" className="w-[15vw] bg-green-500"></div>
        </div>

        <div data-t="footer" className="h-[15vh] bg-blue-500"></div>
      </div>
    </>
  );
}

export default App;
