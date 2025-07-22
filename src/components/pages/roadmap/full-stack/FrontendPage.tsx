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

const CategoryLevel: number = 3;

const _HTMLPart = (): React.ReactNode => {
  return (
    <div>
      <SubTitle level={CategoryLevel}>HTML</SubTitle>
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
      <SubTitle level={CategoryLevel}>CSS</SubTitle>
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
      <SubTitle level={CategoryLevel}>JavaScript</SubTitle>
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
      <SubTitle level={CategoryLevel}>TypeScript</SubTitle>
      <Paragraph>
        TypeScript is used to make the web development more efficient and
        easier. It has a strong type system and can be used to make the web
        development more reliable and secure.
      </Paragraph>
      <UnorderedList>
        <li>
          <LinkVideo href="https://www.youtube.com/watch?v=BwuLxPH8IDs&t=0s">
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

const _ReactPart = (): React.ReactNode => {
  return (
    <div>
      <SubTitle level={CategoryLevel}>React</SubTitle>
      <Paragraph>
        React is a JavaScript library for building user interfaces and creating
        interactive web applications. It is currently the most popular framework
        for frontend development.
      </Paragraph>
      <Paragraph>
        First, you should learn the basic concepts of React such as JSX,
        Components, Props, useState, useEffect, Hooks, and other fundamentals.
        This stage can be completed through crash courses.
      </Paragraph>
      <UnorderedList>
        <li>
          <LinkVideo href="https://www.youtube.com/watch?v=LDB4uaJ87e0&t=0s">
            React Crash Course
          </LinkVideo>
        </li>
        <li>
          <LinkReading href="https://react.dev/learn/tutorial-tic-tac-toe">
            React Tutorial: Tic Tac Toe
          </LinkReading>
        </li>
      </UnorderedList>
      <Paragraph>
        Then you should learn advanced React concepts like Optimization, Context
        Management, Life Cycle, and etc. This stage requires more comprehensive
        courses and deeper study.
      </Paragraph>
      <Paragraph>
        For the second stage, the only way I recommend is to learn the React
        advanced feature through the official documentation with some practice
        videos. Mainly focus on the useContext, useMemo, useRef, and do some
        react projects.
      </Paragraph>
      <UnorderedList>
        <li>
          <LinkVideo href="https://www.youtube.com/watch?v=NDEt0KdDbhk&list=PLillGF-RfqbaxgxkKgKk1XlJAVCX31xRI">
            React Context API
          </LinkVideo>
        </li>
        <li>
          <LinkVideo href="https://www.youtube.com/watch?v=FiGmAI5e91M&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&index=2&t=0s">
            React with Tailwind CSS
          </LinkVideo>
        </li>
        <li>
          <LinkReading href="https://react.dev/reference/react">
            React Official Documentation
          </LinkReading>
        </li>
      </UnorderedList>
      <Paragraph>
        Can also consider this road map for the React learning path:
        <LinkExternal href="https://roadmap.sh/react">
          React Roadmap.sh
        </LinkExternal>
      </Paragraph>
    </div>
  );
};

const _ReactRouterPart = (): React.ReactNode => {
  return (
    <div>
      <SubTitle level={CategoryLevel}>React Router</SubTitle>
      <Paragraph>
        React Router is a library for routing in React. It is used to create the
        navigation of the web application. The React Router learning path is
        clear, from declarative routing to framework-level routing.
      </Paragraph>
      <UnorderedList>
        <li>
          <LinkReading href="https://reactrouter.com/start/declarative/installation">
            React Router Declarative Mode Routing
          </LinkReading>
        </li>
        <li>
          <LinkVideo href="https://www.youtube.com/watch?v=943D7U74_sQ">
            React Router Tutorial
          </LinkVideo>
        </li>
        <li>
          <LinkReading href="https://reactrouter.com/start/framework/installation">
            React Router Framework Mode Routing
          </LinkReading>
        </li>
      </UnorderedList>
      <Paragraph>
        React Router Framework Mode Routing is the most popular way to use React
        Router. It provide a more flexible way to use React Router and build
        both Single Page Application (SPA) and Server Side Rendering (SSR)
        applications.
      </Paragraph>
    </div>
  );
};

const _ReduxPart = (): React.ReactNode => {
  return (
    <div>
      <SubTitle level={CategoryLevel}>Redux</SubTitle>
      <Paragraph>
        Redux is a state management library for React. It is used to manage the
        state of the web application. Which is essential for the large scale
        project state management.
      </Paragraph>
    </div>
  );
};

const _NextJSPart = (): React.ReactNode => {
  return (
    <div>
      <SubTitle level={CategoryLevel}>Next.js</SubTitle>
      <Paragraph>
        Next.js is a framework for building server-side rendered (SSR) and
        static site generated (SSG) React applications. It is a popular
        framework for building web applications.
      </Paragraph>
    </div>
  );
};

const _AstroPart = (): React.ReactNode => {
  return (
    <div>
      <SubTitle level={CategoryLevel}>Astro (Optional)</SubTitle>
      <Paragraph>
        Astro is a static site builder that is used to create the static site.
        This framework is completely optional and only learn this if you have a
        need to build a static site. But it is recommended to learn this if you
        want to build a personal Blog.
      </Paragraph>
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
      <_HTMLPart />
      <_CSSPart />
      <_JavaScriptPart />
      <_TypeScriptPart />
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
const FrameworkSection = (): React.ReactNode => {
  const _Intro = (): React.ReactNode => {
    return (
      <div>
        <Title>Framework</Title>
        <Paragraph>
          The frontend framework is the most important part of the frontend
          development. It is used to create the UI of the web application. It is
          the most popular framework for frontend development.
        </Paragraph>
        <Paragraph>
          The most popular framework now for frontend development is{" "}
          <strong>React</strong> and <strong>Vue.js</strong>. This road map will
          focus on the <strong>React</strong> framework. And mainly focus on the{" "}
          <strong>React</strong> ecosystem (React Version 19).
        </Paragraph>
      </div>
    );
  };
  return (
    <Card>
      <_Intro />
      <_ReactPart />
      <_ReactRouterPart />
      <_ReduxPart />
      <_NextJSPart />
      <_AstroPart />
    </Card>
  );
};
const FrontendPage = (): React.ReactNode => {
  return (
    <div className="flex flex-col gap-8">
      <IntroSection />
      <ProgrammingLanguageSection />
      <FrameworkSection />
    </div>
  );
};

export default FrontendPage;
