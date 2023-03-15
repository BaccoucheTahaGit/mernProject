const mongoose = require('mongoose');


const topicSchema = mongoose.Schema({
    title: String,
    description: String,
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }, 
})

var TopicMessage = mongoose.model('TopicMessage', topicSchema);
module.exports = { TopicMessage };
