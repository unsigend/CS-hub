/**
 * MIT License
 *
 * Copyright (c) 2025 Qiu Yixiang
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { createContext, useState } from "react";

// Create the context
const SideBarContext = createContext({
  isOpen: false,
  openSideBar: () => {},
  closeSideBar: () => {},
});

// Create the provider
const SideBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the sidebar
  const closeSideBar = () => {
    // If the window is not mobile, do nothing
    if (window.innerWidth > 768) {
      return;
    }

    const sideBar = document.getElementById("SideBar");
    if (sideBar) {
      sideBar.style.opacity = "0";
      sideBar.style.backgroundColor = "rgba(0, 0, 0, 0)";
      sideBar.style.backdropFilter = "blur(0px)";
    }

    // Restore body scroll
    document.body.style.overflow = "unset";

    // Complete hide after transition
    setTimeout(() => {
      if (sideBar) {
        sideBar.style.display = "none";
        sideBar.style.zIndex = "0";
      }
    }, 300);

    // Reset hamburger menu state
    window.dispatchEvent(new CustomEvent("closeMobileSidebar"));
  };

  // Open the sidebar
  const openSideBar = () => {
    setIsOpen(true);
  };

  return (
    <SideBarContext.Provider value={{ isOpen, openSideBar, closeSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
};

// Export the context and provider
export { SideBarContext, SideBarProvider };
