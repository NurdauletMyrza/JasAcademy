import React from 'react';
import TimeAndDate from "./TimeAndDate";

const Comment = ({ comment, depth=0 }) => {
    console.log(comment);
    return (
        <div className="Comment" style={{
            maxWidth: "600px",
            marginLeft: depth * 30 + "px"
        }}>
            <div className="comment-block" style={{
                border: "1px solid #D7D7D7",
                boxSizing: "border-box",
                borderRadius: "4px",
                margin: "10px",
                padding: "10px"
            }}>
                <div className="top" style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "15px"
                }}>
                    <div className="author" style={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <img src={ comment.author.avatarUrl } alt={ comment.author.name} className="avatar" style={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            marginRight: "15px"
                        }}/>
                        <span className="name" style={{
                            fontFamily: 'Work Sans',
                            // fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: "12px",
                            lineHeight: "14px",
                            letterSpacing: "-0.02em"
                        }}>{ comment.author.name }</span>
                    </div>
                    <TimeAndDate created={ comment.created }/>
                </div>
                <div className="text" style={{
                    fontFamily: 'Work Sans',
                    // fontStyle: "normal",
                    // fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "19px",
                    letterSpacing: "-0.02em",
                }}>
                    { comment.text }
                </div>
            </div>
            { comment["answers"] !== undefined && comment["answers"].map((answerComment) =>
                <Comment comment={ answerComment } depth={ 1 } key={ answerComment.id }/>
            )}
        </div>
    );
};

export default Comment;