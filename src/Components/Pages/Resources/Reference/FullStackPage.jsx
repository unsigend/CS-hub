/**
 * @author: Qiu Yixiang
 * @date: 2025-07-03
 * @description: Full Stack Reference Page for the CS-hub project
 */

// Import for the Reference component
import Reference from "@/Components/UI/Reference";
import { Title, SubTitle } from "@/Components/UI/Title";
import Card from "@/Components/UI/Card";
import Note from "@/Components/UI/Note";

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
    Box: `
    flex flex-col
    `,
    Container: `
    flex flex-col gap-5
    `
}

function ConstructReference({Category, title}) {
    return (
        <div className={Style.Box}>
            <SubTitle title={title} level={2} />
            <p className={Style.Paragraph}>
                {Category.description}
            </p>
            {
                Category.map((item) => (
                    <div key={item.id}>
                        <SubTitle title={item.name} level={3} />
                        {
                            item.subContent.map((subItem) => (
                                <div className={Style.Paragraph}>
                                    {subItem.name} : <Reference url={subItem.url} content={subItem.content} />
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default function FullStackReferencePage() {
    return (
        <div>
            <Card content={
                <div className={Style.Container}>
                    <div className={Style.Box}>
                        <Title title="Full Stack Resources Reference" />
                        <p className={Style.Paragraph}>
                        Here are some quick reference for full stack development. Divide into three 
                        parts: <strong>Frontend</strong>, <strong>Backend</strong>, and <strong>Database</strong>.
                        Each of them has a curated list of resources about frameworks, libraries, and tools.
                        </p>
                    </div>

                    <ConstructReference Category={FullStackReference.Frontend} title="Frontend" />
                    <ConstructReference Category={FullStackReference.Backend} title="Backend" />
                    <ConstructReference Category={FullStackReference.Database} title="Database" />
                </div>
            } />
        </div>
    )
}