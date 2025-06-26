/**
 * @author: Qiu Yixiang
 * @date: 2025-06-25
 * @description: Logo Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";
import globalStyle from "@/style/style";

// style for the Logo component
/**
 * @description: Style for the Logo component
 * @style: Logo is build based on the tailwind css
 *         Using white and black as the theme color
 */

const LogoStyle = {
    Logo: `
        flex items-center gap-2
        px-3 py-2 my-3
        bg-white
        border border-gray-200
        rounded-md
        shadow-md shadow-black/10
        hover:shadow-lg hover:shadow-black/15
        transform hover:-translate-y-0.5Add commentMore actions
        transition-all duration-200 ease-in-out
        cursor-pointer
    `,
    LogoFrame: `
        flex items-center justify-center
        w-9 h-9
        bg-black
        text-white font-bold text-md
        rounded
        select-none
    `,
    LogoText: `
        text-black font-bold text-xl
        select-none
        tracking-tight
    `
}

export default function Logo() {
    return (
        <div className={LogoStyle.Logo}>
            <div className={LogoStyle.LogoFrame}>CS</div>
            <div className={LogoStyle.LogoText}>Hub</div>
        </div>
    )
}