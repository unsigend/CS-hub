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

// Style for the Title component
const TitleStyle = {
    Title: `
    text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6
    `,
    SubTitle1: `
    text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6
    `,
    SubTitle2: `
    text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-5
    `,
    SubTitle3: `
    text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4
    `,
    SubTitle4: `
    text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3
    `,
    SubTitle5: `
    text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3
    `,
}

export function Title({title}) {
    return (
        <h1 className={TitleStyle.Title}>{title}</h1>
    )
}

export function SubTitle({title, level = 2}) {
    // Map level to style and tag
    const getSubTitleStyle = (level) => {
        switch (level) {
            case 1: return TitleStyle.SubTitle1;
            case 2: return TitleStyle.SubTitle2;
            case 3: return TitleStyle.SubTitle3;
            case 4: return TitleStyle.SubTitle4;
            case 5: return TitleStyle.SubTitle5;
            default: return TitleStyle.SubTitle2;
        }
    };

    // Create the appropriate heading tag based on level
    const style = getSubTitleStyle(level);
    
    switch (level) {
        case 1: return <h1 className={style}>{title}</h1>;
        case 2: return <h2 className={style}>{title}</h2>;
        case 3: return <h3 className={style}>{title}</h3>;
        case 4: return <h4 className={style}>{title}</h4>;
        case 5: return <h5 className={style}>{title}</h5>;
        default: return <h2 className={style}>{title}</h2>;
    }
}

