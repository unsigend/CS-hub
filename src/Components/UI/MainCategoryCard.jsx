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
 * @description: MainCategoryCard component used as a card for the main page
 */

// Style for the CategoryCard
const MainCategoryCardStyle = {
    CategoryCard: `
    bg-white rounded-lg shadow-lg
    hover:shadow-2xl
    transition-all duration-300
    p-8 w-96
    transform hover:-translate-y-2
    `,
    IconContainer: `
    mb-6 flex justify-center
    `,
    Icon: `
    w-12 h-12 bg-black rounded-full flex items-center justify-center
    `,
    Title: `
    text-2xl font-bold text-center mb-4 text-black
    `,
    Description: `
    text-gray-600 text-center leading-relaxed mb-6
    `,
}

export default function MainCategoryCard({title, description, icon}) {
    return (
        <div className={MainCategoryCardStyle.CategoryCard}>
            
            {/* Icon */}
            <div className={MainCategoryCardStyle.IconContainer}>
                <div className={MainCategoryCardStyle.Icon}>
                    {icon}
                </div>
            </div>
            
            {/* Title */}
            <h2 className={MainCategoryCardStyle.Title}>
                {title}
            </h2>
            
            {/* Introduction paragraph */}
            <p className={MainCategoryCardStyle.Description}>
                {description}
            </p>
        </div>
    );
}

