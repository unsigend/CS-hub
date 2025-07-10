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

// Import the global data
import global from "@/data/config/config";

// Import the pages
import FullStackReferencePage from "@/components/pages/resources/reference/FullStackPage";
import LowLevelReferencePage from "@/components/pages/resources/reference/LowLevelPage";

// Path for the pages
// Base Path is the base path for the website : /CS-hub
// Make sure the consistency of the path is maintained
const RoadMapPath = `${global.BasePath}/road-map`;
const UniversityCoursesPath = `${global.BasePath}/university-courses`;
const ResourcesPath = `${global.BasePath}/resources`;

const CategoryList = [
    {
        // Road Map
        name: "Road Map",
        ID: "road-map",
        url: RoadMapPath,
        subCategories: [
            {
                name: "Full Stack",
                ID: "full-stack",
                page: null,
                url: `${RoadMapPath}/full-stack`,
                subCategories: null,
            },
            {
                name: "Low Level",
                ID: "low-level",
                page: null,
                url: `${RoadMapPath}/low-level`,
                subCategories: null,
            },
            {
                name: "Artificial Intelligence",
                ID: "artificial-intelligence",
                page: null,
                url: `${RoadMapPath}/artificial-intelligence`,
                subCategories: null,
            },
            {
                name: "Block Chain",
                ID: "block-chain",
                page: null,
                url: `${RoadMapPath}/block-chain`,
                subCategories: null,
            }
        ]
    },
    {
        // University Courses
        name: "University Courses",
        ID: "university-courses",
        url: UniversityCoursesPath,
        subCategories: [
            {
                name: "Computer System",
                ID: "computer-system",
                page: null,
                url: `${UniversityCoursesPath}/computer-system`,
                subCategories: [
                    {
                        name: "Harvard CS 61",
                        ID: "harvard-cs-61",
                        page: null,
                        url: `${UniversityCoursesPath}/computer-system/harvard-cs-61`,
                        subCategories: null,
                    }
                ],
            },
            {
                name: "Computer Architecture",
                ID: "computer-architecture",
                page: null,
                url: `${UniversityCoursesPath}/computer-architecture`,
                subCategories: [
                    {
                        name: "Berkeley CS 61C",
                        ID: "berkeley-cs-61c",
                        page: null,
                        url: `${UniversityCoursesPath}/computer-architecture/berkeley-cs-61c`,
                        subCategories: null,
                    }
                ],
            },
            {
                name: "Computer Network",
                ID: "computer-network",
                page: null,
                url: `${UniversityCoursesPath}/computer-network`,
                subCategories: [
                    {
                        name: "Stanford CS 144",
                        ID: "stanford-cs-144",
                        page: null,
                        url: `${UniversityCoursesPath}/computer-network/stanford-cs-144`,
                        subCategories: null,
                    }
                ],
            },
            {
                name: "Operating System",
                ID: "operating-system",
                page: null,
                url: `${UniversityCoursesPath}/operating-system`,
                subCategories: [
                    {
                        name: "Berkeley CS 162",
                        ID: "berkeley-cs-162",
                        page: null,
                        url: `${UniversityCoursesPath}/operating-system/berkeley-cs-162`,
                        subCategories: null,
                    }
                ],
            },
            {
                name: "Data Structure and Algorithm",
                ID: "data-structure-and-algorithm",
                page: null,
                url: `${UniversityCoursesPath}/data-structure-and-algorithm`,
                subCategories: [
                    {
                        name: "Berkeley CS 61B",
                        ID: "berkeley-cs-61b",
                        page: null,
                        url: `${UniversityCoursesPath}/data-structure-and-algorithm/berkeley-cs-61b`,
                        subCategories: null,
                    }
                ],
            },
            {
                name: "DataBase",
                ID: "data-base",
                page: null,
                url: `${UniversityCoursesPath}/data-base`,
                subCategories: [
                    {
                        name: "CMU 15-445",
                        ID: "cmu-15-445",
                        page: null,
                        url: `${UniversityCoursesPath}/data-base/cmu-15-445`,
                        subCategories: null,
                    },
                ],
            },
            {
                name: "Introduction to Computer Science",
                ID: "introduction-to-computer-science",
                page: null,
                url: `${UniversityCoursesPath}/introduction-to-computer-science`,
                subCategories: [
                    {
                        name: "Harvard CS 50",
                        ID: "harvard-cs-50",
                        page: null,
                        url: `${UniversityCoursesPath}/introduction-to-computer-science/harvard-cs-50`,
                        subCategories: null,
                    }
                ],
            },
        ]
    },
    {
        // Resources
        name: "Resources",
        ID: "resources",
        page: null,
        url: null,
        subCategories: [
            {
                name: "Books",
                ID: "books",
                page: null,
                url: `${ResourcesPath}/books`,
            },
            {
                name: "Projects",
                ID: "projects",
                page: null,
                url: `${ResourcesPath}/projects`,
            },
            {
                name: "Reference",
                ID: "reference",
                page: null,
                url: `${ResourcesPath}/reference`,
                subCategories: [
                    {
                        name: "Full Stack",
                        ID: "full-stack",
                        page: <FullStackReferencePage />,
                        url: `${ResourcesPath}/reference/full-stack`,
                        subCategories: null,
                    },
                    {
                        name: "Low Level",
                        ID: "low-level",
                        page: <LowLevelReferencePage />,
                        url: `${ResourcesPath}/reference/low-level`,
                        subCategories: null,
                    },
                ]
            }
        ]
    },
]


export default CategoryList;