/**
 * @author: Qiu Yixiang
 * @date: 2025-07-03
 * @description: Reference Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";

// Style for the Reference component
const ReferenceStyle = {
    Reference: `
    ml-2 text-black font-semibold
    hover:text-gray-700 transition-colors duration-200
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