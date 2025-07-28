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

// Import for the components
import CourseCard from "@/components/ui/CourseCard";
import Paragraph from "@/components/ui/Paragraph";
import { SubTitle } from "@/components/ui/Title";
import { LinkAligned } from "@/components/ui/Link";

// Import for images
import FSO_IMAGE from "/images/fullstackopen.svg";

// Style for the HelsinkiFSOPage component
const HelsinkiFSOPage = (): React.ReactNode => {
    return (
        <CourseCard
            courseName="Helsinki: Full Stack Open"
            courseUrl="https://fullstackopen.com/en/"
            from="Helsinki University"
            prerequisites="Basic knowledge of programming"
            programmingLanguage="JavaScript, TypeScript"
        >
            <div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "10px",
                    }}
                >
                    <img
                        src={FSO_IMAGE}
                        alt="Full Stack Open"
                        width={100}
                        height={100}
                    />
                </div>
                <SubTitle level={2}>About the Course</SubTitle>
                <Paragraph>
                    Full Stack Open from the University of Helsinki is a course
                    that teaches you how to build web applications using modern
                    technologies mainly using JavaScript.
                </Paragraph>
                <Paragraph>
                    The course is divided into 13 parts, each part is a specific
                    topics that you will learn. The structure of the course from
                    front-end framework like React, back-end framework like
                    Node.js Express.js and database like MongoDB, GraphQL,
                    testing framework and authentication like JWT. There are
                    also some optional parts that you can choose to learn about
                    TypeScript, React Native, and CI/CD.
                </Paragraph>

                <Paragraph>
                    This course also provide a certificate of completion and
                    credits for university.
                </Paragraph>

                <SubTitle level={2}>Resources</SubTitle>
                <LinkAligned
                    name="Course Link"
                    href="https://fullstackopen.com/en/"
                >
                    Full Stack Open
                </LinkAligned>
                <LinkAligned
                    name="Submission System"
                    href="https://studies.cs.helsinki.fi/stats/courses/fullstackopen"
                >
                    Submission
                </LinkAligned>
            </div>
        </CourseCard>
    );
};

export default HelsinkiFSOPage;
