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
import { LinkInner } from "@/components/ui/Link";

// Import for the data
import { UniversityCoursesPath } from "@/data/content/category/categories";

// Import for images
import CSAPP_IMAGE from "/images/CSAPP.jpg";

const CMU15213Page = (): React.ReactNode => {
    return (
        <CourseCard
            courseName="CMU 15-213: Introduction to Computer Systems"
            courseUrl="https://www.cs.cmu.edu/~213/index.html"
            from="Carnegie Mellon University"
            prerequisites="CMU 15-122"
            programmingLanguage="C, x86-64 Assembly"
        >
            <div>
                <SubTitle level={2}>About the Course</SubTitle>
                <Paragraph>
                    CMU 15-213 is one of Carnegie Mellon University's most
                    respected and challenging computer science courses. It
                    provides a comprehensive introduction to computer systems
                    from a programmer's perspective, covering the critical gap
                    between high-level programming and underlying hardware.
                </Paragraph>

                <Paragraph>
                    The course takes a bottom-up approach, starting from bit
                    manipulation and progressing through x86-64 assembly, memory
                    systems, linking, networking, and concurrent programming.
                </Paragraph>

                <div className="mb-6">
                    <img
                        src={CSAPP_IMAGE}
                        alt="CSAPP"
                        className="mx-auto block w-48 sm:w-56 h-auto rounded-lg shadow-lg"
                    />
                </div>

                <Paragraph>
                    The textbook of this course widely regarded as the
                    definitive resource for understanding computer systems and
                    often referred to as the "bible" of systems programming:{" "}
                    <strong>CSAPP</strong>.
                </Paragraph>

                <Paragraph>
                    While this course has similar content with{" "}
                    <LinkInner
                        to={`${UniversityCoursesPath}/computer-system/harvard-cs-61`}
                    >
                        Harvard CS 61
                    </LinkInner>
                    , it is generally more intensive and detailed in its
                    coverage.
                </Paragraph>
            </div>
        </CourseCard>
    );
};

export default CMU15213Page;
