import React from "react";
import "../styles/Japanese.css";

const hiragana = [
  { letter: "あ", romaji: "a" }, { letter: "い", romaji: "i" }, { letter: "う", romaji: "u" },
  { letter: "え", romaji: "e" }, { letter: "お", romaji: "o" },
  { letter: "か", romaji: "ka" }, { letter: "き", romaji: "ki" }, { letter: "く", romaji: "ku" },
  { letter: "け", romaji: "ke" }, { letter: "こ", romaji: "ko" },
  { letter: "さ", romaji: "sa" }, { letter: "し", romaji: "shi" }, { letter: "す", romaji: "su" },
  { letter: "せ", romaji: "se" }, { letter: "そ", romaji: "so" },
  { letter: "た", romaji: "ta" }, { letter: "ち", romaji: "chi" }, { letter: "つ", romaji: "tsu" },
  { letter: "て", romaji: "te" }, { letter: "と", romaji: "to" },
  { letter: "な", romaji: "na" }, { letter: "に", romaji: "ni" }, { letter: "ぬ", romaji: "nu" },
  { letter: "ね", romaji: "ne" }, { letter: "の", romaji: "no" },
  { letter: "は", romaji: "ha" }, { letter: "ひ", romaji: "hi" }, { letter: "ふ", romaji: "fu" },
  { letter: "へ", romaji: "he" }, { letter: "ほ", romaji: "ho" },
  { letter: "ま", romaji: "ma" }, { letter: "み", romaji: "mi" }, { letter: "む", romaji: "mu" },
  { letter: "め", romaji: "me" }, { letter: "も", romaji: "mo" },
  { letter: "や", romaji: "ya" }, { letter: "ゆ", romaji: "yu" }, { letter: "よ", romaji: "yo" },
  { letter: "ら", romaji: "ra" }, { letter: "り", romaji: "ri" }, { letter: "る", romaji: "ru" },
  { letter: "れ", romaji: "re" }, { letter: "ろ", romaji: "ro" },
  { letter: "わ", romaji: "wa" }, { letter: "を", romaji: "wo" }, { letter: "ん", romaji: "n" }
];

const words = [
  { jp: "ありがとう", romaji: "arigatou", meaning: "Thank you" },
  { jp: "こんにちは", romaji: "konnichiwa", meaning: "Hello" },
  { jp: "さようなら", romaji: "sayounara", meaning: "Goodbye" },
  { jp: "すみません", romaji: "sumimasen", meaning: "Excuse me" },
  { jp: "はい", romaji: "hai", meaning: "Yes" },
  { jp: "いいえ", romaji: "iie", meaning: "No" },
  { jp: "愛", romaji: "ai", meaning: "Love" },
  { jp: "友達", romaji: "tomodachi", meaning: "Friend" },
  { jp: "家", romaji: "ie", meaning: "House" },
  { jp: "水", romaji: "mizu", meaning: "Water" },
  { jp: "食べ物", romaji: "tabemono", meaning: "Food" },
  { jp: "時間", romaji: "jikan", meaning: "Time" },
  { jp: "車", romaji: "kuruma", meaning: "Car" },
  { jp: "お金", romaji: "okane", meaning: "Money" },
  { jp: "学校", romaji: "gakkou", meaning: "School" },
  { jp: "先生", romaji: "sensei", meaning: "Teacher" },
  { jp: "犬", romaji: "inu", meaning: "Dog" },
  { jp: "猫", romaji: "neko", meaning: "Cat" },
  { jp: "朝", romaji: "asa", meaning: "Morning" },
  { jp: "夜", romaji: "yoru", meaning: "Night" },
  { jp: "天気", romaji: "tenki", meaning: "Weather" },
  { jp: "音楽", romaji: "ongaku", meaning: "Music" },
  { jp: "映画", romaji: "eiga", meaning: "Movie" },
  { jp: "仕事", romaji: "shigoto", meaning: "Work" },
  { jp: "楽しい", romaji: "tanoshii", meaning: "Fun" },
  { jp: "元気", romaji: "genki", meaning: "Healthy/Energetic" },
  { jp: "本", romaji: "hon", meaning: "Book" },
  { jp: "電話", romaji: "denwa", meaning: "Phone" },
  { jp: "買い物", romaji: "kaimono", meaning: "Shopping" },
  { jp: "公園", romaji: "kouen", meaning: "Park" },
  { jp: "食べる", romaji: "taberu", meaning: "To eat" },
  { jp: "飲む", romaji: "nomu", meaning: "To drink" },
  { jp: "話す", romaji: "hanasu", meaning: "To speak" },
  { jp: "聞く", romaji: "kiku", meaning: "To listen" },
  { jp: "行く", romaji: "iku", meaning: "To go" },
  { jp: "来る", romaji: "kuru", meaning: "To come" },
  { jp: "見る", romaji: "miru", meaning: "To see" },
  { jp: "書く", romaji: "kaku", meaning: "To write" },
  { jp: "歩く", romaji: "aruku", meaning: "To walk" },
  { jp: "走る", romaji: "hashiru", meaning: "To run" }
];

