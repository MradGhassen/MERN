const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    Title: { type: String },
    Price: { type: Number },
    Descripssion: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('Product', ProductSchema);
