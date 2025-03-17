import React from "react";
import "../styles/Japanese.css";

const Japanese = () => {
  return (
    <div className="japanese-container">
      <h2>Japanese Learning</h2>

      {/* Japanese Letters Section */}
      <section>
        <h3>Japanese Letters</h3>
        <table>
          <thead>
            <tr>
              <th>Japanese</th>
              <th>Pronunciation</th>
              <th>English Equivalent</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>あ</td><td>A</td><td>A (as in Apple)</td></tr>
            <tr><td>い</td><td>I</td><td>E (as in Eat)</td></tr>
            <tr><td>う</td><td>U</td><td>U (as in Oops)</td></tr>
            <tr><td>え</td><td>E</td><td>E (as in Egg)</td></tr>
            <tr><td>お</td><td>O</td><td>O (as in Orange)</td></tr>
          </tbody>
        </table>
      </section>

      {/* Basic Japanese Words Section */}
      <section>
        <h3>Basic Japanese Words</h3>
        <table>
          <thead>
            <tr>
              <th>Japanese</th>
              <th>Pronunciation</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>こんにちは</td><td>Konnichiwa</td><td>Hello</td></tr>
            <tr><td>ありがとう</td><td>Arigatou</td><td>Thank you</td></tr>
            <tr><td>さようなら</td><td>Sayounara</td><td>Goodbye</td></tr>
            <tr><td>はい</td><td>Hai</td><td>Yes</td></tr>
            <tr><td>いいえ</td><td>Iie</td><td>No</td></tr>
          </tbody>
        </table>
      </section>

      {/* Sentence Formation Section */}
      <section>
        <h3>Sentence Formation</h3>
        <table>
          <thead>
            <tr>
              <th>Japanese</th>
              <th>Pronunciation</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>私は学生です。</td><td>Watashi wa gakusei desu.</td><td>I am a student.</td></tr>
            <tr><td>あなたは元気ですか？</td><td>Anata wa genki desu ka?</td><td>How are you?</td></tr>
            <tr><td>これは本です。</td><td>Kore wa hon desu.</td><td>This is a book.</td></tr>
            <tr><td>彼は先生です。</td><td>Kare wa sensei desu.</td><td>He is a teacher.</td></tr>
            <tr><td>私の名前はジョンです。</td><td>Watashi no namae wa Jon desu.</td><td>My name is John.</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Japanese;
