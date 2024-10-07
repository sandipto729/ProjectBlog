const BlogModel=require('../../models/BlogModel');

const AddBlog=async(req,res)=>{
    const {title,description,image,content,author,category}=req.body;
    const newBlog=new BlogModel({
        title,
        description,
        image,
        content,
        author,
        category
    });
    try {
        const savedBlog=await newBlog.save();
        res.status(200).json(savedBlog);
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports={AddBlog};
