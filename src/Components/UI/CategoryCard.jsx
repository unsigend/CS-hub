/**
 * @author: Qiu Yixiang
 * @date: 2025-06-28
 * @description: Category Card Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";
import globalStyle from "@/style/style";

// Style for the CategoryCard
const CategoryCardStyle = {
    CategoryCard: `
    bg-white rounded-lg shadow-lg 
    hover:shadow-2xl 
    transition-all duration-300 
    p-8 w-96 
    transform hover:-translate-y-2
    `,
}

export default function CategoryCard({title, description, icon}) {
    return (
        <div className={CategoryCardStyle.CategoryCard}>
            
            {/* Icon */}
            <div className="mb-6 flex justify-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    {icon}
                </div>
            </div>
            
            {/* Title */}
            <h2 className="text-2xl font-bold text-center mb-4 text-black">
                {title}
            </h2>
            
            {/* Introduction paragraph */}
            <p className="text-gray-600 text-center leading-relaxed mb-6">
                {description}
            </p>
        </div>
    );
}

