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

// Import for the Reference component
import Paragraph from "@/components/ui/Paragraph";
import { LinkAligned } from "@/components/ui/Link";
import { Title, SubTitle } from "@/components/ui/Title";
import Card from "@/components/ui/Card";

// Import for the data
import LowLevelReference from "@/data/content/resources/reference/low-level";

// Style for the LowLevelPage component
const Style = {
  Container: `
    flex flex-col gap-4
    `,
};

// Function to construct the reference for each category
const ConstructReference = ({ Category }: { Category: any }) => {
  return (
    <div>
      <SubTitle level={2}>{Category.name}</SubTitle>
      {Category.subContent.map((item: any) => (
        <LinkAligned key={item.id} name={item.name} href={item.url}>
          {item.content}
        </LinkAligned>
      ))}
    </div>
  );
};

// Function to construct the title for the page
const LowLevelReferenceTitle = (): React.ReactNode => {
  return (
    <div>
      <Title>Low Level Reference</Title>
      <Paragraph>
        Here are some quick reference for low level development. Divided into
        different categories. Each of them has a curated list of resources about
        programming languages, tools, and other related topics.
      </Paragraph>
      <Paragraph>
        This page is a collection of reference for low level development. Only
        meant for quick reference, not for comprehensive learning.
      </Paragraph>
    </div>
  );
};

const LowLevelReferencePage = (): React.ReactNode => {
  return (
    <Card>
      <div className={Style.Container}>
        <LowLevelReferenceTitle />
        {LowLevelReference.map((item) => (
          <ConstructReference Category={item} key={item.id} />
        ))}
      </div>
    </Card>
  );
};

export default LowLevelReferencePage;
