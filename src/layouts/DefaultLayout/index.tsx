import { Outlet } from "react-router-dom";
import { Header } from "../../compontens/Header";
import { LayoutContainer } from "./style";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
