/**
 * @author: Qiu Yixiang
 * @date: 2025-06-29
 * @description: Note Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";

// Import for the Title component
import Title from "./Title";

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
    NoteContent: `
    text-gray-700 leading-relaxed
    text-base sm:text-lg
    [&>p]:mb-4 [&>p:last-child]:mb-0
    [&>ul]:mb-4 [&>ol]:mb-4
    [&>h1]:mb-4 [&>h2]:mb-4 [&>h3]:mb-4
    [&>blockquote]:mb-4 [&>pre]:mb-4
    space-y-0
    `,
}

/**
 * @description: Note Component for the CS-hub project
 * @param {string} title - The title of the note
 * @param {React.ReactNode} content - The content of the note
 * @returns {React.ReactNode} - The note component
 */
export default function Note({ title, content }) {
    return (
        <div className={NoteStyle.Note}>
            <Title title={title} />
            <div className={NoteStyle.NoteContent}>
                {content}
            </div>
        </div>
    )
}