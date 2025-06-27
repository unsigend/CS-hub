/**
 * @author: Qiu Yixiang
 * @date: 2025-06-25
 * @description: Category Data for the CS-hub project
 */

const CategoryList = [
    {
        name: "Road Map",
        ID: "road-map",
        subCategories: [
            {
                name: "Full Stack",
                ID: "full-stack",
            },
            {
                name: "Low Level",
                ID: "low-level",
            },
            {
                name: "AI",
                ID: "ai",
            },
            {
                name: "Block Chain",
                ID: "block-chain",
            }
        ]
    },
    {
        name: "University Course",
        ID: "university-course",
        subCategories: [
            {
                name: "MIT",
                ID: "mit",
            },
            {
                name: "Stanford",
                ID: "stanford",
            },
            {
                name: "Harvard",
                ID: "harvard",
            },
        ]
    },
    {
        name: "Resources",
        ID: "resources",
        subCategories: [
            {
                name: "Books",
                ID: "books",
            },
            {
                name: "Projects",
                ID: "projects",
            },
        ]
    },
]


export default CategoryList;