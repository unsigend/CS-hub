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

// Import for the useState
import { useState } from "react";
import { Link } from "react-router-dom";

// Import for the icons from lucide-react
import { ArrowRight, ArrowDown } from "lucide-react";

// Import for the closeSidebar function
import { closeSidebar } from "@/components/main/SideBar";

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
    text-base w-full
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
    bg-gray-50 border border-gray-50
    rounded-lg px-5 py-3 mb-2
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
    transition-all duration-300 ease-out
    cursor-pointer
    group-hover:text-black group-hover:scale-110
    group-hover:translate-x-1
    transform-gpu select-none
    flex-shrink-0
    `,
    CategoryContainer: `
    flex flex-col
    w-full
    `,
}

// Margin factor for the subcategories - reduced for better width utilization
const MARGIN_FACTOR = 1.5;

/**
 * @description: Category Component for the CS-hub project
 * @usage: Category will render the category and its subcategories recursively
 * @note: Category will be rendered as a card with text and an arrow
 * @returns: Category Component
 */
export default function Category({category, depth = 0}) {
    const [isOpen, setIsOpen] = useState(false);

    const ClickCategory = () => {
        setIsOpen(!isOpen);
    }

    // check if the category has subcategories
    const hasSubCategory = category.subCategories && category.subCategories.length > 0;

    // Calculate dynamic margin based on depth
    const dynamicMarginStyle = depth > 0 ? { marginLeft: `${depth * MARGIN_FACTOR * 0.5}rem` } : {};
    // Add spacing between subcategories based on depth
    const spacingStyle = depth > 0 ? { marginBottom: '0.75rem' } : {};

    // if the category has subcategories, render the category with subcategories
    if (hasSubCategory){
        return (
            <div className={CategoryStyle.CategoryContainer} style={spacingStyle} key={category.ID + "-category"}>
                <div className={CategoryStyle.Category} style={dynamicMarginStyle} key={category.ID} onClick={ClickCategory}>
                    <h2>{category.name}</h2>
                    {!isOpen ? <ArrowRight size={20} className={CategoryStyle.Arrow}/> 
                             : <ArrowDown size={20} className={CategoryStyle.Arrow}/>}
                </div>
                {isOpen && (
                    <div style={{ marginTop: '0.5rem' }}>
                        {category.subCategories.map((subcategory) => 
                        <Category key={subcategory.ID} category={subcategory} depth={depth + 1} />)}
                    </div>
                )}
            </div>
        )
    }

    // if the category doesn't have subcategories, render the category directly with subcategories style
    // no arrow
    return (
        <div className={CategoryStyle.CategoryContainer} style={spacingStyle} key={category.ID + "-category"}>
            <Link to={category.url} key={category.ID} onClick={closeSidebar}>
                <div className={CategoryStyle.SubCategory} style={dynamicMarginStyle}>
                    <h2>{category.name}</h2>
                </div>
            </Link>
        </div>
    )
}