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

// Import for the Link component
import {LinkExternal, LinkInner} from "@/components/ui/Link";

// Import for the Github URL
import global from "@/data/config/config";

/**
 * @description: Style for the Under Construction page component
 * @returns {React.ReactNode} - The under construction page component
 */
const UnderConstructionStyle = {
    Container: `
    flex flex-col
    px-4 py-12
    `,
    Card: `
    w-full max-w-xl
    bg-white
    border border-gray-200
    rounded-xl
    p-10 sm:p-16 md:p-20
    text-center
    `,
    Title: `
    text-3xl sm:text-6xl font-light text-gray-900 mb-6
    `,
    Subtitle: `
    text-xl sm:text-2xl text-gray-600 mb-10
    font-normal
    `,
    Description: `
    text-gray-500 leading-relaxed mb-12
    text-lg sm:text-xl
    `,
    ContributionText: `
    text-gray-400 text-base sm:text-lg
    leading-relaxed
    `,
}

/**
 * @description: Under Construction Page Component for the CS-hub project
 * @returns {React.ReactNode} - The under construction page component
 */
export default function UnderConstructionPage({pageName}) {
    return (
        <div className={UnderConstructionStyle.Container}>
            <div className={UnderConstructionStyle.Card}>
                {/* Main Title */}
                <h1 className={UnderConstructionStyle.Title}>
                    {pageName} Page Not found
                </h1>

                {/* Subtitle */}
                <p className={UnderConstructionStyle.Subtitle}>
                    This page is currently being developed
                </p>

                {/* Description */}
                <p className={UnderConstructionStyle.Description}>
                    Currently, working on something. Coming soon. Go back to <LinkInner to={global.BasePath}>Home</LinkInner>
                </p>

                {/* Contribution */}
                <p className={UnderConstructionStyle.ContributionText}>
                    Contributions are welcome.  <LinkExternal href={global.GitHubLink}>Github</LinkExternal>
                </p>
            </div>
        </div>
    )
}