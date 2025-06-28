/**
 * @author: Qiu Yixiang
 * @date: 2025-06-28
 * @description: Category Card Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";

// Style for the CategoryCard
const CategoryCardStyle = {
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

export default function CategoryCard({title, description, icon}) {
    return (
        <div className={CategoryCardStyle.CategoryCard}>
            
            {/* Icon */}
            <div className={CategoryCardStyle.IconContainer}>
                <div className={CategoryCardStyle.Icon}>
                    {icon}
                </div>
            </div>
            
            {/* Title */}
            <h2 className={CategoryCardStyle.Title}>
                {title}
            </h2>
            
            {/* Introduction paragraph */}
            <p className={CategoryCardStyle.Description}>
                {description}
            </p>
        </div>
    );
}

