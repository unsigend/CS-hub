/**
 * @author: Qiu Yixiang
 * @date: 2025-06-24
 * @description: Main App Component for the CS-hub project
 */


/**
 * The whole structure of the app is as follows:
 * 
 * NavBar: Full Width Screen Navigation Bar
 * Container: The main content of the page (SideBar + Content)
 * Footer: Full Width Screen Footer
 */
import NavBar from "@/Components/Layout/NavBar";
import Container from "@/Components/Layout/Container";
import Footer from "@/Components/Layout/Footer";

export default function App() {
  return (
    <div>
      <NavBar />
      <Container />
      <Footer />
    </div>
  )
}