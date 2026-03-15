import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import emailjs from "@emailjs/browser";

const SocialIcons = () => {
  const handleDownload = () => {
    // Send notification that resume was downloaded
    emailjs.send(
      "service_2d1bklo",
      "template_5xs4y1n",
      {
        from_name: "Portfolio System",
        reply_to: "nithyaa.inbox@gmail.com",
        message: "Someone just clicked/downloaded your resume from your portfolio site!",
      },
      "2__8nvUdTDIOGhKwP"
    );
  };
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      let rect = elem.getBoundingClientRect();
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      
      let mouseX = midX;
      let mouseY = midY;
      let currentX = midX;
      let currentY = midY;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.15;
        currentY += (mouseY - currentY) * 0.15;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        rect = elem.getBoundingClientRect(); // Update in case of scroll/resize
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Follow mouse if within reasonable distance of the icon
        if (x >= -20 && x <= rect.width + 20 && y >= -20 && y <= rect.height + 20) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = midX;
          mouseY = midY;
        }
      };

      elem.addEventListener("mousemove", onMouseMove);
      elem.addEventListener("mouseleave", () => {
        mouseX = midX;
        mouseY = midY;
      });

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/Nithya12413" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/nithya-s-0824a327b" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
      </div>
      <a 
        className="resume-button" 
        href="/nithya_resume.pdf" 
        download="Nithya_S_S_Resume.pdf"
        onClick={handleDownload}
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
