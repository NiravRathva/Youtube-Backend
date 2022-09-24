import  express  from "express";
import {updateUser,deleteUser,getUser,subscribe,unsubscribe,like,dislike} from"../Controllers/User.js";
import { verifyToken } from "../verifyToken.js";

const router=express.Router();

// update user
router.put("/:id",verifyToken,updateUser);

// delete user
router.delete("/:id",verifyToken,deleteUser);

// get user
router.get("/find/:id",getUser);

// subscribe user
router.put("/sub/:id",verifyToken,subscribe);

// unsubscribe user
router.put("/unsub/:id",verifyToken,unsubscribe);

// like a video
router.put("/like/:VideoId",verifyToken,like);

// dislike a video 
router.put("/dislike/:VideoId",verifyToken,dislike);

export default router;