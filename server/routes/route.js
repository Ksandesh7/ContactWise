import express from "express";

import { adduser, getUsers, getUser, editUser, deleteUser, } from "../controller/user-controller.js";
import { createRelationship, getRelationships, updateRelationship, deleteRelationship,} from "../controller/relationship-controller.js";

const router = express.Router();


router.post('/addUser', adduser);
router.get('/allUser', getUsers);
router.get('/:id', getUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

// Relationship routes
router.post("/relationships", createRelationship);
router.get("/relationships", getRelationships);
router.put("/relationships/:id", updateRelationship);
router.delete("/relationships/:id", deleteRelationship);

export default router;