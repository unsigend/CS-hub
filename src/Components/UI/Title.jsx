/**
 * @author: Qiu Yixiang
 * @date: 2025-07-03
 * @description: Title Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";

// Style for the Title component
const TitleStyle = {
    Title: `
    text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6
    `,
    SubTitle1: `
    text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6
    `,
    SubTitle2: `
    text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-5
    `,
    SubTitle3: `
    text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4
    `,
    SubTitle4: `
    text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3
    `,
    SubTitle5: `
    text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3
    `,
}

export function Title({title}) {
    return (
        <h1 className={TitleStyle.Title}>{title}</h1>
    )
}

export function SubTitle({title, level = 2}) {
    // Map level to style and tag
    const getSubTitleStyle = (level) => {
        switch (level) {
            case 1: return TitleStyle.SubTitle1;
            case 2: return TitleStyle.SubTitle2;
            case 3: return TitleStyle.SubTitle3;
            case 4: return TitleStyle.SubTitle4;
            case 5: return TitleStyle.SubTitle5;
            default: return TitleStyle.SubTitle2;
        }
    };

    // Create the appropriate heading tag based on level
    const style = getSubTitleStyle(level);
    
    switch (level) {
        case 1: return <h1 className={style}>{title}</h1>;
        case 2: return <h2 className={style}>{title}</h2>;
        case 3: return <h3 className={style}>{title}</h3>;
        case 4: return <h4 className={style}>{title}</h4>;
        case 5: return <h5 className={style}>{title}</h5>;
        default: return <h2 className={style}>{title}</h2>;
    }
}

