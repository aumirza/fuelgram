import useInfiniteScroll from "react-infinite-scroll-hook";
import FuelCard from "./FuelCard";
import { useState } from "react";
import { LoaderIcon } from "lucide-react";

const fuels = [
  {
    id: "sdjfhsfj",
    type: "gallery",
  },
  {
    id: "fghfhf",
    type: "text",
  },
  {
    id: "fghfghfgh",
    type: "create",
  },
  {
    id: "sddfgdsfj",
    type: "gallery",
  },
  {
    id: "sdjfhsfj",
    type: "gallery",
  },
  {
    id: "fghfhf",
    type: "text",
  },
  {
    id: "fghfghfgh",
    type: "create",
  },
  {
    id: "sddfgdsfj",
    type: "gallery",
  },
];

// paginate fuels , each time 2 items
function useLoadFuels() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [error] = useState(null);
  const [items, setItems] = useState(fuels.slice(0, 2));

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setItems([...items, ...fuels.slice(page * 2, page * 2 + 2)]);
      setPage(page + 1);
      setLoading(false);
      if (page >= fuels.length / 2) {
        setHasNextPage(false);
      }
    }, 2000);
  };
  return { loading, items, hasNextPage, error, loadMore };
}

function FuelGrid() {
  const { loading, items, hasNextPage, error, loadMore } = useLoadFuels();

  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
    rootMargin: "0px 0px 400px 0px",
  });

  return (
    <div ref={rootRef} className="grid grid-cols-1 gap-3">
      {items.map((fuel) => {
        return (
          <FuelCard ref={sentryRef} type={fuel.type} key={fuel.id}></FuelCard>
        );
      })}
      {(loading || hasNextPage) && (
        <div className="flex items-center justify-center py-5">
          <div className="animate-spin">
            <LoaderIcon className="size-8" />
          </div>
        </div>
      )}
    </div>
  );
}

export default FuelGrid;