const sentences = [
  { jp: "私は学生です。", romaji: "Watashi wa gakusei desu.", meaning: "I am a student." },
  { jp: "これは本です。", romaji: "Kore wa hon desu.", meaning: "This is a book." },
  { jp: "あなたの名前は何ですか？", romaji: "Anata no namae wa nan desu ka?", meaning: "What is your name?" },
  { jp: "私は日本語を勉強しています。", romaji: "Watashi wa nihongo o benkyou shiteimasu.", meaning: "I am studying Japanese." },
  { jp: "彼は先生です。", romaji: "Kare wa sensei desu.", meaning: "He is a teacher." },
  { jp: "私の犬はとてもかわいいです。", romaji: "Watashi no inu wa totemo kawaii desu.", meaning: "My dog is very cute." },
  { jp: "私は毎朝コーヒーを飲みます。", romaji: "Watashi wa maiasa koohii o nomimasu.", meaning: "I drink coffee every morning." },
  { jp: "昨日、映画を見ました。", romaji: "Kinou, eiga o mimashita.", meaning: "I watched a movie yesterday." },
  { jp: "あなたはスポーツが好きですか？", romaji: "Anata wa supootsu ga suki desu ka?", meaning: "Do you like sports?" },
  { jp: "公園で散歩をしました。", romaji: "Kouen de sanpo o shimashita.", meaning: "I took a walk in the park." },
  { jp: "私はお金が必要です。", romaji: "Watashi wa okane ga hitsuyou desu.", meaning: "I need money." },
  { jp: "私の夢は日本に行くことです。", romaji: "Watashi no yume wa Nihon ni iku koto desu.", meaning: "My dream is to go to Japan." },
  { jp: "先生に質問があります。", romaji: "Sensei ni shitsumon ga arimasu.", meaning: "I have a question for the teacher." },
  { jp: "私はたくさん食べました。", romaji: "Watashi wa takusan tabemashita.", meaning: "I ate a lot." },
  { jp: "映画を見るのが好きです。", romaji: "Eiga o miru no ga suki desu.", meaning: "I like watching movies." },
  { jp: "あなたの家はどこですか？", romaji: "Anata no ie wa doko desu ka?", meaning: "Where is your house?" },
  { jp: "私の友達はとても親切です。", romaji: "Watashi no tomodachi wa totemo shinsetsu desu.", meaning: "My friend is very kind." },
  { jp: "今日は天気がいいですね。", romaji: "Kyou wa tenki ga ii desu ne.", meaning: "The weather is nice today, isn't it?" },
  { jp: "この音楽はとても美しいです。", romaji: "Kono ongaku wa totemo utsukushii desu.", meaning: "This music is very beautiful." },
  { jp: "毎日日本語を勉強しています。", romaji: "Mainichi nihongo o benkyou shiteimasu.", meaning: "I study Japanese every day." }
];

const Japanese = () => {
  return (
    <div className="japanese-container">
      <h1>Learn Japanese</h1>

      <h2>Hiragana Letters</h2>
      <div className="grid-container">
        {hiragana.map((item, index) => (
          <div key={index} className="grid-item">
            <strong>{item.letter}</strong> ({item.romaji})
          </div>
        ))}
      </div>

      <h2>Basic Japanese Words</h2>
      <div className="grid-container">
        {words.map((item, index) => (
          <div key={index} className="grid-item">
            <strong>{item.jp}</strong> ({item.romaji}) - {item.meaning}
          </div>
        ))}
      </div>

      <h2>Japanese Sentences</h2>
      <div className="sentence-container">
        {sentences.map((item, index) => (
          <div key={index} className="sentence-item">
            <strong>{item.jp}</strong><br />
            <em>({item.romaji})</em><br />
            {item.meaning}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Japanese;
