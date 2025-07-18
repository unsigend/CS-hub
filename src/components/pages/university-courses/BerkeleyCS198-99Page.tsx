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
import { ReferenceAligned } from "@/components/ui/Reference";
import { SubTitle } from "@/components/ui/Title";

// Import for images
import BERKELEY_CS198_99_IMAGE from "/images/BerkeleyCS198-99.png";

const BerkeleyCS19899Page = (): React.ReactNode => {
  return (
    <CourseCard
      courseName="Berkeley CS 198-99:  Full Stack DeCal"
      courseUrl="https://fullstackdecal.com/"
      from="Berkeley University"
      prerequisites="No prerequisites"
      programmingLanguage="HTML, CSS, JavaScript, TypeScript, Python"
    >
      <div className="flex flex-row gap-4 justify-between items-center">
        <div>
          <SubTitle level={3}>About the course</SubTitle>
          <Paragraph>
            Berkeley CS 198-99 is a course that introduce the basics of web
            development, it is a course for everyone and no prerequisites
            needed.
          </Paragraph>
          <Paragraph>
            The course covers a lot topics in web development, from HTML, CSS,
            JavaScript, TypeScript, Python, and a lot frameworks like React,
            Next.js, Django, Redux, and a lot more.
          </Paragraph>
          <Paragraph>
            However the course is an introduction course, it is not a deep
            course, which means most of the concepts are not covered in depth.
            Can be consider as a introduction course to modern web development.
          </Paragraph>
        </div>
        {/* image */}
        <div className="flex-shrink-0">
          <img
            src={BERKELEY_CS198_99_IMAGE}
            alt="Berkeley CS 198-99"
            width={100}
            height={100}
          />
        </div>
      </div>

      <SubTitle level={3}>Resources</SubTitle>
      <ReferenceAligned
        name="Full Stack DeCal"
        url="https://fullstackdecal.com/"
      >
        2025
      </ReferenceAligned>
      <ReferenceAligned
        name="Full Stack DeCal Notes"
        url="https://fullstackdecal.com/docs/Overview"
      >
        2025 notes
      </ReferenceAligned>
    </CourseCard>
  );
};

export default BerkeleyCS19899Page;
