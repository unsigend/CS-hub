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

import Card from "@/components/ui/Card";
import { Title, SubTitle } from "@/components/ui/Title";
import Paragraph from "@/components/ui/Paragraph";
import {
  LinkInner,
  LinkReading,
  LinkVideo,
  LinkGame,
  LinkExternal,
  LinkIconCustom,
} from "@/components/ui/Link";
import UnorderedList from "@/components/ui/UnorderedList";
import { UniversityCoursesPath } from "@/data/content/category/categories";
import { GithubIcon, LibraryBig } from "lucide-react";

const _HTMLPart = (): React.ReactNode => {
  return (
    <div>
      <SubTitle level={3}>HTML</SubTitle>
      <Paragraph>
        HTML is the standard markup language for creating web pages. It is used
        to create the structure of a web page. It is the basic of web
        development.
      </Paragraph>

      <UnorderedList>
        <li>
          <LinkReading href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content">
            MDN HTML Tutorial
          </LinkReading>
        </li>
        <li>
          <LinkVideo href="https://www.youtube.com/watch?v=UB1O30fR-EE&t=0s">
            HTML Crash Course For Absolute Beginners
          </LinkVideo>
        </li>
      </UnorderedList>

      <Paragraph>
        <strong>Note: </strong>HTML is the basic of web development. However you
        don't need to understand every mark up tags in HTML, just go through the
        important ones and use them in your project.
      </Paragraph>
    </div>
  );
};

const _CSSPart = (): React.ReactNode => {
  return (
    <div>
      <SubTitle level={3}>CSS</SubTitle>
      <Paragraph>
        CSS is used to style the HTML structure. It is used to make the web page
        more beautiful and user friendly. Learn the basics of CSS first like
        selectors, properties, values, and etc.
      </Paragraph>
      <UnorderedList>
        <li>
          <LinkReading href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content">
            MDN CSS Tutorial
          </LinkReading>
        </li>
        <li>
          <LinkVideo href="https://www.youtube.com/watch?v=yfoY53QXEnI&t=0s">
            CSS Crash Course For Absolute Beginners
          </LinkVideo>
        </li>
      </UnorderedList>

      <Paragraph>
        Another important concept in CSS is the box model and layout. Below are
        the resources for the box model and layout. Go through the concept first
        and do the game exercise to solidify the concept.
      </Paragraph>

      <SubTitle level={4}>Flex Box</SubTitle>
      <Paragraph>
        CSS Flexbox is a layout method that makes it easy to arrange elements in
        a flexible container, allowing you to control their alignment, spacing,
        and distribution with simple properties.
      </Paragraph>
      <UnorderedList>
        <li>
          <LinkReading href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
            CSS Flex Box
          </LinkReading>
        </li>
        <li>
          <LinkGame href="https://flexboxfroggy.com/">Flex Box Froggy</LinkGame>
        </li>
        <li>
          <LinkVideo href="https://www.youtube.com/watch?v=3YW65K6LcIA&t=0s">
            CSS Flex Box Crash Course
          </LinkVideo>
        </li>
      </UnorderedList>

      <SubTitle level={4}>Grid Layout</SubTitle>
      <Paragraph>
        CSS Grid Layout is a two-dimensional layout system that allows you to
        create complex layouts by defining rows and columns. Which is better for
        complex layout.
      </Paragraph>
      <UnorderedList>
        <li>
          <LinkReading href="https://css-tricks.com/snippets/css/complete-guide-grid/">
            CSS Grid Layout
          </LinkReading>
        </li>
        <li>
          <LinkGame href="https://cssgridgarden.com/">CSS Grid Garden</LinkGame>
        </li>
        <li>
          <LinkVideo href="https://www.youtube.com/watch?v=0xMQfnTU6oo&t=0s">
            CSS Grid Layout Crash Course
          </LinkVideo>
        </li>
      </UnorderedList>

      <SubTitle level={4}>CSS Framework</SubTitle>
      <Paragraph>
        Below are the resources for the CSS framework and library, it is
        optional so you can come back later on those topics. But using these
        design can quickly build beautiful and responsive web page.
      </Paragraph>
      <UnorderedList>
        <li>
          <LinkReading href="https://tailwindcss.com/docs/installation">
            Tailwind CSS
          </LinkReading>
        </li>
        <li>
          <LinkVideo href="https://www.youtube.com/watch?v=dFgzHOX84xQ&t=0s">
            Tailwind CSS Crash Course
          </LinkVideo>
        </li>
        <li>
          <LinkReading href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">
            Bootstrap 5
          </LinkReading>
        </li>
      </UnorderedList>
    </div>
  );
};

