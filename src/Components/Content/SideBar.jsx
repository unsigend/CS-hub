/**
 * @author: Qiu Yixiang
 * @date: 2025-06-24
 * @description: SideBar Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";

// Import for the data
import CategoryList from "@/data/Category";

// Import for the components
import Category from "@/Components/Content/Category";

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
    w-58 min-w-58
    md:flex md:flex-col
    md:opacity-100
    opacity-0
    `,
    // Mobile sidebar content container
    SideBarMobileContent: `
    bg-white shadow-2xl
    w-80 max-w-[85vw] h-full
    flex flex-col gap-4
    p-6 pt-24
    overflow-y-auto
    transform transition-transform duration-300 ease-out
    translate-x-0
    border-r-4 border-gray-100
    `,
}

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
    
    // Close sidebar function
    const closeSidebar = () => {
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

    return (
        <div className={SideBarStyle.SideBar} id="SideBar" onClick={handleBackdropClick}>
            {/* Desktop sidebar content - hidden on mobile */}
            <div className="hidden md:flex md:flex-col gap-3">
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