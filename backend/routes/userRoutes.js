const express = require("express");
const router = express.Router();
const { getProfile, updateProfile, getAllUsers, deleteUser } = require("../controllers/userController");
const { auth } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/roleMiddleware");

// User
router.get("/profile", auth, getProfile);
router.put("/profile", auth, updateProfile);

// Admin
router.get("/users", auth, isAdmin, getAllUsers);
router.delete("/users/:id", auth, isAdmin, deleteUser);

module.exports = router;
