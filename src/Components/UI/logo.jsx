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

// Import for the style
import "@/style/style.css";

// Import for the components
import HamburgerMenu from "@/Components/UI/HamburgerMenu";

// style for the Logo component
/**
 * @description: Style for the Logo component
 * @style: Logo is build based on the tailwind css
 *         Using white and black as the theme color
 */
const LogoStyle = {
    Logo: `
        flex items-center gap-2
        px-3 py-2 my-3
        bg-white
        border border-gray-200
        rounded-md
        shadow-md shadow-black/10
        hover:shadow-lg hover:shadow-black/15
        transform hover:-translate-y-0.5Add commentMore actions
        transition-all duration-200 ease-in-out
        cursor-pointer
    `,
    LogoContainer: `
        flex flex-row items-center gap-4
    `,
    LogoFrame: `
        flex items-center justify-center
        w-9 h-9
        bg-black
        text-white font-bold text-md
        rounded
        select-none
    `,
    LogoText: `
        text-black font-bold text-xl
        select-none
        tracking-tight
    `
}

export default function Logo() {
    return (
        <div className={LogoStyle.LogoContainer}>
            <HamburgerMenu />
            <div className={LogoStyle.Logo}>
                <div className={LogoStyle.LogoFrame}>CS</div>
                <div className={LogoStyle.LogoText}>Hub</div>
            </div>
        </div>
    )
}