import NavBar from "@/Components/Layout/NavBar";
import Container from "@/Components/Layout/Container";
import Footer from "@/Components/Layout/Footer";

import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  )
}