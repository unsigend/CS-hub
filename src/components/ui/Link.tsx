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

/**
 * @description: Link component for the CS-hub project
 * LinkExternal: for external links (base component)
 * LinkInner: for internal links (base component)
 * LinkAligned: for aligned reference links (builds on LinkExternal)
 * LinkVideo: for video reference links (builds on LinkExternal)
 * LinkReading: for reading reference links (builds on LinkExternal)
 */

// Import for the Link component
import { Link } from "react-router-dom";
import { Book, Video } from "lucide-react";

// Base style for all links
const BaseLinkStyle = {
  base: `
    ml-2 text-black font-semibold text-base sm:text-lg
    hover:text-gray-700 transition-colors duration-200
    relative
    after:absolute after:bottom-0 after:left-0
    after:w-0 after:h-0.5 after:bg-black
    after:transition-all after:duration-300
    hover:after:w-full
    `,
  withIcon: `
    inline-flex items-center gap-1
    `,
};

// Layout styles for complex components
const LayoutStyle = {
  alignedContainer: `
    flex flex-row items-start gap-2 sm:gap-4
    text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl mb-3
    `,
  alignedLabel: `
    min-w-[140px] sm:min-w-[160px] md:min-w-[200px] w-[140px] sm:w-[160px] md:w-[200px]
    font-medium text-gray-600 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap
    text-sm sm:text-base md:text-lg
    `,
  alignedContent: `
    flex-1 min-w-0
    `,
};

// Base external link component
const LinkExternal = ({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}): React.ReactNode => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${BaseLinkStyle.base} ${className}`}
    >
      {children}
    </a>
  );
};

// Base internal link component
const LinkInner = ({
  to,
  children,
  className = "",
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link
      to={to}
      className={`${BaseLinkStyle.base} ${className}`}
      target="_self"
    >
      {children}
    </Link>
  );
};

// Aligned link component with name and link
const LinkAligned = ({
  name,
  href,
  children,
}: {
  name: string;
  href: string;
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <div className={LayoutStyle.alignedContainer}>
      <div className={LayoutStyle.alignedLabel}>{name}</div>
      <div className={LayoutStyle.alignedContent}>
        <LinkExternal href={href}>{children}</LinkExternal>
      </div>
    </div>
  );
};

// Video link component
const LinkVideo = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <LinkExternal href={href} className={BaseLinkStyle.withIcon}>
      <Video />
      {children}
    </LinkExternal>
  );
};

// Reading link component
const LinkReading = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <LinkExternal href={href} className={BaseLinkStyle.withIcon}>
      <Book />
      {children}
    </LinkExternal>
  );
};

export { LinkExternal, LinkInner, LinkAligned, LinkVideo, LinkReading };
