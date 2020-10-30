import React, { useState } from "react";
import { loremIpsum } from "lorem-ipsum";
import copy from "copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(1);
  const [sentenceLowerBound, setSentenceLowerBound] = useState(10);
  const [sentenceUpperBound, setSentenceUpperBound] = useState(20);
  const [paragraphLowerBound, setParagraphLowerBound] = useState(5);
  const [paragraphUpperBound, setParagraphUpperBound] = useState(15);
  const [text, setText] = useState([]);

  const handleSubmit = () => {
    const generatedText = loremIpsum({
      count: parseInt(count), // Number of "words", "sentences", or "paragraphs"
      paragraphLowerBound: parseInt(paragraphLowerBound), // Min. number of sentences per paragraph.
      paragraphUpperBound: parseInt(paragraphUpperBound), // Max. number of sentences per paragarph.
      sentenceLowerBound: parseInt(sentenceLowerBound), // Min. number of words per sentence.
      sentenceUpperBound: parseInt(sentenceUpperBound), // Max. number of words per sentence.
      units: "paragraph", // paragraph(s), "sentence(s)", or "word(s)"
    });

    copy(generatedText);

    setText(generatedText);

    toast.success("Text copied to clipboard!", {
      autoClose: 2000,
      hideProgressBar: true,
    });
  };
  return (
    <section className="section-wrapper">
      <ToastContainer />
      <div className="wrapper">
        <h1 className="big-text">tired of boring lorem ipsum?</h1>
        <div className="inputs">
          <div className="row">
            <span>Number of sentences per paragraph</span>
            <label htmlFor="sentenceLowerBound">Min</label>
            <input
              type="number"
              name="sentenceLowerBound"
              id="sentenceLowerBound"
              value={sentenceLowerBound}
              min={1}
              onChange={(e) => setSentenceLowerBound(e.target.value)}
            />
            <label htmlFor="sentenceUpperBound">Max</label>
            <input
              type="number"
              name="sentenceUpperBound"
              id="sentenceUpperBound"
              value={sentenceUpperBound}
              min={1}
              onChange={(e) => setSentenceUpperBound(e.target.value)}
            />
          </div>

          <div className="row">
            <span>Number of words per paragraph</span>
            <label htmlFor="paragraphLowerBound">Min</label>
            <input
              type="number"
              name="paragraphLowerBound"
              id="paragraphLowerBound"
              value={paragraphLowerBound}
              min={1}
              onChange={(e) => setParagraphLowerBound(e.target.value)}
            />

            <label htmlFor="paragraphUpperBound">Max</label>
            <input
              type="number"
              name="paragraphUpperBound"
              id="paragraphUpperBound"
              value={paragraphUpperBound}
              min={1}
              onChange={(e) => setParagraphUpperBound(e.target.value)}
            />
          </div>

          <div className="row">
            <label htmlFor="count">Paragraphs</label>
            <input
              type="number"
              name="count"
              id="count"
              value={count}
              min={1}
              onChange={(e) => setCount(e.target.value)}
            />
          </div>
          <div className="row btn-row">
            <button className="btn" onClick={() => handleSubmit()}>
              generate
            </button>
          </div>
        </div>
      </div>
      <div className="result">{text}</div>
    </section>
  );
}

export default App;
