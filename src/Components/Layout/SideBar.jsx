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

// Import for the style
import "@/style/style.css";

// Import for the data
import CategoryList from "@/data/content/category/categories";

// Import for the components
import Category from "@/components/ui/Category";

/**
 * @description: Style for the SideBar component
 * @style: Fixed positioned sidebar that stays in place on desktop
 *         Beautiful overlay on mobile with backdrop and slide-in animation
 */
const SideBarStyle = {
    SideBar: `
    hidden
    justify-start items-start
    fixed top-30 left-10
    gap-3
    opacity-0
    w-74 min-w-74
    md:py-6 md:pl-3
    md:flex md:flex-col
    md:opacity-100
    md:max-h-[calc(100vh-8rem)]
    md:overflow-y-auto
    `,
    // Mobile sidebar content container
    SideBarMobileContent: `
    bg-white shadow-2xl
    w-80 max-w-[85vw] h-full
    flex flex-col gap-4
    p-6 pt-24 pr-10
    overflow-y-auto
    transform transition-transform duration-300 ease-out
    translate-x-0
    border-r-4 border-gray-100
    `,
}

/**
 * @description: Close sidebar function
 * @usage: Close the sidebar when the backdrop is clicked
 * @returns: void
 */
const closeSidebar = () => {
    // If the window is not mobile, do nothing
    if (window.innerWidth > 768) {
        return;
    }

    const sideBar = document.getElementById("SideBar");
    sideBar.style.opacity = "0";
    sideBar.style.backgroundColor = "rgba(0, 0, 0, 0)";
    sideBar.style.backdropFilter = "blur(0px)";
    
    // Restore body scroll
    document.body.style.overflow = "unset";
    
    // Complete hide after transition
    setTimeout(() => {
        sideBar.style.display = "none";
        sideBar.style.zIndex = "0";
    }, 300);
    
    // Reset hamburger menu state
    window.dispatchEvent(new CustomEvent('closeMobileSidebar'));
};
export { closeSidebar };

/**
 * @description: SideBar Component for the CS-hub project
 * @usage: Import the SideBar component and use it in the App component
 *         It will go through the CategoryList and render the Category component
 *         for each category.
 * @returns: SideBar Component
 */
export default function SideBar() {
    
    // Handle backdrop click to close sidebar
    const handleBackdropClick = (e) => {
        // Only close if clicking the backdrop (empty space), not the sidebar content
        if (e.target.id === 'SideBar') {
            closeSidebar();
        }
    };

    return (
        <div className={SideBarStyle.SideBar} id="SideBar" onClick={handleBackdropClick}>
            {/* Desktop sidebar content - hidden on mobile */}
            <div className="hidden md:flex md:flex-col gap-3 w-[calc(100%-2.5rem)]">
                {CategoryList.map((category) => (
                    <Category key={category.ID} category={category}/>
                ))}
            </div>
            
            {/* Mobile sidebar content - slide in from left */}
            <div className={`${SideBarStyle.SideBarMobileContent} md:hidden`}>
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Categories</h2>
                    <div className="w-12 h-1 bg-black rounded-full"></div>
                </div>
                
                {CategoryList.map((category) => (
                    <Category key={`mobile-${category.ID}`} category={category}/>
                ))}
            </div>
        </div>
    )
}