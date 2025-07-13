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
 * @description: Note component used as a note for the CS-hub project
 * with title and content
 */

/**
 * @description: Style for the Note component
 * @returns {React.ReactNode} - The note component
 */
const NoteStyle = {
    Note: `
    w-[90%] sm:w-[85%] md:w-[80%] max-w-4xl
    bg-gradient-to-br from-gray-50 to-white
    rounded-xl sm:rounded-2xl border border-gray-200
    p-4 sm:p-6 md:p-8 lg:p-12
    shadow-lg hover:shadow-xl
    transition-all duration-300
    mx-auto
    `,
    NoteTitle: `
    text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6
    relative inline-block
    after:absolute after:bottom-0 after:left-0
    after:w-8 sm:after:w-12 after:h-1 after:bg-black after:rounded-full
    `,
    NoteContent: `
    text-gray-700 leading-relaxed
    text-base sm:text-lg
    flex flex-col gap-4
    `,
}

/**
 * @description: Note Component for the CS-hub project
 * @param {string} title - The title of the note
 * @param {React.ReactNode} children - The content of the note
 * @returns {React.ReactNode} - The note component
 */
export default function Note({ title, children, ...props }) {
    return (
        <div className={NoteStyle.Note} {...props}>
            <h1 className={NoteStyle.NoteTitle}>{title}</h1>
            <div className={NoteStyle.NoteContent}>
                {children}
            </div>
        </div>
    )
} 