import { createError } from "../errorHandler.js"
import User from "../models/User.js";
import Video from "../models/Video.js"

//updateuser
export const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can update only your account!"));
  }
};
//delete user
export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted.");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can delete only your account!"));
  }
}
//getuser
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  }
  catch (err) {
    next(err);
  }

}

//subscribe a user(channel)
export const subscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 }
    })
    res.status(200).json("Subscribed")
  }
  catch (err) {
    next(err);
  }
}
//unsubscribe a user(channel)

export const unsubscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { subscribedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 }
    })
    res.status(200).json("Unsubscribed")
  }
  catch (err) {
    next(err);
  }
}

//like a video
export const like = async (req, res, next) => {
  try {

  }
  catch (err) {
    next(err);
  }
}

//dislike a video
export const dislike = async (req, res, next) => {
  try {

  }
  catch (err) {
    next(err);
  }
}