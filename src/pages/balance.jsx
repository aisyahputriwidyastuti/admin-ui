import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const BalancePage = () => {
  return (
    <MainLayout type="balance">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Balances" />
        <Card title="&nbsp;" />
        <Card title="&nbsp;"
        desc="losem insum losem insum losem insum losem insum" /> 
      </div>
      {/* top content end*/}
      {/* botton content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="&nbsp;"
        desc="losem insum losem insum losem insum losem insum" /> 
        <Card />
        <Card />
      </div>

      {/* bottom content end*/}
    </MainLayout>
  );
};

export default BalancePage;