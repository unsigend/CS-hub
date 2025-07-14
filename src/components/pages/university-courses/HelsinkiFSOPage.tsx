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
 * @description: Helsinki FSO Page
 */

// Import for the CourseCard component
import CourseCard from "@/components/ui/CourseCard";
import Paragraph from "@/components/ui/Paragraph";
import {SubTitle} from "@/components/ui/Title";
import {ReferenceAligned} from "@/components/ui/Reference";
import fullstackopen from "@/assets/images/fullstackopen.svg";


// Style for the HelsinkiFSOPage component
export default function HelsinkiFSOPage() {
    return (
        <CourseCard
            courseName="Helsinki Full Stack Open"
            courseUrl="https://fullstackopen.com/en/"
            from="Helsinki University"
            prerequisites="Basic knowledge of programming"
            programmingLanguage="JavaScript, TypeScript" >
                <div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px"}}>
                    <img src={fullstackopen} alt="Full Stack Open" width={100} height={100} />
                </div>
                <SubTitle title="About the course" level={3}/>
                <Paragraph>
                    Full Stack Open from the University of Helsinki is a course that teaches you how to build
                    web applications using modern technologies mainly using JavaScript.
                </Paragraph>
                <Paragraph>
                    The course is divided into 13 parts, each part is a specific topics that you will learn. 
                    The structure of the course from front-end framework like React, back-end framework like Node.js Express.js 
                    and database like MongoDB, GraphQL, and testing framework.
                    There are also some optional parts that you can choose to learn about TypeScript, React Native, and CI/CD.
                </Paragraph>
                
                <SubTitle title="Resources" level={3}/>
                <ReferenceAligned name="Course Link" url="https://fullstackopen.com/en/" content="Full Stack Open" />
                <ReferenceAligned name="Submission System" url="https://studies.cs.helsinki.fi/stats/courses/fullstackopen" content="Submission" />
                </div>
        </CourseCard>
    )
}