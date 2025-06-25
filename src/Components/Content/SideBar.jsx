/**
 * @author: Qiu Yixiang
 * @date: 2025-06-24
 * @description: SideBar Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";
import globalStyle from "@/style/style";

// Import for the components
import Category from "@/Components/Content/Category";


// Category List
const CategoryList = [
    {
        CategoryName: "Road Map",
        ID: "_road_map_",
    },
    {
        CategoryName: "University Courses",
        ID: "_university_courses_",
    },
    {
        CategoryName: "Resources",
        ID: "_resources_",
    }
]

// style for the SideBar component
const SideBarStyle = {
    SideBar: `${globalStyle.FlexColContainer} bg-yellow-500 w-[30%]`
}

export default function SideBar() {
    return (
        <div className={SideBarStyle.SideBar}>
            {
                CategoryList.map((category) => (
                    <Category key={category.ID} category={category} />
                ))
            }
        </div>
    )
}