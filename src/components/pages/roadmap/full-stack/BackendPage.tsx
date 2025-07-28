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
import Paragraph from "@/components/ui/Paragraph";
import { Title } from "@/components/ui/Title";

import {
  _JavaScriptPart,
  _TypeScriptPart,
  _PythonPart,
  _DjangoPart,
  _FastAPIPart,
  _NodeJSExpressPart,
} from "./_Part";

const IntroSection = (): React.ReactNode => {
  return (
    <Card>
      <div>
        <Title>Backend Development Roadmap</Title>
        <Paragraph>
          Backend development is the server side of the website. It is used to
          store and retrieve data from the database. The database part is
          divided into a separate section.
        </Paragraph>
        <Paragraph>
          You don't need to follow exactly the same order - you can skip topics
          that you already know.
        </Paragraph>
        <Paragraph>
          The backend roadmap is fairly flexible, you can choose using
          JavaScript and TypeScript as backend with Express.js and Node.js if
          you already familiar with the JS/TS stack. And also can choose Django
          and FastAPI if you prefer with python.
        </Paragraph>
      </div>
    </Card>
  );
};

const ProgrammingLanguageSection = (): React.ReactNode => {
  const _Intro = (): React.ReactNode => {
    return (
      <div>
        <Title>Programming Language</Title>
        <Paragraph>
          Programming language is the foundation of backend development. You can
          choose to use JavaScript and TypeScript as backend or python with
          Django and FastAPI.
        </Paragraph>
      </div>
    );
  };
  return (
    <Card>
      <_Intro />
      <_JavaScriptPart />
      <_TypeScriptPart />
      <_PythonPart />
    </Card>
  );
};

const FrameworkSection = (): React.ReactNode => {
  const _Intro = (): React.ReactNode => {
    return (
      <div>
        <Title>Framework</Title>
        <Paragraph>
          A backend framework provides the structure and tools needed to build
          your server-side application efficiently. It handles common tasks like
          routing, database connections, and security.
        </Paragraph>
        <Paragraph>
          The selection of the backend framework is based on the programming
          language you choose. Or you can choose both if you want to get a
          broader overview of the backend development with different ecosystem.
        </Paragraph>
      </div>
    );
  };
  return (
    <Card>
      <_Intro />
      <_NodeJSExpressPart />
      <_FastAPIPart />
      <_DjangoPart />
    </Card>
  );
};

const BackendPage = (): React.ReactNode => {
  return (
    <div className="flex flex-col gap-8">
      <IntroSection />
      <ProgrammingLanguageSection />
      <FrameworkSection />
    </div>
  );
};

export default BackendPage;
