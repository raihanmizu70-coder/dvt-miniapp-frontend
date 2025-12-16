const router=require("express").Router();
const db=require("./db");

router.get("/",async(req,res)=>{
 if(req.query.pass!==process.env.ADMIN_PASS)
  return res.status(403).end();
 const r=await db.query("select * from submissions where status='pending'");
 res.json(r.rows);
});

module.exports=router;
