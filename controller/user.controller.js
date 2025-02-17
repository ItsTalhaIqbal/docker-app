import { UserModel } from "../schema/user.schema.js";
import { userValidation } from "../Validation/user.validation.js";
//JOI package
// add huskey {extention}

export const CreateUser = async (req, res) => {
  const { name, email, phone } = req.body;
  const { error } = userValidation.validate({ name, email, phone });
  console.log(error);

  if (error) {
    return res.status(400).send({ message: "data is not valid" });
  }

  try {
    const user = await UserModel.create({ name, email, phone });
    res.status(200).send({ message: "user saved to database", user });
  } catch (error) {
    res.status(500).send({ error: "unable to save user to database" });
  }
};

export const GetAllUsers = async (req, res) => {
  try {
    const data = await UserModel.find();
    res.status(200).send({ message: "SUCCESS", data });
  } catch (error) {
    res.status(500).send({ error: "unable to get Users from database" });
  }
};

export const GetUser = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await UserModel.findById(id);
    res.status(200).send({ message: "SUCCESS", data });
  } catch (error) {
    res.status(500).send({ error: "unable to get Users from database" });
  }
};

export const UpdateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  const { error } = userValidation.validate({ name, email, phone });
  console.log("error", error);

  if (error) {
    return res.status(400).json({ message: "data is not valid" });
  }
  try {
    const data = await UserModel.findByIdAndUpdate(id, { name, email, phone });
    res.status(200).send({ message: "User updated successfully", data });
  } catch (error) {
    res.status(500).send({ error: "Unable to update user" });
  }
};

export const DeleteUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    await UserModel.findByIdAndDelete(id);
    res.status(200).send({ message: "SUCCESS" });
  } catch (error) {
    res.status(500).send({ error: "unable to get data from database" });
  }
};
