import React, { useEffect, useState } from "react";
import "./styles/feed.css";
import InputOption from "./inputOption";
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@material-ui/icons";
import Post from "./post";
import { db } from "../../firebase/firebase";
import firebase from "firebase";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

export default function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      {/* INPUT */}
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />

          <form>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              type="text"
            />
            <button onClick={handleSubmit} type="submit"></button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDay} title="Article" color="#7FC15E" />
        </div>
      </div>

      <FlipMove>
        {/* POSTS */}
        {posts.map(({ id, data: { name, description, photoUrl, message } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}
