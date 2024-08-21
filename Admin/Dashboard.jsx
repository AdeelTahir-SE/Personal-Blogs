import { fetchdata } from "../src/components/functions";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [articles, setarticles] = useState();
  useEffect(() => {
    const result = fetchdata("/api/articles", "GET");
    setarticles(result.json().articles);
  }, []);
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h1>Personal Blog</h1>
        <button>+ Add</button>
      </div>
      <div>
        {articles &&
          articles.map((v, i, arr) => {
            return (
              <div key={v.key} className="flex flex-row justify-between items-center">
                <h2>{v.title}</h2>
                <div className="flex flex-row justify-between items-center">
                  <button className="text-gray-400">Edit</button>
                  <button className="text-gray-400">Delete</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
