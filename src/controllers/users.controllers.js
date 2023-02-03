import { getUsersServices } from "../services/users.service.js";

export const getUsers = async (req, res) => {
  const response = await getUsersServices();
  res.json({ mensaje: "lista de usuarios", body: response });
};
