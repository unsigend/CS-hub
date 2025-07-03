/**
 * @author: Qiu Yixiang
 * @date: 2025-07-03
 * @description: Title Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";

// Style for the Title component
const TitleStyle = {
    Title: `
    text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6
    relative inline-block
    after:absolute after:bottom-0 after:left-0
    after:w-8 sm:after:w-12 after:h-1 after:bg-black after:rounded-full
    `,
}

export default function Title({title}) {
    return (
        <h1 className={TitleStyle.Title}>{title}</h1>
    )
}