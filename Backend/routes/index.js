const express = require('express');
const router = express.Router();
const { AddBlog } = require('../controller/BlogPage/Blog_Entry'); 
const getBlog = require('../controller/BlogPage/Blog_fetch');
const DeleteBlog = require('../controller/BlogPage/BlogDelete');
const Login = require('../controller/User/Login');
const SignUp = require('../controller/User/SignUp');
const authToken = require('../middlewear/authToken');
const ProfilePage = require('../controller/User/ProfilePage');


//Blog Routes
router.post('/addBlog', AddBlog);
router.get('/getBlog', getBlog);
router.delete('/deleteBlog', DeleteBlog);  


//User Routes
router.post('/login', Login);
router.post('/signup', SignUp);
router.get('/profile', authToken, ProfilePage);


module.exports = router;
