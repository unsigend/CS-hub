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

// Import for the CourseCard component
import CourseCard from "@/components/ui/CourseCard";
import Paragraph from "@/components/ui/Paragraph";
import { SubTitle } from "@/components/ui/Title";
import { ReferenceAligned } from "@/components/ui/Reference";

const HarvardCS50Page = (): React.ReactNode => {
  return (
    <CourseCard
      courseName="Harvard CS 50 Introduction to Computer Science"
      courseUrl="https://cs50.harvard.edu/x/"
      from="Harvard University"
      prerequisites="No prerequisites"
      programmingLanguage="C, Python, SQL, JavaScript, HTML, CSS"
    >
      <Paragraph>
        Harvard CS 50x is an introductory course to computer science. From C
        programming language to basic data structure, to Python programming
        language. In the end introduce to the basic of SQL and web development.
      </Paragraph>
      <Paragraph>
        This course is a series course: Harvard CS 50x, Harvard CS 50P about
        Python, Harvard CS 50AI about AI. And all of them provided a
        auto-grading system in github. After explore the CS 50x you can continue
        to explore the topics you like.
      </Paragraph>
      <SubTitle level={3}>Harvard CS 50 Series</SubTitle>
      <ReferenceAligned
        name="Harvard CS 50x"
        url="https://cs50.harvard.edu/x/2025/"
      >
        Harvard CS 50x 2025 Link
      </ReferenceAligned>
      <ReferenceAligned
        name="Harvard CS 50P"
        url="https://cs50.harvard.edu/python/"
      >
        Harvard CS 50P Link
      </ReferenceAligned>
      <ReferenceAligned
        name="Harvard CS 50AI"
        url="https://cs50.harvard.edu/ai/"
      >
        Harvard CS 50AI Link
      </ReferenceAligned>
    </CourseCard>
  );
};

export default HarvardCS50Page;
