import React, { useState, useEffect } from "react";
import axios from "axios";

function Topic() {
  const [topicMessages, setTopicMessages] = useState([]);

  useEffect(() => {
    const fetchTopicMessages = async () => {
      const response = await axios.get("http://localhost:5000/topics");
      setTopicMessages(response.data);
    };

    fetchTopicMessages();
  }, []);

  return (
    <>
      {topicMessages.map((topic) => (
        <div className="card" key={topic._id}>
          <a href="#">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${topic.selectedFile})` }}
            ></div>
            <div className="card-text">
              <h2>{topic.title}</h2>
              <p>{topic.description}</p>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}

export default Topic;
