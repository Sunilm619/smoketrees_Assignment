const express = require("express");
const router = express.Router();
const { User, Address } = require("../Model/User");

router.post("/register", async (req, res) => {
    try {
        const newAddress = new Address({ address: req.body.address });
        await newAddress.save();

        const newUser = new User({
            name: req.body.name,
            addresses: [newAddress._id]
        });

        await newUser.save();
        res.status(200).json({ msg: "User and address saved", user: newUser });
    } catch (err) {
        res.status(500).send("Server Error");
    }
});



module.exports = router;
