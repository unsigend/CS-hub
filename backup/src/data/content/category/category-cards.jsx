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