import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../contexts/SpecialtiesContextProvider";


const Comments = () => {
  const { postComment } = useProducts();
  const [body, setBody] = useState();
  const { id } = useParams();

  function handleSave() {
    if (!body.trim()) {
      alert("Поле 'сообщение' пусто!");
      return;
    }

    let formData = new FormData();
    formData.append("body", body);
    formData.append("doctor", id);
    postComment(formData, id);
  }

  //   function handleDelete(id) {
  //     deleteComment.id;
  //   }
  //   React.useEffect(() => {
  //     setError(false);
  //   }, []);
  return (
    <div className="bodyComments">
      <div className="comment__container">
        <h1 className="comment__title">Оставь отзыв доктору</h1>
        <div className="comment__body">
          <img
            src="http://34.125.127.248/api/v1/comment-favorites/comments/"
            className="comment__avatar"
            alt="avatar"
          />
          <div className="commWidth">
            <textarea
              className="comment__textarea"
              placeholder="Твое сообщение"
              rows="8"
              onChange={(e) => setBody(e.target.value)}
              value={body}
            ></textarea>
            <div className="comment__post">
              {/* <div className="comment__info">Some HTML is OK.</div> */}
              <div>
                <Button className="comment__send" onClick={handleSave}>
                  Отправить
                </Button>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
