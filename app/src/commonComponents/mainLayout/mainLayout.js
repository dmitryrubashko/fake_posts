import Header from "../header";

const MainLayout = ({children}) => {
  return (
    <div>
      <Header/>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
