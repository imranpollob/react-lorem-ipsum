import React, { useState } from "react";
import { loremIpsum } from "lorem-ipsum";

function App() {
  const [count, setCount] = useState(1);
  const [sentenceLowerBound, setSentenceLowerBound] = useState(8);
  const [sentenceUpperBound, setSentenceUpperBound] = useState(14);
  const [paragraphLowerBound, setParagraphLowerBound] = useState(4);
  const [paragraphUpperBound, setParagraphUpperBound] = useState(8);
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = () => {
    const generatedText = loremIpsum({
      count: Number(count),
      paragraphLowerBound: Number(paragraphLowerBound), // sentences per paragraph
      paragraphUpperBound: Number(paragraphUpperBound),
      sentenceLowerBound: Number(sentenceLowerBound), // words per sentence
      sentenceUpperBound: Number(sentenceUpperBound),
      units: "paragraphs",
      format: "plain",
    });
    setText(generatedText);
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // best-effort fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };
  return (
    <section className="page">
      <div className="card">
        <h1 className="title">Lorem Ipsum Generator</h1>
        <p className="subtitle">Generate paragraphs with custom lengths.</p>

        <div className="grid">
          <div className="field">
            <label className="label" htmlFor="sentenceLowerBound">Words per sentence (min)</label>
            <input
              type="number"
              id="sentenceLowerBound"
              value={sentenceLowerBound}
              min={1}
              onChange={(e) => setSentenceLowerBound(e.target.value)}
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="sentenceUpperBound">Words per sentence (max)</label>
            <input
              type="number"
              id="sentenceUpperBound"
              value={sentenceUpperBound}
              min={1}
              onChange={(e) => setSentenceUpperBound(e.target.value)}
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="paragraphLowerBound">Sentences per paragraph (min)</label>
            <input
              type="number"
              id="paragraphLowerBound"
              value={paragraphLowerBound}
              min={1}
              onChange={(e) => setParagraphLowerBound(e.target.value)}
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="paragraphUpperBound">Sentences per paragraph (max)</label>
            <input
              type="number"
              id="paragraphUpperBound"
              value={paragraphUpperBound}
              min={1}
              onChange={(e) => setParagraphUpperBound(e.target.value)}
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="count">Paragraphs</label>
            <input
              type="number"
              id="count"
              value={count}
              min={1}
              onChange={(e) => setCount(e.target.value)}
            />
          </div>
        </div>

        <div className="actions">
          <button className="btn primary" onClick={handleSubmit}>Generate</button>
          <button className="btn" onClick={handleCopy} disabled={!text} aria-disabled={!text}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <pre className="result" aria-live="polite">{text}</pre>
      </div>
    </section>
  );
}

export default App;
