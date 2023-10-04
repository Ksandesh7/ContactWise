import User from '../schema/user-schema.js'
import Relationship from '../schema/relationship-schema.js'


export const adduser = async(request, response) => {
    const user =request.body;

    const { relationship } = user;

    const newUser = new User(user);

    const newRelationship = new Relationship({
        type: relationship,
        userId: newUser._id, // Link to the newly created user
    });

    try {
        await newUser.save();
        // Create a new relationship entry and link it to the user's ID
        
        await newRelationship.save(); // Save the relationship
        response.status(201).json(newUser);
    } catch (error) {
        response.status(409).json({message:error.message});
    }
}

export const getUsers = async(request, response) => {

    try {
        const users = await User.find({})
        response.status(200).json(users)
    } catch (error) {
        response.status(404).json({message:error.message});
    }
}

export const getUser = async(request, response) => {

    try {
        const user = await User.find({userId: request.params.id})
        // const user = await User.findById(request.params.id)
        response.status(200).json(user)
    } catch (error) {
        response.status(404).json({message:error.message});
    }
}

export const editUser = async(request, response) => {
    let user = request.body;
    const editUser = new User(user);

    try {
        await User.updateOne({userId: request.params.id}, editUser)
        response.status(201).json(editUser)
    } catch (error) {
        response.status(409).json({message:error.message});
    }
}

export const deleteUser = async(request, response) => {

    try {
        await User.deleteOne({userId: request.params.id})
        response.status(200).json({message: "user deleted successfully"})

    } catch (error) {
        response.status(409).json({message:error.message});
    }
}