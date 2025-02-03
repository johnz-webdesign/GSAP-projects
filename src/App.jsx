import { gsap } from "gsap";

function App() {
  const animate = () => {
    // gsap.from(".navbar-gsap", { duration: 1, y: "-100%", ease: "bounce" });
    // gsap.from(".navlink-gsap", {
    //   duration: 1,
    //   opacity: 0,
    //   delay: 0.1,
    //   stagger: 0.5,
    // });
    // gsap.from(".right-bar-gsap", {
    //   duration: 1,
    //   x: "-100vw",
    //   delay: 1,
    //   ease: "power2.in",
    // });
    // gsap.from(".left-bar-gsap", {
    //   duration: 1,
    //   x: "-100vw",
    //   delay: 1.5,
    //   ease: "power2.in",
    // });
    // gsap.to(".footer-gsap", { duration: 1, y: 0, ease: "elastic", delay: 2.5 });

    // gsap.fromTo(
    //   ".reverse-gsap",
    //   { opacity: 0, scale: 0, rotation: 720 },
    //   { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 }
    // );

    // timeline
    const timeline = gsap.timeline({ defaults: { duration: 1 } });
    timeline
      .from(".navbar-gsap", { y: "-100%", ease: "bounce" })
      .from(".navlink-gsap", {
        opacity: 0,
        stagger: 0.5,
      })
      .from(
        ".right-bar-gsap",
        {
          x: "-100vw",
          ease: "power2.in",
        },
        1
      )
      .from(
        ".left-bar-gsap",
        {
          x: "-100%",
          ease: "power2.in",
        },
        "<0.5"
      )
      .to(".footer-gsap", { y: 0, ease: "elastic" })
      .fromTo(
        ".reverse-gsap",
        { opacity: 0, scale: 0, rotation: 720 },
        { opacity: 1, scale: 1, rotation: 0 }
      );
  };

  return (
    <>
      <div
        data-t="wrapper"
        className="m-0 flex h-[100vh] flex-col overflow-hidden text-3xl"
      >
        <div data-t="header" className="navbar-gsap h-[15vh] bg-red-500">
          <div
            data-t="div-links"
            className="flex h-full items-center justify-around text-white"
          >
            <div data-t="link" className="navlink-gsap">
              Link 1
            </div>
            <div data-t="link" className="navlink-gsap">
              Link 2
            </div>
            <div data-t="link" className="navlink-gsap">
              Link 3
            </div>
          </div>
        </div>

        <div data-t="content" className="flex h-full justify-between">
          <div
            data-t="sidebar left"
            className="left-bar-gsap w-[15vw] bg-green-500"
          ></div>

          <div className="flex gap-3 self-center">
            <button
              data-t="btn"
              onClick={animate}
              className="cursor-pointer rounded-xl border bg-slate-700 p-4 text-white transition-opacity duration-300 hover:opacity-75"
            >
              Animate
            </button>

            <button
              data-t="btn"
              // onClick={reverseAnimation}
              className="reverse-gsap cursor-pointer rounded-xl border bg-slate-700 p-4 text-white transition-opacity duration-300 hover:opacity-75"
            >
              Reverse
            </button>
          </div>

          <div
            data-t="sidebar right"
            className="right-bar-gsap w-[15vw] bg-green-500"
          ></div>
        </div>

        <div
          data-t="footer"
          className="footer-gsap h-[15vh] translate-y-full bg-blue-500"
        ></div>
      </div>
    </>
  );
}

export default App;
