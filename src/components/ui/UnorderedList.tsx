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

const UnorderedListStyle = {
  UnorderedList: `
    list-none space-y-1 mb-4 sm:mb-6 ml-0
    [&>li]:relative [&>li]:pl-6 [&>li]:text-gray-700 
    [&>li]:text-base [&>li]:sm:text-lg [&>li]:leading-relaxed
    [&>li]:transition-colors [&>li]:duration-200
    [&>li:hover]:text-gray-900
    [&>li]:before:content-['•'] [&>li]:before:text-black 
    [&>li]:before:font-bold [&>li]:before:absolute 
    [&>li]:before:left-0 [&>li]:before:top-0
    [&>li]:before:text-lg [&>li]:before:leading-relaxed
    `,
};

const UnorderedList = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return <ul className={UnorderedListStyle.UnorderedList}>{children}</ul>;
};

export default UnorderedList;
