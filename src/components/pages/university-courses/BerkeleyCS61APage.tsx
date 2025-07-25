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
import { LinkAligned, LinkInner } from "@/components/ui/Link";
import UnorderedList from "@/components/ui/UnorderedList";
import { UniversityCoursesPath } from "@/data/content/category/categories";

const BerkeleyCS61APage = (): React.ReactNode => {
  return (
    <CourseCard
      courseName="Berkeley CS 61A: Structure and Interpretation of Computer Programs"
      courseUrl="https://cs61a.org/"
      from="University of California, Berkeley"
      prerequisites="None"
      programmingLanguage="Python, Scheme, SQL"
    >
      <SubTitle level={2}>About the Course</SubTitle>
      <Paragraph>
        Berkeley CS 61A is a course that teaches the fundamentals of computer
        science, focusing on the structure and interpretation of computer
        programs. Which is the first course in the Berkeley CS 61 series.
      </Paragraph>

      <Paragraph>
        The project of this course is quite interesting, you will build
        different games and even a programming language.
      </Paragraph>
      <UnorderedList>
        <li>Hog: A hog game with rolling a dice</li>
        <li>Cat: A typing game</li>
        <li>Ant: A tower defense game</li>
        <li>Scheme: A interpreter for functional programming language</li>
      </UnorderedList>
      <Paragraph>
        This course has an open-source auto-grader, which means you can get
        feedback on your code and improve your skills. This course is not only
        an introduction to Python programming language also introduce
        construction and interpretation of computer programs.
      </Paragraph>
      <Paragraph>
        <strong>
          {" "}
          This course is a good start for your journey in Computer Science.
        </strong>
      </Paragraph>
      <SubTitle level={2}>Resources</SubTitle>
      <UnorderedList>
        <li>
          <LinkAligned href="https://cs61a.org/" name="Berkeley CS 61A">
            2025 Summer
          </LinkAligned>
        </li>
        <li>
          <LinkAligned
            href="https://www.composingprograms.com/"
            name="Berkeley CS 61A"
          >
            TextBook
          </LinkAligned>
        </li>
      </UnorderedList>

      <SubTitle level={2}>Berkeley CS 61A Series</SubTitle>
      <UnorderedList>
        <li>
          <LinkInner
            to={`${UniversityCoursesPath}/data-structure-and-algorithm/berkeley-cs-61b`}
          >
            Berkeley CS 61B: Data Structures
          </LinkInner>
        </li>
        <li>
          <LinkInner
            to={`${UniversityCoursesPath}/computer-architecture/berkeley-cs-61c`}
          >
            Berkeley CS 61C: Machine Structures
          </LinkInner>
        </li>
      </UnorderedList>
    </CourseCard>
  );
};

export default BerkeleyCS61APage;
