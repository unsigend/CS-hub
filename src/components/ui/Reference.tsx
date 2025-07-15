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

// Style for the Reference component
const ReferenceStyle = {
  Reference: `
    ml-2 text-black font-semibold
    hover:text-gray-700 transition-colors duration-200
    `,
};

// Style for the ReferenceAligned component
const ReferenceAlignedStyle = {
  ReferenceItem: `
    flex flex-row flex-wrap items-start gap-2 sm:gap-4
    text-gray-700 leading-relaxed text-base sm:text-lg mb-3
    `,
  ReferenceName: `
    min-w-fit sm:min-w-[180px] md:min-w-[220px] font-medium text-gray-600 flex-shrink-0
    `,
  ReferenceLink: `
    flex-1 min-w-0
    `,
};

const Reference = ({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={ReferenceStyle.Reference}
    >
      {children}
    </a>
  );
};

const ReferenceAligned = ({
  name,
  url,
  children,
}: {
  name: string;
  url: string;
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <div className={ReferenceAlignedStyle.ReferenceItem}>
      <div className={ReferenceAlignedStyle.ReferenceName}>{name}</div>
      <div className={ReferenceAlignedStyle.ReferenceLink}>
        <Reference url={url}>{children}</Reference>
      </div>
    </div>
  );
};

export { Reference, ReferenceAligned };
