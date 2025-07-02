/**
 * @author: Cursor AI
 * @date: 2025-07-02
 * @description: Under Construction Page Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";

// Import for the Link component
import Link from "@/Components/UI/Link";

// Import for the Github URL
import global from "@/data/general";

/**
 * @description: Style for the Under Construction page component
 * @returns {React.ReactNode} - The under construction page component
 */
const UnderConstructionStyle = {
    Container: `
    flex flex-col
    px-4 py-12
    `,
    Card: `
    w-full max-w-xl
    bg-white
    border border-gray-200
    rounded-xl
    p-10 sm:p-16 md:p-20
    text-center
    `,
    Title: `
    text-3xl sm:text-6xl font-light text-gray-900 mb-6
    `,
    Subtitle: `
    text-xl sm:text-2xl text-gray-600 mb-10
    font-normal
    `,
    Description: `
    text-gray-500 leading-relaxed mb-12
    text-lg sm:text-xl
    `,
    ContributionText: `
    text-gray-400 text-base sm:text-lg
    leading-relaxed
    `,
}

/**
 * @description: Under Construction Page Component for the CS-hub project
 * @returns {React.ReactNode} - The under construction page component
 */
export default function UnderConstructionPage({pageName}) {
    return (
        <div className={UnderConstructionStyle.Container}>
            <div className={UnderConstructionStyle.Card}>
                {/* Main Title */}
                <h1 className={UnderConstructionStyle.Title}>
                    {pageName} Page Not found
                </h1>

                {/* Subtitle */}
                <p className={UnderConstructionStyle.Subtitle}>
                    This page is currently being developed
                </p>

                {/* Description */}
                <p className={UnderConstructionStyle.Description}>
                    Currently, working on something. Coming soon. Go back to <Link href="/CS-hub/" target="_self">Home</Link>
                </p>

                {/* Contribution */}
                <p className={UnderConstructionStyle.ContributionText}>
                    Contributions are welcome.  <Link href={global.GitHubLink}>Github</Link>
                </p>
            </div>
        </div>
    )
}