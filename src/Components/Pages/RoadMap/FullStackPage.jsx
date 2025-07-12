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

// Import for the Card component
import Card from "@/components/ui/Card";
import {Title, SubTitle} from "@/components/ui/Title";
import Note from "@/components/ui/Note";
import Paragraph from "@/components/ui/Paragraph";
import {ReferenceAligned} from "@/components/ui/Reference";
import FullStackImage from "@/assets/images/fullstackopen.svg";
import {LinkInner} from "@/components/ui/Link";

// Import for the University Courses Path
import {UniversityCoursesPath} from "@/data/content/category/categories";


export default function FullStackPage() {
    return (
        <div className="flex flex-col gap-10">
            <Note
                title="Full Stack Development Road Map"
                content={
                    <div className="flex flex-row gap-8">
                        <div className="flex flex-col">
                            <Paragraph>
                            This page is a road map for full stack development. This is a skill and practice focused road map.
                            If you want to learn more concept based way can use the university courses for full stack development.
                            </Paragraph>
                            <SubTitle title="Reference" level={3} />
                            <ReferenceAligned
                                name="Full Stack Road Map"
                                content="Roadmap.sh Full Stack Road Map"
                                url="https://roadmap.sh/full-stack"
                            />
                            <ReferenceAligned
                                name="Backend Road Map"
                                content="Roadmap.sh Backend Road Map"
                                url="https://roadmap.sh/backend"
                            />
                            <ReferenceAligned
                                name="Frontend Road Map"
                                content="Roadmap.sh Frontend Road Map"
                                url="https://roadmap.sh/frontend"
                            />

                            <SubTitle title="Note" level={3} />
                            <Paragraph>
                            This road map has some personal bias and may not suitable for everyone. 
                            Consider this as a road map reference. If you have any suggestion or feedback, please feel free to contact me.
                            </Paragraph>
                            <Paragraph>
                            This page is a work in progress. I will update it as I learn more about full stack development.
                            </Paragraph>

                            <SubTitle title="Structure" level={3} />
                            <Paragraph>
                            This road map is structured in a way that is easy to follow and understand.
                            The structure is as follows:
                            </Paragraph>
                            <ul className="list-disc list-inside mb-2">
                                <li>Frontend Development</li>
                                <li>Backend Development</li>
                                <li>Database</li>
                            </ul>
                            <Paragraph>
                            If you want to focused on specific technique stack, 
                            you can just skip the other part. And focus on which part you want.
                            </Paragraph>
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={FullStackImage} alt="Full Stack Development" className="w-full h-full" />
                        </div>
                    </div>
                }
            />
            <div className="flex flex-col gap-5">
                <Card
                    content={
                        <>
                            <Title title="Frontend Development" />
                            <Paragraph>
                            Frontend road map part will started from basics of web development
                            and shift to more advanced topics like Framework, Library, and etc.
                            </Paragraph>
                            <Paragraph>
                            Don't need to follow exactly as the same order, you can skip some topics that you already know them.
                            Or some of the frameworks are optional, you can skip them if you don't want to learn them.
                            </Paragraph>

                            <SubTitle title="Programming Language" level={2} />
                            <Paragraph>
                            The first part of the frontend development is the programming language.
                            Namely HTML, CSS and JavaScript. Below are the concept based road map. If you like a more streamline learning, 
                            reference the<LinkInner to={`${UniversityCoursesPath}/full-stack-development/berkeley-cs-198-99`}>
                            Berkeley CS 198-99 </LinkInner>
                            for more information.
                            </Paragraph>

                            <SubTitle title="HTML" level={3} />
                            <Paragraph>
                            HTML is the standard markup language for creating web pages.
                            It is used to create the structure of a web page. 
                            </Paragraph>
                            
                        </>
                    }
                />

                <Card
                    content={
                        <>
                            <Title title="Backend Development" />
                        </>
                    }
                />

                <Card
                    content={
                        <>
                            <Title title="Database" />
                        </>
                    }
                />
            </div>
        </div>
    )
}