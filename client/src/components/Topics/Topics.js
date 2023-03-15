import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import HottestTopics from "./Hottest/Topic";
import NewestTopics from "./Newest/Topic";
import Topic from "./Topic/Topic";
import Icon from "@mdi/react";
import { mdiTrendingUp, mdiNewBox } from "@mdi/js";
import "./Styles.css";

function Topics() {
  return (
    <Router>
    <main>
      <Icon
        path={mdiTrendingUp}
        title="Hottest Topics"
        size={1}
        horizontal
        vertical
        rotate={90}
        color="red"
        spin
      />
      <Link to="/hottest" key="hottest-link" className="topic-link">
        Hottest Topics
      </Link>
      <Icon
        path={mdiNewBox}
        title="Newest Topics"
        size={1}
        horizontal
        vertical
        rotate={90}
        color="white"
        spin
      />
      <Link to="/newest" key="newest-link" className="topic-link">
        Newest Topics
      </Link>

      <section className="cards-container">
  <Routes >
  <Route path='/hottest' element={<HottestTopics/>} />
  <Route path='/newest' element={<NewestTopics/>} />
  <Route path='/' element={<Topic/>} />
</Routes >
  </section>
    </main>
    </Router>
  );
}

export default Topics;
