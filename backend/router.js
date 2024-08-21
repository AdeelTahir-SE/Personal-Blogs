import express from "express"
import fs from "fs"
import fse from "fs-extra"
const router =express.Router();
async function readDB(){
    const Articles =await fse.readJSON("../backend/db.json");
    return Articles;
}

router.get("articles",async (req,res)=>{
const Articles =await readDB();
res.json(Articles.articles);
});


router.get("articles/:id",async(req,res)=>{
    const Articles =await readDB();
    const article =Articles.filter((v,i,arr)=>{Articles.articles.id===v.id})
return article[0];
});


router.post("articles/",async(req,res)=>{
    let Articles =await readDB();
   Articles= Articles.articles.push(req.body.artcle)
await fse.writeJSON("../backend/db.json",Articles);
})


router.put("articles/:id",async(req,res)=>{
    const Articles =await readDB();
    const article =Articles.filter((v,i,arr)=>{Articles.articles.id!==v.id});
article.push(req.body.article);
await fse.writeJSON("../backend/db.json",article);

});


export default router;