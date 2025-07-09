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

/**
 * @description: Style for the TableOfContents component
 * @style: TableOfContents positioned next to Hero with responsive design
 *         Hidden on mobile, visible on tablet+, shrinks to content size
 */
const TableOfContentsStyle = {
    Container: `
    hidden md:flex md:flex-col
    ml-6 lg:ml-8 xl:ml-10
    mt-20
    min-w-0 w-auto
    max-w-xs lg:max-w-sm xl:max-w-md
    flex-shrink-0
    `,
    Content: `
    bg-white
    border border-gray-200
    rounded-xl
    p-4 lg:p-6
    shadow-sm hover:shadow-md
    transition-all duration-300 ease-out
    backdrop-blur-sm
    `,
    Title: `
    text-lg lg:text-xl font-bold text-gray-900 mb-4
    pb-2 border-b border-gray-200
    `,
    List: `
    flex flex-col gap-2
    `,
    ListItem: `
    text-sm lg:text-base text-gray-700
    hover:text-black hover:bg-gray-50
    px-3 py-2 rounded-lg
    transition-all duration-200 ease-out
    cursor-pointer
    border border-transparent
    hover:border-gray-200
    `,
    SubListItem: `
    text-xs lg:text-sm text-gray-600
    hover:text-gray-900 hover:bg-gray-50
    px-3 py-1.5 ml-4 rounded-md
    transition-all duration-200 ease-out
    cursor-pointer
    border border-transparent
    hover:border-gray-100
    `,
}

export default function TableOfContents() {
    // Sample table of contents data - replace with actual content
    const tocItems = [
        { id: "introduction", title: "Introduction", level: 1 },
        { id: "getting-started", title: "Getting Started", level: 1 },
        { id: "installation", title: "Installation", level: 2 },
        { id: "configuration", title: "Configuration", level: 2 },
        { id: "examples", title: "Examples", level: 1 },
        { id: "advanced", title: "Advanced Usage", level: 1 },
        { id: "troubleshooting", title: "Troubleshooting", level: 2 },
    ];

    return (
        <div className={TableOfContentsStyle.Container}>
            <div className={TableOfContentsStyle.Content}>
                <h2 className={TableOfContentsStyle.Title}>
                    Table of Contents
                </h2>
                <nav className={TableOfContentsStyle.List}>
                    {tocItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={
                                item.level === 1 
                                    ? TableOfContentsStyle.ListItem
                                    : TableOfContentsStyle.SubListItem
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(item.id);
                                if (element) {
                                    element.scrollIntoView({ 
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }
                            }}
                        >
                            {item.title}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
}