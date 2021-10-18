import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        comment="Nice post"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 4:45PM"
        comment="Great post"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 4:45PM"
        comment="Awesome post"
        image={faker.image.avatar()}
      />
      <ApprovalCard />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
