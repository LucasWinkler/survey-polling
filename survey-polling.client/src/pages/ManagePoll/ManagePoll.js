import React from "react";

export default function ManagePoll() {

    const addQuestion = (event)=>{

    };

    return (
      <div>
        <h1>Morum OSS | Manage Poll</h1>
        <div id="questionContainer">
            <h2>Questions</h2>
            <form onSubmit={addQuestion}>
                <input type="submit" value="Add Question" />
            </form>
        </div>
      </div>
    );
  }