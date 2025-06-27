/**
 * @author: Qiu Yixiang
 * @date: 2025-06-25
 * @description: Category Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";

// Import for the icons from lucide-react
import { ArrowDown, ArrowUp } from "lucide-react";

/**
 * @description: Style for the Category component
 * @style: Category is built based on the tailwind css
 *         Using similar card theme to Logo and Navigation
 *         Each category is a clickable card with hover effects
 */
const CategoryStyle = {
    Category: `
    flex flex-row
    justify-between items-center
    text-lg w-full
    bg-white border border-gray-100
    rounded-xl px-6 py-3
    shadow-sm hover:shadow-lg
    transition-all duration-500 ease-out
    cursor-pointer group
    hover:bg-gray-50 hover:border-gray-200
    hover:-translate-y-1 hover:scale-[1.02]
    active:scale-[0.98] active:shadow-sm
    backdrop-blur-sm
    `,
    SubCategory: `
    flex flex-row
    justify-between items-center
    text-base w-full
    ml-8 mr-2
    bg-gray-50 border border-gray-50
    rounded-lg px-4 py-3 mb-2
    shadow-sm hover:shadow-md
    transition-all duration-400 ease-out
    cursor-pointer group
    hover:bg-white hover:border-gray-200
    hover:translate-x-2 hover:scale-[1.01]
    active:scale-[0.99]
    text-gray-700 hover:text-black
    `,
    Arrow: `
    ml-4 text-gray-400 text-lg font-medium
    transition-all duration-500 ease-out
    cursor-pointer
    group-hover:text-black group-hover:scale-125 
    group-hover:translate-x-2 group-hover:rotate-12
    group-active:scale-110 group-active:rotate-0
    transform-gpu select-none
    drop-shadow-sm group-hover:drop-shadow-md
    `
}

export default function Category({ category, isSubCategory = false}) {
    if (isSubCategory) {
        return (
            <div className={CategoryStyle.SubCategory}>
                <h2>{category.name}</h2>
            </div>
        )
    }
    return (
        <div className={CategoryStyle.Category}>
            <h2>{category.name}</h2>
            <ArrowDown size={20} className={CategoryStyle.Arrow}/>
        </div>
    )
}