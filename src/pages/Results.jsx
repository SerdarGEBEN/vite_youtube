import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../utills/api";
import Sidebar from "../compenents/Sidebar";
import VideoCard from "../compenents/VideoCard";

const Results = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [token, setToken] = useState()
  const [data, setData] = useState([]);

  //* URL den aratılan kelimeyi al
  const query = searchParams.get("search_query");

  useEffect(() => {
    const params = {
      query: query,

      /**
       Eğer bir sayfa değeri 1 den büyükse yeni yapılacak istekle önceki 
       isteği tokenını ekleyerek bir sonrakisayfanın verilerini alabiliyoruz.
        
       */
      token: page > 1 ? token : undefined,
    };

    api.get(`/search`, { params }).then((res) => {
      setToken(res.data.continuation);
      setData((prev) => prev.concat(res.data.data));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

  useEffect(() => {
    setData([]);
    setPage(1);
    setToken(undefined);
  }, [query]);



  return (
    <div className="flex gap-3">

     <div>
       <Sidebar />
       </div>

      <div className=" mx-auto overflow-auto  p-4">
        <h2 className="text-xl mb-5">
          <span className="font-bold">{query} </span> için sonuçlar
        </h2>
        <div className="flex flex-col gap-5 justify-center">
          {data?.map((item, index) => item.type === "video" && (
            <VideoCard video={item} isRow={true} key={index} />
          ))}

          <button
          onClick={() => setPage(page + 1)}
          className="bg-zinc-600 py-2 px-5 rounded-md my-10 hover:bg-zinc-800 transition">
            Daha Fazla</button>
        </div>
      </div>
    </div>
  );
};

export default Results;
