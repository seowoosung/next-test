import { getDefaultLayout, IDefaultLayoutPage } from "@/components/layout/default-layout";

const Home: IDefaultLayoutPage = () => {
  return <div>Hello World</div>;
};

Home.getLayout = getDefaultLayout;
Home.pageHeader = {
  title: "Next Test",
};
export default Home;
