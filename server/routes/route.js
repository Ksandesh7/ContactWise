import express from "express";

import { adduser, getUsers, getUser, editUser, deleteUser} from "../controller/user-controller.js";

const router = express.Router();


router.post('/addUser', adduser);
router.get('/allUser', getUsers);
router.get('/:id', getUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

export default router;