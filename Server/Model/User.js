const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
    address: { type: String, required: true }
});

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }]
});

const User = mongoose.model("User", UserSchema);
const Address = mongoose.model("Address", AddressSchema);

module.exports = { User, Address };
