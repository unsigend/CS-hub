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
 * @description: CourseCard component used as a card for the course
 */

import Card from "@/components/ui/Card";

// Style for the CourseCard component
const CourseCardStyle = {
  Container: `
    text-base
    flex flex-col gap-4 
    sm:gap-6 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]
    `,
  Header: `
    border-b border-gray-200 pb-3 sm:pb-4
    `,
  CourseTitle: `
    text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6
    `,
  CourseTitleLink: `
    text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6
    hover:text-gray-700 transition-colors duration-200
    relative
    after:absolute after:bottom-0 after:left-0
    after:w-0 after:h-0.5 after:bg-black
    after:transition-all after:duration-300
    hover:after:w-full
    `,
  InfoSection: `
    flex flex-col gap-2 sm:gap-3 md:gap-4
    `,
  InfoItem: `
    flex flex-row gap-2 sm:gap-3 items-start
    `,
  InfoLabel: `
    text-sm sm:text-base lg:text-lg font-semibold text-black tracking-wide
    min-w-fit flex-shrink-0
    `,
  InfoContent: `
    text-sm sm:text-base lg:text-lg text-black leading-relaxed
    flex-1
    `,
  ContentArea: `
    pt-2 sm:pt-3 border-t border-gray-100
    `,
};

const CourseCard = ({
  courseName,
  courseUrl,
  from,
  prerequisites,
  programmingLanguage,
  children,
}: {
  courseName: string;
  courseUrl: string;
  from: string;
  prerequisites: string;
  programmingLanguage: string;
  children: React.ReactNode;
}) => {
  const courseContent = (
    <div className={CourseCardStyle.Container}>
      {/* Course Header */}
      <div className={CourseCardStyle.Header}>
        {courseUrl ? (
          <a
            href={courseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={CourseCardStyle.CourseTitleLink}
          >
            {courseName}
          </a>
        ) : (
          <h3 className={CourseCardStyle.CourseTitle}>{courseName}</h3>
        )}
      </div>

      {/* Course Information */}
      <div className={CourseCardStyle.InfoSection}>
        <div className={CourseCardStyle.InfoItem}>
          <div className={CourseCardStyle.InfoLabel}>From:</div>
          <span className={CourseCardStyle.InfoContent}>
            {from || "Not specified"}
          </span>
        </div>

        <div className={CourseCardStyle.InfoItem}>
          <div className={CourseCardStyle.InfoLabel}>Prerequisites:</div>
          <span className={CourseCardStyle.InfoContent}>
            {prerequisites || "Not specified"}
          </span>
        </div>

        <div className={CourseCardStyle.InfoItem}>
          <div className={CourseCardStyle.InfoLabel}>Programming Language:</div>
          <span className={CourseCardStyle.InfoContent}>
            {programmingLanguage || "Not specified"}
          </span>
        </div>
      </div>

      {/* Additional Content */}
      {children && (
        <div className={CourseCardStyle.ContentArea}>{children}</div>
      )}
    </div>
  );

  return <Card>{courseContent}</Card>;
};

export default CourseCard;
