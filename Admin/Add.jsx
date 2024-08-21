import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";
async function postarticle(title,date,content){
    const result = await fetch("api/articles","POST",{
        title:title,
        date:date,
        content:content
    });
    return result;
}


export default function Edit(){
    const[title,settitle]=useState();
    const[date,setdate]=useState();
    const[content,setcontent]=useState();
    const [published,setpublished]=useState(false)
    useEffect(()=>{
        if(published===true){
postarticle(title,date,content);
const navigate=useNavigate();
navigate("/Home")
        }
    },[published]);
return(<div className="flex flex-col justify-center items-center">
    <h1 className="text-center">Add Article</h1>
    <form action="POST" className="flex flex-col justify-center items-start">
        <input type="text" name="title" placeholder="Title" value={title} onChange={(e)=>{settitle(e.target.value)}}required />
        <input type="text" name="publishing date" placeholder="publishing date" value={date} onChange={(e)=>{setdate(e.target.value)}} required/>
        <textarea name="content" placeholder="Content" rows={8} cols={12} required value={content}onChange={(e)=>{setcontent(e.target.value)}} />
        <button onClick={()=>{setpublished(true);}}>Publish</button>
    </form>
</div>)


}