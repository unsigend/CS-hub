/**
 * @author: Qiu Yixiang
 * @date: 2025-06-25
 * @description: Home Page Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";

// Import for the components
import CodeBar from "@/Components/UI/CodeBar";
import CategoryCard from "@/Components/UI/CategoryCard";
import Note from "@/Components/UI/Note";
import {LinkExternal, LinkInner} from "@/Components/UI/Link";
import CategoryCardData from "@/data/CategoryCard";

// Import for the global data
import global from "@/data/general";

// style for the Home component
const HomePageStyle = {
    HomePage: `
    flex flex-col
    items-center
    gap-5
    mb-10
    `,
    TitleBar: `
    flex flex-col
    justify-between gap-4
    mt-6
    md:flex-row md:gap-8 md:mt-0
    md:w-[60%]
    `,
    TitleContainer: `
    flex flex-col
    justify-center items-start
    flex-1 gap-3
    `,
    Title: `
    text-4xl font-bold
    `,
    Description: `
    text-lg text-gray-500
    `,
    IntroductionBar: `
    mx-auto w-[80%]
    text-lg
    flex flex-col
    gap-5
    `,
    CategoryCardBar: `
    w-[80%] mb-10
    flex flex-row
    justify-center
    flex-wrap
    gap-5
    lg:w-[60%]
    `,
}
/**
 * @description: Title Bar Component for the Home Page
 * @returns: Title Bar component with title, description and code bar
 */
function TitleBar(){
    return (
        <div className={HomePageStyle.TitleBar}>
            <div className={HomePageStyle.TitleContainer}>
                <h1 className={HomePageStyle.Title}>Welcome to CS-hub</h1>
                <p className={HomePageStyle.Description}>
                    This is a platform for you to learn Computer Science. Dedicated for self-learners better
                    navigate the learning path.
                </p>
            </div>
            <CodeBar />
        </div>
    )
}

/**
 * @description: About Component for the Home Page
 * @returns: About component with about text
 */
function About(){
    const content = (
        <>
            <p>
                This site integrates resources, road maps, practical projects, top-university courses, and more.
                All of these resources are free and open-source. Dedicated for self-learners, CS-lovers, and anyone who
                wants to learn more about Computer Science.
            </p>
            <strong className="text-xl">How to use</strong>
            <p>
                Whether you're a complete beginner starting your programming journey or an experienced developer looking 
                to expand your skill set, CS-hub provides carefully curated pathways tailored to different learning styles. 
                This site bridges the gap between theoretical knowledge and practical application.
            </p>
            <p>
                The beauty of self-directed learning lies in its flexibility and personalized pace. 
                CS-hub empowers you to take control of your education, whether you prefer diving deep into academic coursework, 
                following step-by-step road maps, or jumping straight into hands-on projects that challenge your problem-solving 
                abilities.
            </p>

            <p>
                Now ! Choose your dedicated road map or field of interest, and start your learning journey.
                Can be top-university based courses if you like a more structured learning experience. Or just follow the 
                provided road map if you like a concept or skill based learning journey. Or can be a practical project
                based learning if you like to learn by doing and challenge yourself. 
            </p>

            <p>
                <strong>Note:</strong> This site is a work in progress. Any suggestions and contributions are welcome. 
                Contribute and fork here:
                <LinkExternal href={global.GitHubLink}>
                    GitHub
                </LinkExternal>
            </p>
        </>
    );

    return <Note title="About" content={content} />;
}

/**
 * @description: Category Card Bar Component for the Home Page
 * @returns: Category Card Bar component with category cards
 */
function CategoryCardBar(){
    return (
        <div className={HomePageStyle.CategoryCardBar}>
            {CategoryCardData.map((card) => (
                <CategoryCard key={card.title} title={card.title} description={card.description}
                icon={card.icon} />
            ))}
        </div>
    )
}

export default function HomePage() {
    return (
        <div className={HomePageStyle.HomePage}>
            <TitleBar />
            <CategoryCardBar />
            <About />
        </div>
    )
}