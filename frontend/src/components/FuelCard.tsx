import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { BookmarkIcon, ChartNoAxesColumn, ForwardIcon } from "lucide-react";
import { MessageCircleIcon } from "./ui/message-circle";
import FuelLikeButton from "./FuelLikeButton";
import { forwardRef } from "react";

const FuelCard = forwardRef<HTMLDivElement, { type: string }>(
  ({ type }, ref) => {
    return (
      <Card ref={ref} className="">
        <CardHeader className="flex flex-row gap-2">
          <div className="overflow-hidden border-2 rounded-full border-gray-44100 size-12">
            <img
              src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1">
            <CardTitle>Ahmadullah Mirza</CardTitle>
            <CardDescription>{new Date().toLocaleString()}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          {type == "gallery" ? (
            <div className="flex flex-col gap-2">
              <div className="ml-5">
                <span>This is gallery content with caption</span>
              </div>
              <img src="https://images.unsplash.com/photo-1512484580809-b5251c5df9dd?q=80&w=1377&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
          ) : null}
          {type === "text" ? (
            <div className="ml-5 text-lg">
              <p>This is text content</p>
            </div>
          ) : null}
          {type === "create" ? (
            <div className="flex items-center justify-center bg-red-500 rounded-lg h-80">
              <p className="text-5xl text-white">This is create content</p>
            </div>
          ) : null}
        </CardContent>
        <div className="flex flex-row items-center justify-between w-full gap-2 border-t-2">
          <FuelLikeButton />
          <div className="flex items-center justify-center flex-grow gap-1">
            <MessageCircleIcon />
            <span>0</span>
          </div>
          <div className="flex items-center justify-center flex-grow gap-1">
            <div className="items-center justify-center p-2 rounded-md cursor-pointer select-none hover:bg-accent transition-colorsflex ">
              <ForwardIcon />
            </div>
            <span>0</span>
          </div>

          <div className="flex items-center justify-center flex-grow gap-1">
            <div className="items-center justify-center p-2 rounded-md cursor-pointer select-none hover:bg-accent transition-colorsflex ">
              <ChartNoAxesColumn />
            </div>
            <span>0</span>
          </div>
          <div className="flex items-center justify-center flex-grow gap-1">
            <div className="items-center justify-center p-2 rounded-md cursor-pointer select-none hover:bg-accent transition-colorsflex ">
              <BookmarkIcon />
            </div>
            <span>0</span>
          </div>
        </div>
      </Card>
    );
  }
);

export default FuelCard;
