import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: String,
  },
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  location: String,
  description: String,
  picturePath: String,
  userPicturePath: String,
  likes: {
    type: Map,
    of: Boolean,
  },
  comments: {
    types: Array,
    default: [],
  },
});

const Post = mongoose.model("Post", PostSchema);
export default Post;
