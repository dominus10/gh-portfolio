import { Fragment, type ClassAttributes, type HTMLAttributes } from "react";
import type { JSX } from "react/jsx-runtime";
import "../styles/global.css";

export default function LayoutReact(
  rest: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement>,
) {
  const currentPath = window.location.pathname;
  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "https://github.com/dominus10", label: "Github" },
    {
      path: "https://www.linkedin.com/in/nicholas-inggih-998364140/",
      label: "Linkedin",
    },
    { path: "mailto:nick.avm@gmail.com", label: "Contact me" },
  ];
  const userAgentStr = () => {
    const ua = window.navigator.userAgent;
    const isMobile = /Android|iPhone|Windows Phone/.test(ua);
    const isTablet = /iPad|Android(?!.*Mobile)/.test(ua); // iPads & Android tablets
    const isDesktop = /Windows NT|Macintosh|CrOS/.test(ua);

    if (isTablet) return "Tablet";
    if (isMobile)
      return ua.includes("iPhone")
        ? "mobile: iPhone"
        : ua.includes("Windows Phone")
        ? "mobile: Windows Phone"
        : "Android";
    if (isDesktop)
      return ua.includes("Windows NT 10")
        ? "desktop: Windows 10/11"
        : ua.includes("Windows NT 6")
        ? "desktop: Windows 7"
        : ua.includes("CrOS")
        ? "desktop: Chromebook"
        : "desktop: Mac";

    return ua;
  };
  return (
    <div {...rest}>
      <div className="sticky">
        <div
          className="relative bg-slate-700 w-[100px] h-[100dvh] flex flex-col 
          justify-center items-center text-sm text-white"
        >
          <nav className="h-4 flex flex-col gap-2 justify-center items-center">
            {links.map(({ path, label }, k) => (
              <Fragment key={k}>
                <a
                  href={path}
                  className={`${
                    currentPath === path
                      ? "underline font-bold uppercase bg-white text-slate-700 p-2 rounded-md"
                      : ""
                  }`}
                >
                  {label}
                </a>
                {k !== links.length - 1 && (
                  <div className="border-r-[1px] border-cyan-700 h-full " />
                )}
              </Fragment>
            ))}
          </nav>
          <p className="absolute bottom-0 bg-slate-700 text-[10px] text-white p-4">
            You are viewing this from {userAgentStr()}
          </p>
        </div>
      </div>
    </div>
  );
}
