import {useState,useEffect} from "react"
import { fetchdata } from "../src/components/functions";

export default function Home(){
    const [articles,setarticles]=useState();
    useEffect(()=>{
const result =fetchdata("api/articles",'GET');
setarticles(result.json().articles);

    });
    return (
        <div>
           <h1 className="text-left px-2">Personal Blog</h1>
{articles&&articles.map((v,i,arr)=>{
    return(
        <div key={i} className="border-2 border-gray-200 p-2 m-2">
            <h2 className="text-black text-left">{v.title}</h2>
            <p  className="text-gray-300 text-right">{v.creationtime}</p>
        </div>
    )
})}

        </div>
    )
}
