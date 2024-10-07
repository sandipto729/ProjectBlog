const BlogModel=require('../../models/BlogModel');

const GetBlog=async(req,res)=>{
    const blog=await BlogModel.find();
    res.status(200).json(blog);
}
module.exports=GetBlog;