import "./SpeakerVideoSection.css";

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row px-6 md:px-12 lg:px-[100px] py-8 md:py-12 lg:py-20 items-center lg:items-center gap-8 md:gap-12 lg:gap-[100px] self-stretch bg-dark">
      <div className="bento-container">
        <div className="bento-row">
          <section className="video-card">
            <iframe
              className="large-video"
              title="Tedx Talks"
              src="https://www.youtube.com/embed/wH9FD7LVhUU?si=uejcjzN2nW5H6CbX"
            ></iframe>
            <section>
              <p style={{ fontSize: "125%" }}>Diana Vicezar</p>
              {/* <p>Why your career needs a North Star</p> */}
            </section>
          </section>
          <section className="video-card">
            <iframe
              className="large-video"
              title="Tedx Talks"
              src="https://www.youtube.com/embed/5B_tZ4V8Y1E?si=SJqZJMqipkt5XBFc"
            ></iframe>
            <section>
              <p style={{ fontSize: "125%" }}>Kris Engskov</p>
              {/* <p>Why your career needs a North Star</p> */}
            </section>
          </section>
          <section className="video-card">
            <iframe
              className="large-video"
              title="Tedx Talks"
              src="https://www.youtube.com/embed/A_0yyJsJm7M?si=hNvpfQ29UYCSbslZ"
            ></iframe>
            <section>
              <p style={{ fontSize: "125%" }}>Traditional Chinese Dance</p>
              {/* <p>Why your career needs a North Star</p> */}
            </section>
          </section>
        </div>

        <div className="bento-row">
          <section className="video-card">
            <iframe
              className="large-video"
              title="Tedx Talks"
              src="https://www.youtube.com/embed/iZNNnN_1QYc?si=6CwZFlRZ_d5GBR9J"
            ></iframe>
            <section>
              <p style={{ fontSize: "125%" }}>Ana Maria Pinto da Silva</p>
              {/* <p>Why your career needs a North Star</p> */}
            </section>
          </section>
          <section className="video-card">
            <iframe
              className="large-video"
              title="Tedx Talks"
              src="https://www.youtube.com/embed/Rx2_J2cRQoc?si=_QIHOIQ8PDwPOi9H"
            ></iframe>
            <section>
              <p style={{ fontSize: "125%" }}>Developpe Dance Club</p>
              {/* <p>Why your career needs a North Star</p> */}
            </section>
          </section>
          <section className="video-card">
            <iframe
              className="large-video"
              title="Tedx Talks"
              src="https://www.youtube.com/embed/kxIHZhrfi-A?si=MT2bTBwdAWBvrSru"
            ></iframe>
            <section>
              <p style={{ fontSize: "125%" }}>Gresshaa Mehta</p>
              {/* <p>Why your career needs a North Star</p> */}
            </section>
          </section>
        </div>

        <div className="bento-row">
          <section className="video-card">
            <iframe
              className="large-video"
              title="Tedx Talks"
              src="https://www.youtube.com/embed/yoc36WXD8fI?si=CzrXuWVZceCeniFr"
            ></iframe>
            <section>
              <p style={{ fontSize: "125%" }}>Doc Wilson</p>
              {/* <p>Why your career needs a North Star</p> */}
            </section>
          </section>
          <section className="video-card">
            <iframe
              className="large-video"
              title="Tedx Talks"
              src="https://www.youtube.com/embed/ViXn0g5lMug?si=2ncuRhYqmU_yjtK1"
            ></iframe>
            <section>
              <p style={{ fontSize: "125%" }}>Furmata Acapella</p>
              {/* <p>Why your career needs a North Star</p> */}
            </section>
          </section>
          <section className="video-card">
            <iframe
              className="large-video"
              title="Tedx Talks"
              src="https://www.youtube.com/embed/5JsT0aic_n0?si=tf41w7EbMZVp7KQg"
            ></iframe>
            <section>
              <p style={{ fontSize: "125%" }}>Michael Wang</p>
              {/* <p>Why your career needs a North Star</p> */}
            </section>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
