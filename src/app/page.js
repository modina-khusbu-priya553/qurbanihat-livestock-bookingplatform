import QurbaniTips from "@/components/Sections/QurbaniTips";
import TopBreeds from "@/components/Sections/TopBreeds";
import Banner from "@/components/Shared/Banner";
import Featured from "@/components/Shared/Featured";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <QurbaniTips></QurbaniTips>
      <TopBreeds></TopBreeds>
    </div>
  );
}
