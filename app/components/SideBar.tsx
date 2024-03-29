"use-client";

import { useState, useEffect, useRef } from "react";
import SideMenu from "./SideMenu";
import { SideLibrary } from "./SideLibrary";

const [minWidth, maxWidth, defaultWidth] = [295, 425, 300];

const Sidebar = () => {
  const [width, setWidth] = useState(defaultWidth);
  const isResized = useRef(false);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (!isResized.current) {
        return;
      }

      setWidth((previousWidth) => {
        const newWidth = previousWidth + e.movementX / 2;

        const isWidthInRange = newWidth >= minWidth && newWidth <= maxWidth;

        return isWidthInRange ? newWidth : previousWidth;
      });
    });

    window.addEventListener("mouseup", () => {
      isResized.current = false;
    });
  }, []);

  return (
    <div className="hidden sm:flex relative overflow-y-hidden select-none">
      <aside
        style={{ width: `${width / 16}rem` }}
        className="relative flex flex-col gap-2"
      >
        <SideMenu />
        <SideLibrary />

      </aside>

      {/* Handle */}
      <div
        className="w-2 bg-transparent cursor-col-resize"
        onMouseDown={() => {
          isResized.current = true;
        }}
      />
    </div>
  );
};

export default Sidebar;
