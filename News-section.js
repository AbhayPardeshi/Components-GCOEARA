import React from "react";
import { Directions } from "react-advanced-news-ticker";
import ReactDOM from "react-dom";
import "./index.css";
import NewsTicker from "react-advanced-news-ticker-master";

const data = [
  {
    id: 1,
    title:
      "शासकीय अभियात्रिकी व संशोधन महाविद्यालय अवसरी(खुर्द) येथे “आयओटीची व्याप्ती आणि ऑटोमोटिव्ह आणि कृषी उद्योगात त्याचे उपयोग” या वरती ऑनलाईन कार्यशाळा संपन्न",
    newsSrc: "1",
  },
  {
    id: 2,
    title: "आवाहन : सावित्रीबाई फुले पुणे विद्यापीठ",
    newsSrc: "2",
  },
  {
    id: 3,
    title:
      "शासकीय अभियांत्रिकी व संशोधन महाविद्यालयात ग्लोबल टॅलेंट ट्रॅक पुणे यांच्या द्वारे बुद्धिमत्ता चाचणी बाबत विद्यार्थ्याना ऑनलाइन प्रशिक्षण",
    newsSrc: "3",
  },
  {
    id: 4,
    title:
      "शासकीय अभियांत्रिकी व संशोधन महाविद्यालय व टर्मिनल टेक्नोलॉजीज (आय) प्रा. लि. पुणे यांच्यामध्ये शैक्षणिक सामंजस्य",
    newsSrc: "4",
  },
  {
    id: 5,
    title:
      "शासकीय अभियांत्रिकी व संशोधन महाविद्यालय, अवसरी (खुर्द) येथील ऑक्सिजन ऑडिट टीम चे प्रेरणा दायी काम",
    newsSrc: "#",
  },
];

function News() {
  return (
    <section className="news-card">
      {/* Marquee Slider Start */}

      <article className="news-marquee-style">
        <div className="news-heading-div">
          <p> News & Events </p>
        </div>

        <div className="news-marquee-div">
          <marquee
            className="news-marquee"
            behavior="scroll"
            direction="up"
            scrollamount="1"
            height="200px"
          >
            {data.map((news) => {
              const { id, title, newsSrc } = news;
              return (
                <div className="news-heading">
                  <a href={newsSrc}> {title} </a>
                </div>
              );
            })}
          </marquee>
        </div>

        <div className="news-more-div">
          <button className="news-more-btn">More</button>
        </div>
      </article>

      {/* Marquee Slider End */}

      {/* News-Ticker Slider Start  */}

      <article className="news-ticker-style">
        <div className="news-heading-div">
          <p> News & Events </p>
        </div>

        <div className="news-container">
          <NewsTicker
            rowHeight={80}
            // maxRows={3}
            speed={2000}
            direction={Directions.UP}
            duration={4000}
            autoStart={true}
            pauseOnHover={false}
            id="myId"
            className="myClassName1 myClassName2"
          >
            {data.map((news) => {
              const { id, title, newsSrc } = news;
              return (
                <div className="news-heading">
                  <a href={newsSrc}> {title} </a>
                </div>
              );
            })}
          </NewsTicker>
        </div>
        <div className="news-more-div">
          <button className="news-more-btn">More</button>
        </div>
      </article>

      {/* News-Ticker Slider Start  */}
    </section>
  );
}

ReactDOM.render(<News />, document.getElementById("root"));
