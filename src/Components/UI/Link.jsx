/**
 * @author: Qiu Yixiang
 * @date: 2025-06-29
 * @description: Link Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";

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
}

/**
 * @description: Link Component for the CS-hub project
 * @param {string} href - The href of the link
 * @param {React.ReactNode} children - The children of the link
 * @param {string} target - The target of the link
 * @param {string} rel - The rel of the link
 * @returns {React.ReactNode} - The link component
 */
export default function Link({ href, children, target = "_blank", rel = "noopener noreferrer" }) {
    return (
        <a 
            href={href}
            target={target}
            rel={rel}
            className={LinkStyle.Link}
        >
            {children}
        </a>
    )
} 