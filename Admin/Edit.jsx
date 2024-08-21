import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export default function Edit(){
    const {id}=useParams()
    const[title,settitle]=useState();
    const[date,setdate]=useState();
    const[content,setcontent]=useState();
    const[edited,setedited]=useState(false);


    useEffect(()=>{
if(edited===true){
editarticle(title,date,content);
const navigate=useNavigate();
navigate("/Home")
}
    },[edited])
return(<div className="flex flex-col justify-center items-center">
    <h1 className="text-center">Update Article</h1>
    <form action="POST" className="flex flex-col justify-center items-start">
        <input type="text" name="title" placeholder="Title" value={title} onChange={(e)=>{settitle(e.target.value)}}required />
        <input type="text" name="publishing date" placeholder="publishing date" value={date} onChange={(e)=>{setdate(e.target.value)}} required/>
        <textarea name="content" placeholder="Content" rows={8} cols={12} required value={content}onChange={(e)=>{setcontent(e.target.value)}} />
        <input type="submit" value="Update" onClick={()=>{setedited(true)}} />
    </form>
</div>)


}
async function editarticle(title,date,content){
    const result = await fetch(`api/articles/${id}`,"POST",{
        title:title,
        date:date,
        content:content,
        
    });
    
    return result;
}