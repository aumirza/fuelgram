import { AttachFileIcon } from "@/components/ui/attach-file";
import { Button } from "@/components/ui/button";
import { MapPinIcon } from "@/components/ui/map-pin";
import CreateFuelForm from "@/components/forms/CreateFuelForm";
import Modal from "./Modal";

function CreateFuelModel() {
  return (
    <Modal
      title="Create Fuel"
      trigger={
        <div className="p-5 bg-white rounded-lg shadow-xl ">
          <div className="mb-2 border-2 rounded-xl">
            <div className="p-5 py-8 text-3xl hover:cursor-text">
              <span>Any Creative Thought?</span>
            </div>
          </div>
          <div className="flex">
            <AttachFileIcon />
            <MapPinIcon />
          </div>
        </div>
      }
      action={
        <div className="flex justify-between w-full">
          <div className="flex">
            <AttachFileIcon />
            <MapPinIcon />
          </div>
          <Button className="">Fuelup</Button>
        </div>
      }
    >
      <CreateFuelForm />
    </Modal>
  );
}

export default CreateFuelModel;
