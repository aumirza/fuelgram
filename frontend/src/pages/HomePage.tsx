import CreateFuelModel from "@/components/CreateFuelModel";
import PostGrid from "@/components/FuelGrid";

function HomePage() {
  return (
    <div className="max-w-2xl m-auto mt-5">
      <CreateFuelModel />
      <div className="mt-5">
        <PostGrid />
      </div>
    </div>
  );
}

export default HomePage;
