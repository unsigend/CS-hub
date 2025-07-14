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
import {SubTitle, Title} from "@/components/ui/Title";
import Paragraph from "@/components/ui/Paragraph";

// Import for the Github URL
import global from "@/data/config/config";

/**
 * @description: Style for the Under Construction page component
 * @returns {React.ReactNode} - The under construction page component
 */
const UnderConstructionStyle = {
    Container: `
    flex flex-col
    px-4 py-12 mx-auto
    `,
    Card: `
    w-full max-w-xl
    bg-white
    border border-gray-200
    rounded-xl
    p-10 sm:p-16 md:p-20
    text-center
    `,
    Description: `
    text-gray-500 leading-relaxed mb-12
    text-lg sm:text-xl
    `,
}

/**
 * @description: Under Construction Page Component for the CS-hub project
 * @returns {React.ReactNode} - The under construction page component
 */
export default function UnderConstructionPage({pageName}: {pageName: string}) {
    return (
        <div className={UnderConstructionStyle.Container}>
            <div className={UnderConstructionStyle.Card}>
                {/* Main Title */}
                <Title title={`${pageName} Page Not Found`} />

                {/* Subtitle */}
                <SubTitle title="This page is currently being developed" />

                {/* Description */}
                <Paragraph>
                    Currently, working on something. Coming soon. Go back to <LinkInner to={global.BasePath}>Home</LinkInner>
                </Paragraph>

                {/* Contribution */}
                <Paragraph>
                    Contributions are welcome.  <LinkExternal href={global.GitHubLink}>Github</LinkExternal>
                </Paragraph>
            </div>
        </div>
    )
}