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
 *         Overlay sidebar on mobile that covers main content
 */
const SideBarStyle = {
    SideBar: `
    hidden
    justify-evenly items-start
    fixed top-30 left-10
    gap-3
    w-58 min-w-58
    md:flex flex-col 
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
    return (
        <div className={SideBarStyle.SideBar} id="SideBar">
            {CategoryList.map((category) => (
                <Category key={category.ID} category={category}/>
            ))}
        </div>
    )
}