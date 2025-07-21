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
import Card from "@/components/ui/Card";
import { Title, SubTitle } from "@/components/ui/Title";
import Paragraph from "@/components/ui/Paragraph";
import { LinkAligned } from "@/components/ui/Link";
import UnorderedList from "@/components/ui/UnorderedList";
import RoadMapCard from "@/components/ui/RoadMapCard";
import { Monitor, Server, Database } from "lucide-react";

// Import for the data
import { RoadMapPath } from "@/data/content/category/categories";

// Import for images
import FULLSTACKOPEN_IMAGE from "/images/fullstackopen.svg";

const FullStackContent = (): React.ReactNode => {
  return (
    <div>
      <Title>Full Stack Development Road Map</Title>
      <div className="flex flex-row gap-8">
        <div className="flex flex-col">
          <Paragraph>
            This page is a roadmap for full stack development. This is a skill
            and practice-focused roadmap. If you want to learn in a more
            concept-based way, you can use university courses for full stack
            development.
          </Paragraph>
          <SubTitle level={3}>Reference</SubTitle>
          <LinkAligned
            name="Full Stack Road Map"
            href="https://roadmap.sh/full-stack"
          >
            Roadmap.sh Full Stack Road Map
          </LinkAligned>
          <LinkAligned
            name="Backend Road Map"
            href="https://roadmap.sh/backend"
          >
            Roadmap.sh Backend Road Map
          </LinkAligned>
          <LinkAligned
            name="Frontend Road Map"
            href="https://roadmap.sh/frontend"
          >
            Roadmap.sh Frontend Road Map
          </LinkAligned>

          <SubTitle level={3}>Note</SubTitle>
          <Paragraph>
            This roadmap has some personal bias and may not be suitable for
            everyone. Consider this as a roadmap reference. If you have any
            suggestions or feedback, please feel free to contact me.
          </Paragraph>
          <Paragraph>
            This page is a work in progress. I will update it as I learn more
            about full stack development.
          </Paragraph>

          <SubTitle level={3}>Structure</SubTitle>
          <Paragraph>
            This roadmap is structured in a way that is easy to follow and
            understand. The structure is as follows:
          </Paragraph>
          <UnorderedList>
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Database</li>
          </UnorderedList>
          <Paragraph>
            If you want to focus on a specific technology stack, you can skip
            the other parts and focus on whichever area you want to develop.
          </Paragraph>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={FULLSTACKOPEN_IMAGE}
            alt="Full Stack Development"
            className="w-64 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

const RoadMapCardBox = (): React.ReactNode => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
      <RoadMapCard
        title="Frontend"
        icon={Monitor}
        to={`${RoadMapPath}/full-stack/frontend`}
      />
      <RoadMapCard
        title="Backend"
        icon={Server}
        to={`${RoadMapPath}/full-stack/backend`}
      />
      <RoadMapCard
        title="Database"
        icon={Database}
        to={`${RoadMapPath}/full-stack/database`}
      />
    </div>
  );
};
const FullStackPage = (): React.ReactNode => {
  return (
    <Card>
      <FullStackContent />
      <RoadMapCardBox />
    </Card>
  );
};

export default FullStackPage;
