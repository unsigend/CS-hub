/**
 * @author: Qiu Yixiang
 * @date: 2025-06-25
 * @description: Category Data for the CS-hub project
 */

import FullStackPage from "../Components/Pages/FullStackPage";
import LowLevelPage from "../Components/Pages/LowLevelPage";

const CategoryList = [
    {
        name: "Road Map",
        ID: "road-map",
        url: "road-map",
        subCategories: [
            {
                name: "Full Stack",
                ID: "full-stack",
                page: null,
                url: "full-stack",
            },
            {
                name: "Low Level",
                ID: "low-level",
                page: null,
                url: "low-level",
            },
            {
                name: "AI",
                ID: "ai",
                page: null,
                url: "ai",
            },
            {
                name: "Block Chain",
                ID: "block-chain",
                page: null,
                url: "block-chain",
            }
        ]
    },
    {
        name: "University Course",
        ID: "university-course",
        url: "university-course",
        subCategories: [
            {
                name: "MIT",
                ID: "mit",
                page: null,
                url: "mit",
            },
            {
                name: "Stanford",
                ID: "stanford",
                page: null,
                url: "stanford",
            },
            {
                name: "Harvard",
                ID: "harvard",
                page: null,
                url: "harvard",
            },
        ]
    },
    {
        name: "Resources",
        ID: "resources",
        page: null,
        url: null,
        subCategories: [
            {
                name: "Books",
                ID: "books",
                page: null,
                url: "books",
            },
            {
                name: "Projects",
                ID: "projects",
                page: null,
                url: "projects",
            },
        ]
    },
]


export default CategoryList;