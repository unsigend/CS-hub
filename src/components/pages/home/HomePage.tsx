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
import CodeBar from "@/components/ui/CodeBar";
import MainCategoryCard from "@/components/ui/MainCategoryCard";
import Note from "@/components/ui/Note";
import { LinkExternal } from "@/components/ui/Link";
import CategoryCardData from "@/data/content/category/category-cards";
import Paragraph from "@/components/ui/Paragraph";
import { SubTitle, Title } from "@/components/ui/Title";

// Import for the global data
import global from "@/data/config/config";

// style for the Home component
const HomePageStyle = {
  HomePage: `
    flex flex-col
    items-center
    gap-5
    mb-10 w-full
    `,
  TitleBar: `
    flex flex-col
    justify-between gap-4
    mt-6
    md:flex-row md:gap-8 md:mt-0
    w-[90%] max-w-6xl mx-auto px-4
    md:px-8 lg:px-12
    `,
  TitleContainer: `
    flex flex-col
    justify-center items-center md:items-start
    flex-1 gap-3
    `,
  Title: `
    text-4xl font-bold
    text-center md:text-left
    `,
  Description: `
    text-lg text-gray-500
    text-center md:text-left
    `,
  IntroductionBar: `
    mx-auto w-[80%]
    text-lg
    flex flex-col
    gap-5
    `,
  CategoryCardBar: `
    w-[100%] mb-10
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2
    justify-items-center
    gap-5
    max-w-4xl mx-auto
    `,
};

const TitleBar = (): React.ReactNode => {
  return (
    <div className={HomePageStyle.TitleBar}>
      <div className={HomePageStyle.TitleContainer}>
        <Title>Welcome to CS-hub</Title>
        <p className={HomePageStyle.Description}>
          This is a platform for you to learn Computer Science. Dedicated for
          self-learners better navigate the learning path.
        </p>
      </div>
      <CodeBar />
    </div>
  );
};

const About = (): React.ReactNode => {
  return (
    <Note title="About">
      <div>
        <Paragraph>
          This site integrates resources, road maps, practical projects,
          top-university courses, and more. All of these resources are free and
          open-source. Dedicated for self-learners, CS-lovers, and anyone who
          wants to learn more about Computer Science.
        </Paragraph>
        <SubTitle level={3}>How to use</SubTitle>
        <Paragraph>
          Whether you're a complete beginner starting your programming journey
          or an experienced developer looking to expand your skill set, CS-hub
          provides carefully curated pathways tailored to different learning
          styles. This site bridges the gap between theoretical knowledge and
          practical application.
        </Paragraph>
        <Paragraph>
          The beauty of self-directed learning lies in its flexibility and
          personalized pace. CS-hub empowers you to take control of your
          education, whether you prefer diving deep into academic coursework,
          following step-by-step road maps, or jumping straight into hands-on
          projects that challenge your problem-solving abilities.
        </Paragraph>

        <Paragraph>
          Now ! Choose your dedicated road map or field of interest, and start
          your learning journey. Can be top-university based courses if you like
          a more structured learning experience. Or just follow the provided
          road map if you like a concept or skill based learning journey. Or can
          be a practical project based learning if you like to learn by doing
          and challenge yourself.
        </Paragraph>
      </div>

      <div>
        <SubTitle level={3}>Note</SubTitle>
        <Paragraph>
          This site is a work in progress. Any suggestions and contributions are
          welcome. Contribute and fork here:
          <LinkExternal href={global.GitHubLink}>GitHub</LinkExternal>
        </Paragraph>
      </div>
    </Note>
  );
};

const CategoryCardBar = (): React.ReactNode => {
  return (
    <div className={HomePageStyle.CategoryCardBar}>
      {CategoryCardData.map((card) => (
        <MainCategoryCard
          key={card.title}
          title={card.title}
          description={card.description}
          icon={card.icon}
        />
      ))}
    </div>
  );
};

const HomePage = (): React.ReactNode => {
  return (
    <div className={HomePageStyle.HomePage}>
      <TitleBar />
      <CategoryCardBar />
      <About />
    </div>
  );
};

export default HomePage;
