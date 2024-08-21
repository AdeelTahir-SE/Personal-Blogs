import { useState,useEffect } from "react"
import { fetchdata } from "../src/components/functions";
import { useParams } from "react-router-dom";
export default function Article(){
    const {id}=useParams()
    const [article,setarticle]=useState();
    useEffect(()=>{
        const result =fetchdata(`api/articles/:${id}",'GET'`);
        setarticle(result.json().article);
    });
    return(
        <div>
            <h1 className="text-left px-2">Article</h1>
            <div className="border-2 border-gray-200 p-2 m-2">
                <h2 className="text-black text-left">{article.creationtime}</h2>
                <p  className="text-gray-300 text-right">{article.content}</p>
            </div>
        </div>
    )
}