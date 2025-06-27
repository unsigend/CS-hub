/**
 * @author: Qiu Yixiang
 * @date: 2025-06-25
 * @description: Home Page Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";
import globalStyle from "@/style/style";

// Import for the components
import CodeBar from "@/Components/UI/CodeBar";

// style for the Home component
const HomePageStyle = {
    HomePage: `
    `,
    TitleBar: `
    flex flex-col
    justify-between gap-10
    mt-10
    md:flex-row md:gap-30 md:mt-0
    `,
}

export default function HomePage() {
    return (
        <div className={HomePageStyle.HomePage}>
            <div className={HomePageStyle.TitleBar}>
                <div className="flex flex-col justify-center items-center md:items-start">
                    <h1 className="text-4xl font-bold">Welcome to CS-hub</h1>
                    <p className="text-lg text-gray-500">
                        Your one-stop shop for all your CS needs
                    </p>
                </div>
                <CodeBar />
            </div>
        </div>
    )
}