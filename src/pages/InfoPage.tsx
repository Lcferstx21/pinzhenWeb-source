import { useEffect, useState } from "react";
import Puppet from "../components/Puppet/Puppet";

const InfoPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const maxTranslate = window.innerHeight - 150 - 40;
  const titleTranslate = Math.min(scrollY, maxTranslate);
  const descriptionVisible = scrollY >= maxTranslate;
  const descriptionTranslate = descriptionVisible ? 0 : 100;
  const descriptionOpacity = descriptionVisible ? 1 : 0;

  const handleClick = () => {
    const maxTranslate = window.innerHeight - 150 - 40;
    if (scrollY < maxTranslate) {
      window.scrollTo({ top: maxTranslate, behavior: "smooth" });
      setTimeout(() => {
        window.dispatchEvent(new Event("scroll"));
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        window.dispatchEvent(new Event("scroll"));
      }, 100);
    }
  };

  return (
    <div
      className="flex flex-col bg-white items-center min-h-[200vh] relative"
      onClick={handleClick}
    >
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden scrollbar-hide flex justify-center items-center z-0">
        <Puppet />
      </div>

      {/* title */}
      <div
        className="fixed left-6 bottom-10 font-black text-4xl z-10 transition-transform duration-500"
        style={{
          transform: `translateY(-${titleTranslate}px)`,
        }}
      >
        PINZHEN LI
      </div>

      {/* 描述 */}
      <div
        className="fixed left-6 w-1/4 text-sm transition-transform duration-500 z-10 bg-white/80"
        style={{
          bottom: "50px",
          transform: `translateY(${descriptionTranslate}px)`,
          opacity: descriptionOpacity,
          transition: "transform 0.5s ease, opacity 0.5s ease",
        }}
      >
        <div>
          <div>
            Pinzhen Li is a designer and researcher whose practice spans
            architecture, performance spaces, installations, exhibitions,
            sculptures, drawings, and theoretical inquiry. Combining
            multidisciplinary approaches from architecture, economics, and art,
            she explores the intersections of architectural practice, social
            environments, and public participation.
            <br />
            <br />
            Pinzhen holds a Master of Architecture from UC Berkeley’s College of
            Environmental Design, where her thesis received the Chester Miller
            Fellowship. And she was nominated for the Raymond Watson Prize and
            the Sooky Lee Prize for Housing & Social Architecture. She also
            holds a Bachelor of Economics from the University of Jinan,
            Guangzhou, where she was awarded two Excellent Student Scholarships.
            <br />
            <br />
            Her architectural practice is based in the United States and China,
            most recently with Anderson Anderson Architecture and Atelier
            Deshaus, where she has contributed to projects ranging from
            exhibitions and single-family residences to large-scale cultural
            institutions.
          </div>
          <div className="flex justify-between mt-12 text-xs font-extralight ">
            <a
              href="mailto:pinzhenli1997@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              title="Send an email to pinzhenli1997@gmail.com"
            >
              Email
              <svg
                className="inline-block m-1"
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 10L11 1V5.28571"
                  stroke="black"
                  stroke-width="0.5"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/pinzhen-li/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Linkedin
              <svg
                className="inline-block m-1"
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 10L11 1V5.28571"
                  stroke="black"
                  stroke-width="0.5"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/pinzhen_li_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
              <svg
                className="inline-block m-1"
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 10L11 1V5.28571"
                  stroke="black"
                  stroke-width="0.5"
                />
              </svg>
            </a>
            <a className="hover:underline">
              Resume
              <svg
                className="inline-block m-1"
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 10L11 1V5.28571"
                  stroke="black"
                  stroke-width="0.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
