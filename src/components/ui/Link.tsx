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
 * LinkExternal: for external links
 * LinkInner: for internal links
 */

// Import for the Link component
import { Link } from "react-router-dom";

// Style for the Link component
const LinkStyle = {
  Link: `
    ml-2 text-black font-semibold
    hover:text-gray-700 transition-colors duration-200
    relative
    after:absolute after:bottom-0 after:left-0
    after:w-0 after:h-0.5 after:bg-black
    after:transition-all after:duration-300
    hover:after:w-full
    `,
};

const LinkExternal = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={LinkStyle.Link}
    >
      {children}
    </a>
  );
};

const LinkInner = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <Link to={to} className={LinkStyle.Link} target="_self">
      {children}
    </Link>
  );
};

export { LinkExternal, LinkInner };
