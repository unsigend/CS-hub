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

export default function FullStackPage() {
    return (
        <div className="flex flex-col gap-10">
            <Note
                title="Full Stack Development Road Map"
                content={
                    <div className="flex flex-row gap-8">
                        <div className="flex flex-col">
                            <Paragraph content="This page is a road map for full stack development. This is a skill and practice focused road map.
                            If you want to learn more concept based way can use the university courses for full stack development." />
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
                            <Paragraph content="This road map has some personal bias and may not suitable for everyone. 
                            Consider this as a road map reference. If you have any suggestion or feedback, please feel free to contact me." />
                            <Paragraph content="This page is a work in progress. I will update it as I learn more about full stack development." />

                            <SubTitle title="Structure" level={3} />
                            <Paragraph content="This road map is structured in a way that is easy to follow and understand.
                            The structure is as follows:"/>
                            <ul className="list-disc list-inside mb-2">
                                <li>Frontend Development</li>
                                <li>Backend Development</li>
                                <li>Database</li>
                            </ul>
                            <Paragraph content="If you want to focused on specific technique stack, 
                            you can just skip the other part. And focus on which part you want." />
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
                            <Paragraph content="Frontend road map part will started from basics of web development
                            and shift to more advanced topics like Framework, Library, and etc."/>
                            <Paragraph content="Don't need to follow exactly as the same order, you can skip some topics that you already know them.
                            Or some of the frameworks are optional, you can skip them if you don't want to learn them." />
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