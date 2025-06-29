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
import Link from "@/Components/UI/Link";
import CategoryCardData from "@/data/CategoryCard";

// Import for the global data
import global from "@/data/general";

// style for the Home component
const HomePageStyle = {
    HomePage: `
    flex flex-col
    items-center
    gap-5
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
    w-[80%]
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
            <p>
                <strong>Note:</strong> This site is a work in progress. Any suggestions and contributions are welcome. 
                Contribute and fork here:
                <Link href={global.GitHubLink}>
                    GitHub
                </Link>
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
            <About />
            <CategoryCardBar />
        </div>
    )
}