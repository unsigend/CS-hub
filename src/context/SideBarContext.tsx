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
  toggleSideBar: () => {},
  openSideBar: () => {},
  closeSideBar: () => {},
});

// Create the provider
const SideBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to get sidebar element
  const getSideBarElement = () => document.getElementById("SideBar");

  // Open the sidebar
  const openSideBar = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(true);
      const sideBar = getSideBarElement();

      if (sideBar) {
        // Show overlay with smooth transitions
        Object.assign(sideBar.style, {
          display: "flex",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          zIndex: "1000",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(4px)",
          transition: "all 0.3s ease-in-out",
        });

        // Animate in
        setTimeout(() => {
          if (sideBar) sideBar.style.opacity = "1";
        }, 10);
      }

      // Prevent body scroll
      document.body.style.overflow = "hidden";
    }
  };

  // Close the sidebar
  const closeSideBar = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
      const sideBar = getSideBarElement();

      if (sideBar) {
        Object.assign(sideBar.style, {
          opacity: "0",
          backgroundColor: "rgba(0, 0, 0, 0)",
          backdropFilter: "blur(0px)",
        });
      }

      // Restore body scroll
      document.body.style.overflow = "unset";

      // Complete hide after transition
      setTimeout(() => {
        if (sideBar) {
          Object.assign(sideBar.style, {
            display: "none",
            zIndex: "0",
          });
        }
      }, 300);
    }
  };

  // Toggle the sidebar
  const toggleSideBar = () => {
    isOpen ? closeSideBar() : openSideBar();
  };

  return (
    <SideBarContext.Provider
      value={{ isOpen, toggleSideBar, openSideBar, closeSideBar }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

// Export the context and provider
export { SideBarContext, SideBarProvider };
