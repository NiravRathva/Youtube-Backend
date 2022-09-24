import  express  from "express";
import {addVideo,updateVideo,deleteVideo,getVideo,addView,trenddingVideo,randomVideo,subChannelVideo,getByTag,searchVideo} from"../Controllers/Video.js";
import {verifyToken} from "../verifyToken.js"

const router=express.Router();


// add video
router.post("/", verifyToken, addVideo)
//update video 
router.put("/:id", verifyToken, updateVideo)
//delete video 
router.delete("/:id", verifyToken, deleteVideo)
//get videos
router.get("/find/:id", getVideo)
//add views count 
router.put("/view/:id", addView)
//trending videos 
router.get("/trend", trenddingVideo)
//random video
router.get("/random", randomVideo)
//subcribed channel video 
router.get("/sub",verifyToken, subChannelVideo)
//get the vieo by tags
router.get("/tags", getByTag)
//search videos
router.get("/search", searchVideo)
//
export default router;