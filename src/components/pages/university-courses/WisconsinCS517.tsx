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

// bid_9ef9300254df85aba0f9c51cf857ea4fcab5c5bbf62d1c5fc96dbd8d03780cba

// Import for the components
import CourseCard from "@/components/ui/CourseCard";
import Paragraph from "@/components/ui/Paragraph";
import { SubTitle } from "@/components/ui/Title";
import { LinkAligned } from "@/components/ui/Link";

const WisconsinCS517Page = (): React.ReactNode => {
  return (
    <CourseCard
      courseName="Wisconsin: CS 517: Building UI with React and React Native"
      courseUrl="https://cs571.org/"
      from="University of Wisconsin-Madison"
      prerequisites="Wisconsin CS 400 or any programming language experience"
      programmingLanguage="JavaScript"
    >
      <SubTitle level={2}>About the course</SubTitle>
      <Paragraph>
        CS 571 introduces students to modern user interface development using
        React and React Native frameworks. This course bridges the gap between
        traditional web development and contemporary component-based
        architecture, preparing students to build dynamic, interactive
        applications for both web and mobile platforms.
      </Paragraph>
      <Paragraph>
        This course is mainly focused on front-end development using React and
        React Native also include some topics like Design and UX.
      </Paragraph>
      <Paragraph>
        The assignment, lecture, video are all open to the public. You can even
        get a student ID using your email to access the resources.
      </Paragraph>
      <SubTitle level={2}>Resources</SubTitle>
      <LinkAligned href="https://cs571.org/" name="CS 571 latest">
        Main Page
      </LinkAligned>
      <LinkAligned href="https://cs571.org/auth" name="Register Page">
        Badger ID
      </LinkAligned>
    </CourseCard>
  );
};

export default WisconsinCS517Page;
