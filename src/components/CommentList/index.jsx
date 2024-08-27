import React from "react";
import classnames from "classnames";
import CommentBox from "../CommentBox";
import "./_styles.scss";

const CommentList = ({ comments }) => {
return (
    <div className="root-list">
      {comments.map((el,idx) => {
        return(
        <div
          data-testid="comment-wrapper"
          className={classnames({
            // Should be true for root comment
            "root-comment": idx + 1 < comments.length && comments[idx + 1].parentId !== null   ? false : true,
          })}
          key={el.id}
        >
          {
            // Render comment and it's children here use CommentBox
            <CommentBox comment={el} /> 

          }
        </div>
      )})}
    </div>
  );
};

export default CommentList;
