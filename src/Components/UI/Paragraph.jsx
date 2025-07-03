/**
 * @author: Qiu Yixiang
 * @date: 2025-07-03
 * @description: Paragraph Component for the CS-hub project
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