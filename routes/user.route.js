import { Router } from "express";
import { CreateUser, DeleteUser, GetAllUsers, GetUser, UpdateUser } from "../controller/user.controller.js";

const itemRoute=Router();




itemRoute.post("/users", CreateUser);      
itemRoute.get("/users", GetAllUsers);     
itemRoute.put("/users/:id", UpdateUser);  
itemRoute.delete("/users/:id", DeleteUser); 
itemRoute.get("/users/:id", GetUser);     



export {itemRoute}