import { useEffect, useRef } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate the heading
    gsap.fromTo(section.querySelector("h3"),
      { opacity: 0, y: 40, scale: 0.9 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 80%" }
      }
    );

    // Animate left column items with stagger
    gsap.fromTo(section.querySelectorAll(".contact-left > *"),
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: section, start: "top 75%" }
      }
    );

    // Animate the form from right
    gsap.fromTo(section.querySelector(".contact-right"),
      { opacity: 0, x: 40 },
      {
        opacity: 1, x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: section, start: "top 75%" }
      }
    );

    // Animate form fields with stagger
    gsap.fromTo(section.querySelectorAll(".contact-form input, .contact-form textarea, .contact-form button"),
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: section.querySelector(".contact-form"), start: "top 85%" }
      }
    );

    // Animate social links
    gsap.fromTo(section.querySelectorAll(".contact-social"),
      { opacity: 0, y: 15 },
      {
        opacity: 1, y: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: section, start: "top 70%" }
      }
    );

    // Animate footer text
    gsap.fromTo(section.querySelector(".contact-footer"),
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: section.querySelector(".contact-footer"), start: "top 90%" }
      }
    );
  }, []);

  return (
    <div className="contact-section section-container" id="contact" ref={sectionRef}>
      <div className="contact-container">
        <h3>Get In Touch</h3>
        <div className="contact-flex">
          <div className="contact-box contact-left">
            <h4>Email</h4>
            <p>
              <a href="mailto:nithyaa.inbox@gmail.com" data-cursor="disable">
                nithyaa.inbox@gmail.com
              </a>
            </p>
            <h4>Location</h4>
            <p>Bangalore, India</p>

            <h4 style={{ marginTop: "30px" }}>Social</h4>
            <div className="contact-socials">
              <a
                href="https://github.com/Nithya12413"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                Github <MdArrowOutward />
              </a>
              <a
                href="https://www.linkedin.com/in/nithya-s-0824a327b"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                Linkedin <MdArrowOutward />
              </a>
            </div>

            <div className="contact-footer">
              <h2>
                Designed and Developed <br /> by <span>Nithya S S</span>
              </h2>
              <h5>
                <MdCopyright /> 2025
              </h5>
            </div>
          </div>

          <div className="contact-box contact-right">
            <h4 style={{ marginBottom: "10px" }}>Send a Message</h4>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}>
              <input type="text" placeholder="Your Name" required data-cursor="disable" />
              <input type="email" placeholder="Your Email" required data-cursor="disable" />
              <textarea placeholder="Your Message" rows={5} required data-cursor="disable"></textarea>
              <button type="submit" data-cursor="disable">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