const _JavaScriptPart = (): React.ReactNode => {
  return (
    <div>
      <SubTitle level={3}>JavaScript</SubTitle>
      <Paragraph>
        JavaScript is used to make web pages interactive, dynamic, and
        responsive to user actions. It is the most important concept and skill
        if you focus on JavaScript and TypeScript full stack development.
      </Paragraph>

      <Paragraph>
        This means a crash course alone is not enough - you need to learn both
        deeper and broader. The way I recommend learning JavaScript is to
        quickly get familiar with the basic concepts and syntax, then reinforce
        your knowledge through exercises and hands-on projects.
      </Paragraph>

      <UnorderedList>
        <li>
          <LinkVideo href="https://www.youtube.com/watch?v=hdI2bqOjy3c&t=0s">
            JavaScript Crash Course For Absolute Beginners
          </LinkVideo>
        </li>
        <li>
          <LinkReading href="https://javascript.info/">
            Modern JavaScript Tutorial
          </LinkReading>
        </li>
      </UnorderedList>

      <Paragraph>
        Read
        <LinkExternal href="https://javascript.info/">
          Modern JavaScript Tutorial{" "}
        </LinkExternal>{" "}
        part 1 for the topics you are not familiar with, then focus on part 2
        which covers DOM manipulation, events, and asynchronous programming.
      </Paragraph>

      <SubTitle level={4}>Go Deeper into JavaScript</SubTitle>
      <Paragraph>
        Once you've grasped the fundamentals, it's time to dive deeper into
        JavaScript's more advanced concepts and patterns.
      </Paragraph>
      <UnorderedList>
        <li>
          <LinkIconCustom href="https://github.com/getify/You-Dont-Know-JS">
            <GithubIcon />
            Github: You Don't Know JS
          </LinkIconCustom>
        </li>
        <li>
          <LinkIconCustom href="https://eloquentjavascript.net/">
            <LibraryBig />
            Eloquent JavaScript
          </LinkIconCustom>
        </li>
      </UnorderedList>
    </div>
  );
};

const _TypeScriptPart = (): React.ReactNode => {
  return (
    <div>
      <SubTitle level={3}>TypeScript</SubTitle>
      <Paragraph>
        TypeScript is used to make the web development more efficient and
        easier. It has a strong type system and can be used to make the web
        development more reliable and secure.
      </Paragraph>
      <UnorderedList>
        <li>
          <LinkVideo href="https://www.youtube.com/watch?v=BwuLxPH8IDs">
            TypeScript Crash Course
          </LinkVideo>
        </li>
        <li>
          <LinkReading href="https://www.typescriptlang.org/docs/handbook/intro.html">
            TypeScript Handbook
          </LinkReading>
        </li>
      </UnorderedList>
    </div>
  );
};

// Programming Language
const EssentialLanguagesSection = (): React.ReactNode => {
  const _Intro = (): React.ReactNode => {
    return (
      <div>
        <SubTitle level={2}>Essential Programming Language</SubTitle>
        <Paragraph>
          The essential programming language for frontend development is HTML,
          CSS and JavaScript.
        </Paragraph>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <_Intro />

      <_HTMLPart />
      <_CSSPart />
      <_JavaScriptPart />
    </div>
  );
};

const OptionalLanguagesSection = (): React.ReactNode => {
  const _Intro = (): React.ReactNode => {
    return (
      <div>
        <SubTitle level={2}>Optional Programming Language</SubTitle>
        <Paragraph>
          There are some optional programming language for frontend development.
          Which can be skipped fist and learn them later. Or learn them depend
          on your need and interest.
        </Paragraph>
      </div>
    );
  };
  return (
    <div className="flex flex-col gap-3">
      <_Intro />
      <_TypeScriptPart />
    </div>
  );
};

const ProgrammingLanguageSection = (): React.ReactNode => {
  const _Intro = (): React.ReactNode => {
    return (
      <div>
        <Title>Programming Language</Title>
        <Paragraph>
          The first part of the frontend development is the programming
          language. Namely HTML, CSS and JavaScript. Below are the concept based
          road map. If you like a more streamline learning, reference the
          <LinkInner
            to={`${UniversityCoursesPath}/full-stack-development/berkeley-cs-198-99`}
          >
            Berkeley CS 198-99{" "}
          </LinkInner>
          for more information.
        </Paragraph>

        <Paragraph>
          <strong>Note: </strong>The programming language also needed for the
          backend development. Make sure you are familiar with the programming
          language before you start the backend development.
        </Paragraph>
      </div>
    );
  };
  return (
    <Card>
      <_Intro />
      <EssentialLanguagesSection />
      <OptionalLanguagesSection />
    </Card>
  );
};

// Intro
const IntroSection = (): React.ReactNode => {
  return (
    <Card>
      <div>
        <Title>Frontend Development</Title>
        <Paragraph>
          The frontend roadmap starts with the basics of web development and
          shifts to more advanced topics like frameworks, libraries, and other
          tools.
        </Paragraph>
        <Paragraph>
          You don't need to follow exactly the same order - you can skip topics
          that you already know. Some frameworks are optional, so you can skip
          them if you don't want to learn them or if they don't align with your
          goals.
        </Paragraph>
      </div>
    </Card>
  );
};
// Framework
const FrontendPage = (): React.ReactNode => {
  return (
    <div className="flex flex-col gap-8">
      <IntroSection />
      <ProgrammingLanguageSection />
    </div>
  );
};

export default FrontendPage;
