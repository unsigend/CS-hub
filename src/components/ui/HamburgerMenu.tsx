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

/**
 * @description: HamburgerMenu component used as a button to toggle the sidebar
 */

import { useContext } from "react";
import { Menu, X } from "lucide-react";
import { SideBarContext } from "@/context/SideBarContext";

// Style for the HamburgerMenu component
const HamburgerMenuStyle = {
  HamburgerMenu: `
    flex items-center justify-center
    md:hidden
    p-2 rounded-lg
    text-gray-700 hover:text-black
    hover:bg-gray-100
    transition-all duration-200
    cursor-pointer
    `,
};

const HamburgerMenu = () => {
  const { isOpen, toggleSideBar } = useContext(SideBarContext);

  return (
    <div className={HamburgerMenuStyle.HamburgerMenu} onClick={toggleSideBar}>
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </div>
  );
};

export default HamburgerMenu;
