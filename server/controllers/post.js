import db from "../db.js";
import jwt from "jsonwebtoken";
export const getPosts = (req, res) => {
  const q = req.query.category
    ? "SELECT * FROM posts WHERE category=? "
    : "SELECT * FROM posts";
  db.query(q, [req.query.category], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q =
    "SELECT `username`, `title`, `desc`, p.img, u.img AS user_img, `category`, `date` FROM users u JOIN posts p ON u.user_id = p.user_id WHERE p.post_id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};
export const addPost = (req, res) => {
  res.json("From controller");
};
export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("User not authenticated");
  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not validated");

    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id` = ? AND `user_id` = ? ";

    db.query(q, [postId, userInfo.id], (err) => {
      if (err) return res.status(403).json("You can only delete your post");
      return res.json("Post has been deleted");
    });
  });
};
export const updatePost = (req, res) => {
  res.json("From controller");
};
