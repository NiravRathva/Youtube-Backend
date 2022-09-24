import Video from "../models/Video.js"
import { createError } from "../errorHandler.js"

//add video
export const addVideo = async (req, res, next) => {
    try {
        const newVideo = new Video({ userId: req.user.id, ...req.body });
        const saveVideo = await newVideo.save();

        res.status(200).json(saveVideo)
    } catch (error) {
        next(err)
    }
}
//update video
export const updateVideo = async (req, res, next) => {

    try {
        const video = await Video.findById(req.params.id);
        if (!Video) return next(404, "Video not found")
        if (req.user.id === Video.userId) {
            const updatedVideo = await Video.findByIdAndUpdate()
            req.params.id,
            {
                $set: req.body
            }, { new: true }
            res.status(200).json(updatedVideo)
        }
        else {
            return next(createError(403, "You are not authorized to update video"))
        }
    } catch (error) {

    }
}
//delete video
export const deleteVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id);
        if (!Video) return next(404, "Video not found")
        if (req.user.id === Video.userId) {
            await Video.findByIdAndUpdate(req.params.id)
            res.status(200).json("Video hasa been deleted")
        }
        else {
            return next(createError(403, "You are not authorized to update video"))
        }
    } catch (error) {

    }
}
export const getVideo = async (req, res, next) => {
    try {
     const video =await Video.findById(req.params.id);
     res.status(200).json(video)
    } catch (error) {

    }
}
export const addView = async (req, res, next) => {
    try {
        await Video.findByIdAndUpdate(req.params.id,{
            $inc:{views:1}
        })
        res.status(200).json("views has been incresed")

    } catch (error) {

    }
}
export const trenddingVideo = async (req, res, next) => {
    try {
        const videos= await Video.find().sort({views:-1})
        res.status(200).json(videos)
        

    } catch (error) {

    }
}
export const randomVideo = async (req, res, next) => {
    try {
        const videos=await Video.aggregate([{$sample:{size:30}}])
        res.status(200).json(videos)
    } catch (error) {

    }
}
export const subChannelVideo = async (req, res, next) => {
    try {

    } catch (error) {

    }
}
export const getByTag = async (req, res, next) => {
    try {

    } catch (error) {

    }
}
export const searchVideo = async (req, res, next) => {
    try {

    } catch (error) {

    }
}
