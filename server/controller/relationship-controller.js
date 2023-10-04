import Relationship from '../schema/relationship-schema.js';

// Create a new relationship type
export const createRelationship = async (req, res) => {
  const { type, userId } = req.body;

  try {
    const newRelationship = new Relationship({
      type,
      userId, // Link to the user
    });

    await newRelationship.save();
    res.status(201).json(newRelationship);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Fetch all relationship types
export const getRelationships = async (req, res) => {
  try {
    const relationships = await Relationship.find({});
    res.status(200).json(relationships);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a relationship type by ID
export const updateRelationship = async (req, res) => {
  const { id } = req.params;
  const { type, userId } = req.body;

  try {
    const updatedRelationship = {
      type,
      userId, // Link to the user
    };

    await Relationship.findByIdAndUpdate(id, updatedRelationship, { new: true });
    res.status(201).json(updatedRelationship);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Delete a relationship type by ID
export const deleteRelationship = async (req, res) => {
  const { id } = req.params;

  try {
    await Relationship.findByIdAndRemove(id);
    res.status(200).json({ message: "Relationship type deleted successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
