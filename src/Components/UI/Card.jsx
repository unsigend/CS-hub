/**
 * @author: Qiu Yixiang
 * @date: 2025-07-03
 * @description: Card Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";

// Style for the Card component
const CardStyle = {
    Card: `
    w-[95%] max-w-6xl
    bg-gradient-to-br from-blue-50 to-white
    rounded-xl sm:rounded-2xl border border-gray-200
    p-4 sm:p-6 md:p-8 lg:p-12
    shadow-lg hover:shadow-xl
    transition-all duration-300
    mx-auto
    `,
}

export default function Card({content}) {
    return (
        <div className={CardStyle.Card}>
            {content}
        </div>
    )
}