import  express  from "express";
import {addComment,deleteComment,getAllComments} from"../Controllers/Comment.js";
import { verifyToken } from "../verifyToken.js";

const router=express.Router();

router.post("/",verifyToken,addComment)
router.delete("/:id",verifyToken,deleteComment)
router.get("/:videoId",getAllComments)
export default router;