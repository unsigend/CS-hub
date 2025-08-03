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
import BooksPage from "@/components/pages/resources/BooksPage";

// reference pages
import FullStackReferencePage from "@/components/pages/resources/reference/FullStackPage";
import LowLevelReferencePage from "@/components/pages/resources/reference/LowLevelPage";

// university courses pages
import HelsinkiFSOPage from "@/components/pages/university-courses/HelsinkiFSOPage";
import HarvardCS50Page from "@/components/pages/university-courses/HarvardCS50Page";
import BerkeleyCS19899Page from "@/components/pages/university-courses/BerkeleyCS198-99Page";
import HarvardCS61Page from "@/components/pages/university-courses/HarvardCS61Page";
import CMU15213Page from "@/components/pages/university-courses/CMU15-213Page";
import WisconsinCS571Page from "@/components/pages/university-courses/WisconsinCS571Page";
import BerkeleyCS61CPage from "@/components/pages/university-courses/BerkeleyCS61CPage";
import BerkeleyCS61APage from "@/components/pages/university-courses/BerkeleyCS61APage";

// road map pages
import FullStackPage from "@/components/pages/roadmap/full-stack/FullStackPage";
import FrontendPage from "@/components/pages/roadmap/full-stack/FrontendPage";
import BackendPage from "@/components/pages/roadmap/full-stack/BackendPage";
import DataBasePage from "@/components/pages/roadmap/full-stack/DataBasePage";

// TypeScript interface for category objects
export interface CategoryType {
    name: string;
    ID: string;
    url: string | null;
    page?: React.ReactNode | null;
    subCategories?: CategoryType[] | null;
    hidden_sub_categories?: boolean;
}

// Path for the pages
// Base Path is the base path for the website : /CS-hub
// Make sure the consistency of the path is maintained

// path for road map
const RoadMapPath = `${global.BasePath}/road-map`;
const FullStackPath = `${RoadMapPath}/full-stack`;
const LowLevelPath = `${RoadMapPath}/low-level`;

// path for university courses
const UniversityCoursesPath = `${global.BasePath}/university-courses`;

// path for resources
const ResourcesPath = `${global.BasePath}/resources`;

export {
    RoadMapPath,
    UniversityCoursesPath,
    ResourcesPath,
    FullStackPath,
    LowLevelPath,
};

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
                page: <FullStackPage />,
                url: FullStackPath,
                hidden_sub_categories: true,
                subCategories: [
                    {
                        name: "Frontend",
                        ID: "frontend",
                        page: <FrontendPage />,
                        url: `${FullStackPath}/frontend`,
                        subCategories: null,
                    },
                    {
                        name: "Backend",
                        ID: "backend",
                        page: <BackendPage />,
                        url: `${FullStackPath}/backend`,
                        subCategories: null,
                    },
                    {
                        name: "Database",
                        ID: "database",
                        page: <DataBasePage />,
                        url: `${FullStackPath}/database`,
                        subCategories: null,
                    },
                ],
            },
            {
                name: "Low Level",
                ID: "low-level",
                page: null,
                url: LowLevelPath,
                subCategories: null,
            },
        ],
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
                        page: <HarvardCS61Page />,
                        url: `${UniversityCoursesPath}/computer-system/harvard-cs-61`,
                        subCategories: null,
                    },
                    {
                        name: "CMU 15-213",
                        ID: "cmu-15-213",
                        page: <CMU15213Page />,
                        url: `${UniversityCoursesPath}/computer-system/cmu-15-213`,
                        subCategories: null,
                    },
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
                        page: <BerkeleyCS61CPage />,
                        url: `${UniversityCoursesPath}/computer-architecture/berkeley-cs-61c`,
                        subCategories: null,
                    },
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
                    },
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
                    },
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
                    },
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
                        page: <HarvardCS50Page />,
                        url: `${UniversityCoursesPath}/introduction-to-computer-science/harvard-cs-50`,
                        subCategories: null,
                    },
                    {
                        name: "Berkeley CS 61A",
                        ID: "berkeley-cs-61a",
                        page: <BerkeleyCS61APage />,
                        url: `${UniversityCoursesPath}/introduction-to-computer-science/berkeley-cs-61a`,
                        subCategories: null,
                    },
                ],
            },
            {
                name: "Full Stack Development",
                ID: "full-stack-development",
                page: null,
                url: `${UniversityCoursesPath}/full-stack-development`,
                subCategories: [
                    {
                        name: "Helsinki FSO",
                        ID: "helsinki-fso",
                        page: <HelsinkiFSOPage />,
                        url: `${UniversityCoursesPath}/full-stack-development/helsinki-fso`,
                        subCategories: null,
                    },
                    {
                        name: "Berkeley CS 198-99",
                        ID: "berkeley-cs-198-99",
                        page: <BerkeleyCS19899Page />,
                        url: `${UniversityCoursesPath}/full-stack-development/berkeley-cs-198-99`,
                        subCategories: null,
                    },
                    {
                        name: "Wisconsin CS 571",
                        ID: "wisconsin-cs-571",
                        page: <WisconsinCS571Page />,
                        url: `${UniversityCoursesPath}/full-stack-development/wisconsin-cs-571`,
                        subCategories: null,
                    },
                ],
            },
        ],
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
                page: <BooksPage />,
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
                ],
            },
        ],
    },
];

export default CategoryList;
