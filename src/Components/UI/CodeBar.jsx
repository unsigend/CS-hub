/**
 * @author: Qiu Yixiang
 * @date: 2025-06-26
 * @description: CodeBar Component for the CS-hub project
 */

// Import for the style
import "@/style/style.css";

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
}

export default function CodeBar() {
    return (
        <div className={CodeBarStyle.CodeBar}>
            <div className={CodeBarStyle.CodeBarContainer}>
                <div className={CodeBarStyle.CodeBarHeader}>
                    <div className={CodeBarStyle.CodeBarHeaderItem + " bg-red-500"}></div>
                    <div className={CodeBarStyle.CodeBarHeaderItem + " bg-yellow-500"}></div>
                    <div className={CodeBarStyle.CodeBarHeaderItem + " bg-green-500"}></div>
                </div>
                
                <div className="font-mono text-sm leading-relaxed">
                    <div className="mb-1">
                        <span className="text-purple-400">function</span>
                        <span className="text-blue-400"> learnCS</span><span className="text-white">()</span>
                    </div>
                    
                    <div className="mb-1 text-white">{`{`}</div>
                    
                    <div className="mb-1 ml-4">
                        <span className="text-purple-400">const</span>
                        <span className="text-white"> journey = </span>
                        <span className=" bg-opacity-30 text-green-400 px-1 rounded">'amazing'</span><span className="text-white">;</span>
                    </div>
                    
                    <div className="mb-1 ml-4">
                        <span className="text-purple-400">return</span>
                        <span className="text-green-400"> 'success'</span><span className="text-white">;</span>
                    </div>
                    
                    <div className="mb-3 text-white">{`}`}</div>
                    
                    <div className="mb-1 text-gray-500">{`// Your path starts here`}</div>
                    <div className="text-blue-400">learnCS<span className="text-white">();</span></div>
                </div>
            </div>

        </div>
    )
}