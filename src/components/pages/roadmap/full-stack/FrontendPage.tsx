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
import { Title } from "@/components/ui/Title";
import Paragraph from "@/components/ui/Paragraph";
import { LinkInner } from "@/components/ui/Link";
import { UniversityCoursesPath } from "@/data/content/category/categories";
import {
    _HTMLPart,
    _CSSPart,
    _JavaScriptPart,
    _TypeScriptPart,
    _ReactPart,
    _ReactRouterPart,
    _ReduxPart,
    _NextJSPart,
    _AstroPart,
} from "./_Part";

const ProgrammingLanguageSection = (): React.ReactNode => {
    const _Intro = (): React.ReactNode => {
        return (
            <div>
                <Title>Programming Language</Title>
                <Paragraph>
                    The first part of the frontend development is the
                    programming language. Namely HTML, CSS and JavaScript. Below
                    are the concept based road map. If you like a more
                    streamline learning, reference the
                    <LinkInner
                        to={`${UniversityCoursesPath}/full-stack-development/berkeley-cs-198-99`}
                    >
                        Berkeley CS 198-99{" "}
                    </LinkInner>
                    for more information.
                </Paragraph>

                <Paragraph>
                    <strong>Note: </strong>The programming language also needed
                    for the backend development. Make sure you are familiar with
                    the programming language before you start the backend
                    development.
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
                <Title>Frontend Development Roadmap</Title>
                <Paragraph>
                    The frontend roadmap starts with the basics of web
                    development and shifts to more advanced topics like
                    frameworks, libraries, and other tools.
                </Paragraph>
                <Paragraph>
                    You don't need to follow exactly the same order - you can
                    skip topics that you already know. Some frameworks are
                    optional, so you can skip them if you don't want to learn
                    them or if they don't align with your goals.
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
                    The frontend framework is the most important part of the
                    frontend development. It is used to create the UI of the web
                    application. It is the most popular framework for frontend
                    development.
                </Paragraph>
                <Paragraph>
                    The most popular framework now for frontend development is{" "}
                    <strong>React</strong> and <strong>Vue.js</strong>. This
                    road map will focus on the <strong>React</strong> framework.
                    And mainly focus on the <strong>React</strong> ecosystem
                    (React Version 19).
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
