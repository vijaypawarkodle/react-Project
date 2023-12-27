import { useState } from "react";

export default function TextForm(props) {
  const handleTextchange = (e) => {
    console.log("changing text.........");
    console.log("changing text........." + e.target.value);

    if (e.target.value === " ") {
      console.log("Empty text area");
    } else {
      settext(e.target.value);
    }
  };

  let removeTextClick = () => {
    settext("");
    console.log("textarea cleard........" + text);
  };

  const handleUpClick = () => {
    if (text === "" || text === null || text === undefined) {
      alert("Emptyyyyyyyyyyyy box");
    } else {
      let newtext = text.toUpperCase();
      console.log("clicked1111111111" + newtext);
      settext(newtext);
    }
  };

  const handleLOClick = () => {
    if (text === "" || text === null || text === undefined) {
      alert("Emptyyyyyyyyyyyy box");
    } else {
      let newtext = text.toLowerCase();
      console.log("clicked1111111111" + newtext);
      settext(newtext);
    }
  };
  // let copyText;
  const handleCopy = (copyText) => {
    copyText = document.getElementById("tex").value;
    console.log(copyText);
    setCopyText(copyText);
    navigator.clipboard.writeText(copyText);
  };

  const handleSpace = () => {
    let space = text.split(/[  ]+/);
    settext(space.join());
    console.log("space removed.....");
  };
  const [copyText, setCopyText] = useState(
    "Copy text display here............ "
  );
  const [text, settext] = useState(
    "Iight It is shown by default, until the collapses that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
  );
  return (
    <>
      <div className="container">
        <div className="container">
          <h1 style={{color: brown,
    background: darksalmon}}>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              id="tex"
              rows="6"
              onChange={handleTextchange}
            ></textarea>
          </div>
          <div className="container">
            <h2>Text information</h2>
            <dl className="d-flex p-2">
              <dt className="mx-5">Total Character :</dt>
              <dd>{text.length}</dd>
              <dt className="mx-5">Total Word :</dt>
              <dd>{text.split(" ").length}</dd>
            </dl>
          </div>
        </div>
        <button className="btn btn-danger" onClick={removeTextClick}>
          Remove
        </button>
        <button className="btn btn-info mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-success mx-2" onClick={handleLOClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-warning" onClick={handleCopy}>
          Copy to Clipbord
        </button>
        <button className="btn btn-secondary" onClick={handleSpace}>
          Remove Extra space
        </button>
      </div>
      <h2>Preview your Text</h2>
      <p>{text}</p>
      <h2>Your Copyed....Text is</h2>
      <p> {copyText} </p>
    </>
  );
}
