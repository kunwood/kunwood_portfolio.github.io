import React from "react";

const contactText = [
  {
    link: "https://mail.naver.com/v2/new",
    title: "Naver : gwkim9205@naver.com",
  },
  {
    link: "https://github.com/kunwood",
    title: "github : kunwood 연습코드 & 코딩자료",
  },
  {
    link: "https://www.notion.so/Kunwood-61c22c81925244faa9f9de7bf03af19b",
    title: "Notion : kunwood_지식기록 & 공부",
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__inner">
        <h2 className="contact__title">Contact</h2>
        <div className="contact__lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="contact__text">
          <div className="text">
            {contactText.map((contact, key) => (
              <div key={key}>
                <a
                  href={contact.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {contact.title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="contact__lines bottom" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
