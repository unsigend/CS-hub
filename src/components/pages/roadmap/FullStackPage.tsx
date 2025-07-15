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

// Import for the Card component
import Card from "@/components/ui/Card";
import { Title, SubTitle } from "@/components/ui/Title";
import Note from "@/components/ui/Note";
import Paragraph from "@/components/ui/Paragraph";
import { ReferenceAligned } from "@/components/ui/Reference";
import { LinkInner } from "@/components/ui/Link";
import UnorderedList from "@/components/ui/UnorderedList";

// Import for the University Courses Path
import { UniversityCoursesPath } from "@/data/content/category/categories";

// Import for the Image
import FullStackImage from "@/assets/images/fullstackopen.svg";

const FullStackPage = (): React.ReactNode => {
  return (
    <div className="flex flex-col gap-10">
      <Note title="Full Stack Development Road Map">
        <div className="flex flex-row gap-8">
          <div className="flex flex-col">
            <Paragraph>
              This page is a road map for full stack development. This is a
              skill and practice focused road map. If you want to learn more
              concept based way can use the university courses for full stack
              development.
            </Paragraph>
            <SubTitle level={3}>Reference</SubTitle>
            <ReferenceAligned
              name="Full Stack Road Map"
              url="https://roadmap.sh/full-stack"
            >
              Roadmap.sh Full Stack Road Map
            </ReferenceAligned>
            <ReferenceAligned
              name="Backend Road Map"
              url="https://roadmap.sh/backend"
            >
              Roadmap.sh Backend Road Map
            </ReferenceAligned>
            <ReferenceAligned
              name="Frontend Road Map"
              url="https://roadmap.sh/frontend"
            >
              Roadmap.sh Frontend Road Map
            </ReferenceAligned>

            <SubTitle level={3}>Note</SubTitle>
            <Paragraph>
              This road map has some personal bias and may not suitable for
              everyone. Consider this as a road map reference. If you have any
              suggestion or feedback, please feel free to contact me.
            </Paragraph>
            <Paragraph>
              This page is a work in progress. I will update it as I learn more
              about full stack development.
            </Paragraph>

            <SubTitle level={3}>Structure</SubTitle>
            <Paragraph>
              This road map is structured in a way that is easy to follow and
              understand. The structure is as follows:
            </Paragraph>
            <UnorderedList>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Database</li>
            </UnorderedList>
            <Paragraph>
              If you want to focused on specific technique stack, you can just
              skip the other part. And focus on which part you want.
            </Paragraph>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={FullStackImage}
              alt="Full Stack Development"
              className="w-full h-full"
            />
          </div>
        </div>
      </Note>

      {/* Frontend Development Road Map */}
      <div className="flex flex-col gap-5">
        <Card>
          <div>
            <Title>Frontend Development</Title>
            <Paragraph>
              Frontend road map part will started from basics of web development
              and shift to more advanced topics like Framework, Library, and
              etc.
            </Paragraph>
            <Paragraph>
              Don't need to follow exactly as the same order, you can skip some
              topics that you already know them. Or some of the frameworks are
              optional, you can skip them if you don't want to learn them.
            </Paragraph>
          </div>

          <div>
            <SubTitle level={2}>Programming Language</SubTitle>
            <Paragraph>
              The first part of the frontend development is the programming
              language. Namely HTML, CSS and JavaScript. Below are the concept
              based road map. If you like a more streamline learning, reference
              the
              <LinkInner
                to={`${UniversityCoursesPath}/full-stack-development/berkeley-cs-198-99`}
              >
                Berkeley CS 198-99{" "}
              </LinkInner>
              for more information.
            </Paragraph>

            <Paragraph>
              <strong>Note: </strong>The programming language also needed for
              the backend development. Make sure you are familiar with the
              programming language before you start the backend development.
            </Paragraph>
          </div>

          <div>
            <SubTitle level={3}>Essential Programming Language</SubTitle>
            <Paragraph>
              The essential programming language for frontend development is
              HTML, CSS and JavaScript.
            </Paragraph>

            <SubTitle level={4}>HTML</SubTitle>
            <Paragraph>
              HTML is the standard markup language for creating web pages. It is
              used to create the structure of a web page. It is the basic of web
              development.
            </Paragraph>

            <SubTitle level={4}>CSS</SubTitle>
            <Paragraph>
              CSS is used to style the HTML structure. It is used to make the
              web page more beautiful and user friendly.
            </Paragraph>

            <SubTitle level={4}>JavaScript</SubTitle>
            <Paragraph>
              JavaScript is used to make the web page more interactive. It is
              used to make the web page more dynamic and responsive.
            </Paragraph>
          </div>

          <div>
            <SubTitle level={3}>Optional Programming Language</SubTitle>
            <Paragraph>
              There are some optional programming language for frontend
              development. Which can be skipped fist and learn them later. Or
              learn them depend on your need and interest.
            </Paragraph>

            <SubTitle level={4}>TypeScript</SubTitle>
            <Paragraph>
              TypeScript is used to make the web development more efficient and
              easier. It has a strong type system and can be used to make the
              web development more reliable and secure.
            </Paragraph>
          </div>
        </Card>

        {/* Backend Development Road Map */}
        <Card>
          <Title>Backend Development</Title>
        </Card>

        {/* Database Road Map */}
        <Card>
          <Title>Database</Title>
        </Card>
      </div>
    </div>
  );
};

export default FullStackPage;
