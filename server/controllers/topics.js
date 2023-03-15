const { TopicMessage } = require("../models/topicMessage");
const express = require('express');
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const { topic } = require("../routes/topics");
var app = express();
const router = express.Router();
const getTopics = async (req, res) => { 
    try {
        const topicMessages = await TopicMessage.find();
                
        res.status(200).json(topicMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getTopic = async (req, res) => { 
    const { id } = req.params;

    try {
        const topic = await TopicMessage.findById(id);
        
        res.status(200).json(topic);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const search = async (req, res) => {
    try {
        const { search } = req.query;
        if (!search || search.length === 0) {
            return res.status(400).json({ message: 'Invalid search query' });
        }
        const regex = new RegExp(search, 'i');
        const topics = await TopicMessage.find({
          $or: [
            { title: regex },
            { description: regex },
          ]
        });
    
        res.status(200).json(topics);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
 }
 const getHottest = async (req, res) => {
    try {
      const topics = await TopicMessage.find()
      .sort({ likeCount: -1 }); // sort by likeCount in descending order
      res.status(200).json(topics);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  const getNewest = async (req, res) => {
    try {
      const topics = await TopicMessage.find()
        .sort({ createdAt: -1 }); // sort by createdAt in descending order
      res.status(200).json(topics);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  

const createTopic = async (req, res) => {
    console.log("req bodyyyyyyy : "+req.body);
    const { title, description, selectedFile, likeCount,createdAt } = req.body || {};
    const newTopicMessage = new TopicMessage({
        title: title || '',
        description: description || '',
        selectedFile: selectedFile || '',
        likeCount: likeCount || 0,
        createdAt: createdAt ? new Date(createdAt) : Date.now(),
      });

    try {
        await newTopicMessage.save();

        res.status(201).json(newTopicMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const updateTopic =  async (req, res) => {
    const { id } = req.params;
    const { title, description, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No topic with id: ${id}`);

    const updatedTopic = { creator, title, description, selectedFile, _id: id };
 
    await TopicMessage.findByIdAndUpdate(id, updatedTopic, { new: true });

    res.json(updatedTopic);
}
const deleteTopic = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No topic with id: ${id}`);

    await TopicMessage.findByIdAndRemove(id);

    res.json({ message: "Topic deleted successfully." });
}

 const likeTopic = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No topic with id: ${id}`);
    
    const topic = await TopicMessage.findById(id);

    const updatedTopic = await TopicMessage.findByIdAndUpdate(id, { likeCount: topic.likeCount + 1 }, { new: true });
    
    res.json(updatedTopic);
}




module.exports = {getTopics ,getTopic,createTopic,updateTopic, deleteTopic,likeTopic,search,getHottest,getNewest};
