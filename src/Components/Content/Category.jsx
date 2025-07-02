/**
 * @author: Qiu Yixiang
 * @date: 2025-06-25
 * @description: Category Component for the CS-hub project
 */

// Import for the useState
import { useState } from "react";
import { Link } from "react-router-dom";

// Import for the style
import "@/style/style.css";

// Import for the icons from lucide-react
import { ArrowRight, ArrowDown } from "lucide-react";

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
    text-base w-[calc(100%-1rem)]
    ml-4
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
    `,
    CategoryContainer: `
    flex flex-col
    w-full
    `,
}

/**
 * @description: Category Component for the CS-hub project
 * @usage: Category will render the category and its subcategories recursively
 * @note: Category will be rendered as a card with a title and an arrow
 * @returns: Category Component
 */
export default function Category({category}) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleCategory = () => {
        setIsOpen(!isOpen);
    }

    const renderCategory = (category) => {
        const hasSubCategory = category.subCategories && category.subCategories.length > 0;
        return (
            <div className={CategoryStyle.CategoryContainer} key={category.ID + "-category"}>
                {/* Main Category */}
                <div className={CategoryStyle.Category} key={category.ID} onClick={toggleCategory}>
                    <h2>{category.name}</h2>
                    {isOpen ? <ArrowRight size={20} className={CategoryStyle.Arrow}/> 
                            : <ArrowDown size={20} className={CategoryStyle.Arrow}/>}
                </div>

                {/* Sub Category */}
                { hasSubCategory && isOpen && (
                    category.subCategories.map((subCategory) => (
                        <Link to={subCategory.url} key={subCategory.ID}>
                            <div className={CategoryStyle.SubCategory}>
                                <h2>{subCategory.name}</h2>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        )
    }

    return (
        renderCategory(category)
    )
}