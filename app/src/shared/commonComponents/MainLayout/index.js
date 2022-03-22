import Header from "../Header";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Header />
      <div>{ children }</div>
    </main>
  );
};
export default MainLayout;
