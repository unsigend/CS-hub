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
 * @description: CodeBar component used as a container for the code bar
 */

// style for the CodeBar component
const CodeBarStyle = {
  CodeBar: `
    flex items-center justify-center p-8
    `,
  CodeBarContainer: `
    bg-gray-900 rounded-2xl p-6 shadow-2xl 
    transform rotate-3 hover:rotate-0 
    transition-transform duration-500 max-w-md
    `,
  CodeBarHeader: `
    flex gap-2 mb-4
    `,
  CodeBarHeaderItem: `
    w-3 h-3 rounded-full
    `,
};

const CodeBar = () => {
  return (
    <div className={CodeBarStyle.CodeBar}>
      <div className={CodeBarStyle.CodeBarContainer}>
        <div className={CodeBarStyle.CodeBarHeader}>
          <div className={CodeBarStyle.CodeBarHeaderItem + " bg-red-500"}></div>
          <div
            className={CodeBarStyle.CodeBarHeaderItem + " bg-yellow-500"}
          ></div>
          <div
            className={CodeBarStyle.CodeBarHeaderItem + " bg-green-500"}
          ></div>
        </div>

        <div className="font-mono text-sm leading-relaxed">
          <div className="mb-1">
            <span className="text-purple-400">function</span>
            <span className="text-blue-400"> learnCS</span>
            <span className="text-white">()</span>
          </div>

          <div className="mb-1 text-white">{`{`}</div>

          <div className="mb-1 ml-4">
            <span className="text-purple-400">const</span>
            <span className="text-white"> journey = </span>
            <span className=" bg-opacity-30 text-green-400 px-1 rounded">
              'amazing'
            </span>
            <span className="text-white">;</span>
          </div>

          <div className="mb-1 ml-4">
            <span className="text-purple-400">return</span>
            <span className="text-green-400"> 'success'</span>
            <span className="text-white">;</span>
          </div>

          <div className="mb-3 text-white">{`}`}</div>

          <div className="mb-1 text-gray-500">{`// Your path starts here`}</div>
          <div className="text-blue-400">
            learnCS<span className="text-white">();</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBar;
