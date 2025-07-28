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

// Import for the image
import CS_61C_IMAGE from "/images/BerkeleyCS61C.png";

const BerkeleyCS61CPage = (): React.ReactNode => {
    return (
        <CourseCard
            courseName="Berkeley CS 61C: Machine Structures"
            courseUrl="https://cs61c.org/su25/"
            from="University of California, Berkeley"
            prerequisites="Berkeley CS 61A, Berkeley CS 61B"
            programmingLanguage="C, RISC-V Assembly"
        >
            <div className="flex justify-center">
                <img
                    src={CS_61C_IMAGE}
                    alt="Berkeley CS 61C"
                    className="w-45 h-auto"
                />
            </div>
            <SubTitle level={2}>About the Course</SubTitle>
            <Paragraph>
                CS 61C explores how software translates to hardware execution,
                bridging the gap between high-level programming and physical
                computing systems. This course covers the complete pipeline from
                C code compilation to RISC-V assembly execution on processors.
            </Paragraph>
            <Paragraph>
                This course is a deep dive into the architecture of modern
                computers, including the design of the CPU, memory hierarchy,
                parallel computing, and I/O devices.
            </Paragraph>
            <Paragraph>
                This course is a required course for the Computer Science major
                at Berkeley. It is a very challenging course which is the last
                series of CS 61, but it is a very rewarding course.
            </Paragraph>
            <SubTitle level={2}>Resources</SubTitle>
            <LinkAligned href="https://cs61c.org/su25/" name="Berkeley CS 61C">
                2025 Summer
            </LinkAligned>
            <LinkAligned
                href="https://web.archive.org/web/20241219154359/https://cs61c.org/fa24/"
                name="Berkeley CS 61C"
            >
                2024 Fall
            </LinkAligned>
            <LinkAligned
                href="https://web.archive.org/web/20220120134001/https://inst.eecs.berkeley.edu/~cs61c/fa20/"
                name="Berkeley CS 61C"
            >
                2020 Fall
            </LinkAligned>
        </CourseCard>
    );
};

export default BerkeleyCS61CPage;
