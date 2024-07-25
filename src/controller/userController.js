import { User } from "../model/schema/userSchema.js";
const signUp = (req, res) => {
  res.send({ message: "signup is working" });
};
const demo = (req, res) => {
  res.send("Working fine");
};

export { signUp };
