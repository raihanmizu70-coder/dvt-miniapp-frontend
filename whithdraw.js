router.post("/", async(req,res)=>{
 const {userId,amount,first}=req.body;
 let charge = first ? amount*0.1+10 : amount*0.1;
 let net = amount - charge;
 await db.query(
 "insert into withdraws(user_id,amount,charge,net_amount,status) values($1,$2,$3,$4,'pending')",
 [userId,amount,charge,net]
 );
 res.json({net});
});
