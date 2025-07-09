/**
 * @author: Qiu Yixiang
 * @date: 2025-06-28
 * @description: Category Card Data for the CS-hub project
 */

// Import icons from lucide-react
import { Map, BookOpen, Folder, Code } from 'lucide-react';

const iconStyle = {
    icon: `
    w-6 h-6 text-white
    `,
}
const CategoryCardData = [
    {
        title: "Road Map",
        description: "A structured path to learn a specific field in Computer Science",
        icon: <Map className={iconStyle.icon} />,
    },
    {
        title: "Courses",
        description: "A collection of courses from top universities and institutions",
        icon: <BookOpen className={iconStyle.icon} />,
    },
    {
        title: "Resources",
        description: "A collection of resources for learning Computer Science",
        icon: <Folder className={iconStyle.icon} />,
    },
    {
        title: "Projects",
        description: "Practical-based projects to build your skills",
        icon: <Code className={iconStyle.icon} />,
    },
]

export default CategoryCardData;