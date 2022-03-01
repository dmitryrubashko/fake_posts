import Header from "../header";

const MainLayout = ({children}) => {
  return (
    <main>
      <Header/>
      <div>{children}</div>
    </main>
  );
};

export default MainLayout;
