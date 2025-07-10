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

// Style for the Reference component
const ReferenceStyle = {
    Reference: `
    ml-2 text-black font-semibold
    hover:text-gray-700 transition-colors duration-200
    `,
}

// Style for the ReferenceAligned component
const ReferenceAlignedStyle = {
    ReferenceItem: `
    flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4
    text-gray-700 leading-relaxed text-base sm:text-lg mb-3
    `,
    ReferenceName: `
    min-w-0 sm:min-w-[200px] font-medium text-gray-600
    `,
    ReferenceLink: `
    flex-1
    `,
}

export default function Reference({url, content}) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" 
        className={ReferenceStyle.Reference}>
            {content}
        </a>
    )
}

export function ReferenceAligned({name, url, content}) {
    return (
        <div className={ReferenceAlignedStyle.ReferenceItem}>
            <div className={ReferenceAlignedStyle.ReferenceName}>
                {name}
            </div>
            <div className={ReferenceAlignedStyle.ReferenceLink}>
                <Reference url={url} content={content} />
            </div>
        </div>
    )
}