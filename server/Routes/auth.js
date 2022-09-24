import  express  from "express";
import {signup,signin,googleauth} from"../Controllers/auth.js";
  

const router=express.Router();
// Creating a User 
router.post("/signup",signup)
// signin a User 
router.post("/signin",signin)
// Creating a User with google
router.post("/google",googleauth)
export default router;