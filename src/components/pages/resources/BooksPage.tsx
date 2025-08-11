/* eslint-disable @typescript-eslint/no-explicit-any */
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

import Card from "@/components/ui/Card";
import { LinkExternal } from "@/components/ui/Link";
import Paragraph from "@/components/ui/Paragraph";
import { SubTitle, Title } from "@/components/ui/Title";

// Import for the data
import booksReference from "@/data/content/resources/books";

// Function to construct the reference for each category
const ConstructReference = ({ Category }: { Category: any }) => {
    return (
        <div className="mb-12 cursor-pointer">
            <SubTitle level={2}>{Category.name}</SubTitle>
            <div className="mt-4 space-y-2 flex flex-col gap-2">
                {Category.books.map((item: any) => (
                    <div
                        key={item.id}
                        className="flex flex-col transition-transform duration-300 
                        origin-left hover:scale-100 hover:translate-x-1"
                    >
                        <LinkExternal
                            href={item.url}
                            className="after:!w-0 hover:after:!w-0 after:!h-0"
                        >
                            {item.name}
                        </LinkExternal>
                        {item.author && (
                            <span className="text-sm text-gray-600 ml-2">
                                by {item.author}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const BookPageTitle = (): React.ReactNode => {
    return (
        <div className="mb-8">
            <Title>Books</Title>
            <Paragraph>
                This page is a collection of books that categorized by different
                categories mainly for the Computer Science. If you want to find
                some full stack or application specific books, you can check the
                specific learning road map page.
            </Paragraph>
        </div>
    );
};

const BooksPage = () => {
    return (
        <Card>
            <BookPageTitle />
            <div className="flex flex-col gap-3">
                {booksReference.map((item) => (
                    <ConstructReference Category={item} key={item.id} />
                ))}
            </div>
        </Card>
    );
};

export default BooksPage;
