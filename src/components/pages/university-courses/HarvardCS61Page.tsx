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
import { ReferenceAligned } from "@/components/ui/Reference";
import UnorderedList from "@/components/ui/UnorderedList";
import { LinkInner } from "@/components/ui/Link";

// Import for the data
import { UniversityCoursesPath } from "@/data/content/category/categories";

const HarvardCS61Page = (): React.ReactNode => {
  return (
    <CourseCard
      courseName="Harvard CS 61: Systems Programming and Machine Organization"
      courseUrl="https://cs61.seas.harvard.edu/site/2024/#gsc.tab=0"
      from="Harvard University"
      prerequisites="CS 50, CS 51"
      programmingLanguage="C, C++, x86-64 Assembly"
    >
      <div>
        <SubTitle level={3}>About the Course</SubTitle>
        <Paragraph>
          Harvard CS 61 is an introduction to the fundamentals of computer
          systems programming. Topics include <strong>C</strong>,{" "}
          <strong>C++</strong>, and <strong>x86-64</strong> assembly language
          programming, performance analysis and improvement strategies, memory
          management, caching, concurrency, threads, and synchronization.
        </Paragraph>

        <Paragraph>
          The problem sets are quite interesting each one of them are a program
          enhance a specific concept.
        </Paragraph>

        <UnorderedList>
          <li>Problem Set 1: Memory Debugging Allocator</li>
          <li>Problem Set 2: Binary Bomb</li>
          <li>Problem Set 3: WeensyOS implement some part of the kernel</li>
          <li>Problem Set 4: Implement a Stdio Library</li>
          <li>Problem Set 5: Implement a simple shell</li>
          <li>
            Problem Set 6: Flockchain for synchronization for buffered I/O
          </li>
        </UnorderedList>

        <Paragraph>
          This course has similar content with
          <LinkInner to={`${UniversityCoursesPath}/computer-system/cmu-15-213`}>
            CMU 15-213
          </LinkInner>{" "}
          can be learned before as a prerequisite. Or learn together with.
        </Paragraph>
      </div>

      <SubTitle level={3}>Resources</SubTitle>
      <ReferenceAligned
        name="Harvard CS 61"
        url="https://cs61.seas.harvard.edu/site/2024/#gsc.tab=0"
      >
        Harvard CS 61
      </ReferenceAligned>
      <ReferenceAligned name="Textbook" url="https://csapp.cs.cmu.edu/">
        CSAPP 2nd Edition
      </ReferenceAligned>
    </CourseCard>
  );
};

export default HarvardCS61Page;
