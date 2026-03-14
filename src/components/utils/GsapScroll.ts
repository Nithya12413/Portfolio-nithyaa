
import gsap from "gsap";

export function setPageAnimations() {
  // Landing elements animation on scroll
  gsap.fromTo(
    ".landing-info",
    { opacity: 1 },
    {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: ".landing-section",
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
    }
  );

  // About Section fade in
  gsap.fromTo(
    ".about-me",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "center center",
        scrub: false,
        toggleActions: "play none none reverse",
      },
    }
  );

  // What I Do fade in
  gsap.fromTo(
    ".what-box-in",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".whatIDO",
        start: "top 70%",
        end: "center center",
        toggleActions: "play none none reverse",
      },
    }
  );
  
  if (window.innerWidth <= 1024) {
    const tM2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".what-box-in",
        start: "top 80%",
        end: "bottom top",
      },
    });
    tM2.to(".what-box-in", { display: "flex", duration: 0.1, delay: 0 }, 0);
  } else {
      gsap.fromTo(
        ".what-box-in",
        { display: "none" },
        { display: "flex", duration: 0.1, scrollTrigger: { trigger: ".whatIDO", start: "top 75%" } }
      );
  }
}

export function setAllTimeline() {
  const careerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".career-section",
      start: "top 30%",
      end: "100% center",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  careerTimeline
    .fromTo(
      ".career-timeline",
      { maxHeight: "10%" },
      { maxHeight: "100%", duration: 0.5 },
      0
    )

    .fromTo(
      ".career-timeline",
      { opacity: 0 },
      { opacity: 1, duration: 0.1 },
      0
    )
    .fromTo(
      ".career-info-box",
      { opacity: 0 },
      { opacity: 1, stagger: 0.1, duration: 0.5 },
      0
    )
    .fromTo(
      ".career-dot",
      { animationIterationCount: "infinite" },
      {
        animationIterationCount: "1",
        delay: 0.3,
        duration: 0.1,
      },
      0
    );

  if (window.innerWidth > 1024) {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: "20%", duration: 0.5, delay: 0.2 },
      0
    );
  } else {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: 0, duration: 0.5, delay: 0.2 },
      0
    );
  }
}
