const cloudinary=require("cloudinary").v2;
const multer=require("multer")();

router.post("/",multer.single("file"),async(req,res)=>{
 const up=await cloudinary.uploader.upload_stream(
   {resource_type:"image"},
   async(err,result)=>{
     await db.query(
      "insert into submissions(task_id,screenshot_url,status) values($1,$2,'pending')",
      [req.body.taskId,result.secure_url]
     );
     res.end();
   }
 );
 up.end(req.file.buffer);
});
