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

// Style for the Paragraph component
const ParagraphStyle = {
    Paragraph: `
    text-gray-700 leading-relaxed
    text-base sm:text-lg mb-4
    [&>p]:mb-4 [&>p:last-child]:mb-0
    [&>ul]:mb-4 [&>ol]:mb-4
    [&>h1]:mb-4 [&>h2]:mb-4 [&>h3]:mb-4
    [&>blockquote]:mb-4 [&>pre]:mb-4
    space-y-0
    `,
}

export default function Paragraph({content}) {
    return (
        <p className={ParagraphStyle.Paragraph}>{content}</p>
    )
}