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
 * @description: Simple RoadMapCard component with icon, title, and arrow
 */

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Style for the RoadMapCard
const RoadMapCardStyle = {
  Card: `
    bg-white rounded-lg shadow-lg border border-gray-100
    hover:shadow-xl hover:border-gray-200
    transition-all duration-300 ease-out
    p-4 cursor-pointer group
    transform hover:-translate-y-1
    `,
  Container: `
    flex items-center justify-between
    `,
  LeftSection: `
    flex items-center gap-3 min-w-0 flex-1
    `,
  Icon: `
    w-8 h-8 bg-white rounded-lg flex items-center justify-center
    text-black transition-colors duration-300 flex-shrink-0
    border border-gray-200 group-hover:border-gray-500
    `,
  Title: `
    text-lg font-bold text-gray-900 mr-4
    group-hover:text-black transition-colors duration-300
    truncate
    `,
  Arrow: `
    w-5 h-5 text-gray-400 flex-shrink-0
    group-hover:text-gray-900 group-hover:translate-x-1
    transition-all duration-300
    `,
};

const RoadMapCard = ({
  title,
  icon: Icon,
  to,
}: {
  title: string;
  icon: LucideIcon;
  to: string;
}): React.ReactNode => {
  return (
    <Link to={to} className="block text-decoration-none">
      <div className={RoadMapCardStyle.Card}>
        <div className={RoadMapCardStyle.Container}>
          <div className={RoadMapCardStyle.LeftSection}>
            <div className={RoadMapCardStyle.Icon}>
              <Icon size={18} />
            </div>
            <h3 className={RoadMapCardStyle.Title}>{title}</h3>
          </div>
          <ArrowRight className={RoadMapCardStyle.Arrow} />
        </div>
      </div>
    </Link>
  );
};

export default RoadMapCard;
