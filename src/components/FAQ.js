import { FrequentlyAskedQuestions } from "../images/images";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { useState } from "react";
const FAQ = () => {
  const [tabIndex, setTabIndex] = useState(null);
  const accordionDetails = [
    {
      question: "Why choose our medical for your family?",
      answer:
        "At our medical consultation platform, we prioritize personalized, expert care tailored to your family's unique health needs. Our network of experienced doctors, specialists, and labs ensures trusted guidance, fast diagnoses, and reliable support—all from the comfort of your home. With a commitment to compassion, convenience, and confidentiality, your family's well-being is always our top priority.",
    },
    {
      question: "Why we are different from others?",
      answer:
        "We combine cutting-edge technology with compassionate care to offer a seamless, patient-first experience. Unlike others, we focus on personalized health solutions, real-time consultations, and 24/7 accessibility. Our dedication to quality, trust, and transparency sets us apart in every interaction.",
    },
    {
      question: "Trusted & experience senior care & love",
      answer:
        "Our senior care services are built on decades of experience and a deep sense of respect for every individual. We provide attentive, reliable, and dignified support tailored to the unique needs of older adults. With heartfelt care and medical expertise, we treat your loved ones like our own.",
    },
    {
      question: "How to get appointment for emergency",
      answer:
        "For emergency appointments, simply use the “Book Now” option on our homepage or call our dedicated emergency line for immediate assistance. Our team is available 24/7 to connect you with the right medical expert without delay. Quick, efficient, and reliable—your health emergency is our top priority.",
    },
  ];
  const toggle = (index) => {
    setTabIndex(tabIndex === index ? null : index);
  };
  return (
    <div
      style={{ backgroundColor: "#fff", textAlign: "center", padding: "5vw 0" }}
    >
      <p style={{ color: "#2aa7ff", fontWeight: "600" }}>Get Your Answer</p>
      <h2>Frequently Asked Questions</h2>
      <div className="FAQ-container">
        <div className="FAQImage">
          <img src={FrequentlyAskedQuestions} alt="" srcset="" />
        </div>
        <div className="FAQText">
          <div class="faq-accordion" id="FAQAccordion">
            {accordionDetails.map((item, index) => {
              return (
                <div class="accordion-item">
                  <div
                    class="accordion-header"
                    id="headingOne"
                    onClick={() => {
                      toggle(index);
                    }}
                  >
                    {item.question}
                    {tabIndex === index ? (
                      <IoIosRemove className="accordion-icon" />
                    ) : (
                      <IoIosAdd className="accordion-icon" />
                    )}
                  </div>
                  {tabIndex === index ? (
                    <div className="accordion-body">{item.answer}</div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
