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

// Import the components
import Card from "@/components/ui/Card";
import { LinkExternal } from "@/components/ui/Link";
import Paragraph from "@/components/ui/Paragraph";
import { SubTitle } from "@/components/ui/Title";

const AboutPage = (): React.ReactNode => {
  return (
    <Card>
      <div>
        <SubTitle level={2}>Preface</SubTitle>
        <Paragraph>
          I am inspired by the CS open-source community
          <LinkExternal href="https://github.com/ossu/computer-science">
            OSSU
          </LinkExternal>{" "}
          . And I want to create a site that integrates resources, road maps and
          much more as a guide for self-learners.
        </Paragraph>
      </div>
      <div>
        <SubTitle level={2}>About Me</SubTitle>
        <Paragraph>
          I am a self-learner who is passionate about Computer Science. Mainly
          focused on low-level system architecture and system implementation.
          More about me: <LinkExternal href="#">My Blog</LinkExternal>
        </Paragraph>
      </div>
    </Card>
  );
};

export default AboutPage;
