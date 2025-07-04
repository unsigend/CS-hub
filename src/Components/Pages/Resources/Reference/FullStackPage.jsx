/**
 * @author: Qiu Yixiang
 * @date: 2025-07-03
 * @description: Full Stack Reference Page for the CS-hub project
 */

// Import for the Reference component
import Reference from "@/Components/UI/Reference";
import { Title, SubTitle } from "@/Components/UI/Title";
import Card from "@/Components/UI/Card";

// Import for the data
import FullStackReference from "@/data/Resources/Reference/FullStack";

const Style = {
    Paragraph: `
    text-gray-700 leading-relaxed
    text-base sm:text-lg mb-3
    [&>p]:mb-4 [&>p:last-child]:mb-0
    [&>ul]:mb-4 [&>ol]:mb-4
    [&>h1]:mb-4 [&>h2]:mb-4 [&>h3]:mb-4
    [&>blockquote]:mb-4 [&>pre]:mb-4
    space-y-0
    `,
    ItemBox: `
    flex flex-col gap-4
    `,
    ReferenceItem: `
    flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4
    text-gray-700 leading-relaxed text-base sm:text-lg mb-3
    `,
    ReferenceName: `
    min-w-0 sm:min-w-[200px] font-medium text-gray-600
    `,
    ReferenceLink: `
    flex-1
    `,
    Container: `
    flex flex-col gap-4
    `
}

function ConstructReference({Category}) {
    return (
        <div>
            <SubTitle title={Category.name} level={2} />
            {
                Category.subContent.map((item) => (
                    <div key={item.id} className={Style.ReferenceItem}>
                        <div className={Style.ReferenceName}>
                            {item.name}
                        </div>
                        <div className={Style.ReferenceLink}>
                            <Reference url={item.url} content={item.content} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

function FullStackReferenceTitle() {
    return (
        <div>
            <Title title="Full Stack Resources Reference" />
            <p className={Style.Paragraph}>
                Here are some quick reference for full stack development. Divided into different categories.
                Each of them has a curated list of resources about frameworks, libraries, and tools.
            </p>
            <p className={Style.Paragraph}>
                <strong>Note:</strong> This page is a collection of reference for full stack development.
                Only meant for quick reference, not for comprehensive learning.
            </p>
        </div>
    )
}

export default function FullStackReferencePage() {
    return (
        <Card content={
            <div className={Style.Container}>
            <FullStackReferenceTitle />
            {
                FullStackReference.map((item) => (
                    <ConstructReference Category={item} key={item.id} />
                ))
            }
            </div>
        } />
    )
}