/**
 * @author: Qiu Yixiang
 * @date: 2025-06-25
 * @description: Category Data for the CS-hub project
 */

import FullStackPage from "../Components/Pages/FullStackPage";
import LowLevelPage from "../Components/Pages/LowLevelPage";

const BASE_URL = "/CS-hub";
const ROAD_MAP_URL = `${BASE_URL}/road-map`;

const CategoryList = [
    {
        name: "Road Map",
        ID: "road-map",
        url: ROAD_MAP_URL,
        subCategories: [
            {
                name: "Full Stack",
                ID: "full-stack",
                page: <FullStackPage />,
                url: `${ROAD_MAP_URL}/full-stack`,
            },
            {
                name: "Low Level",
                ID: "low-level",
                page: <LowLevelPage />,
                url: `${ROAD_MAP_URL}/low-level`,
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
        page: null,
        url: null,
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