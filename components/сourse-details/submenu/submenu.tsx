import { useState, useEffect } from "react";
import css from "./Submenu.module.css";
import clsx from "clsx";

const Submenu = () => {
  const [activeSection, setActiveSection] = useState("course");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const option = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    const onEntry = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(onEntry, option);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <ul className={css.sub_list}>
      <li className={css.sub_item}>
        <a
          href="#course"
          className={clsx(
            css.sub_link,
            activeSection === "course" && css.active
          )}
        >
          Про курс
        </a>
      </li>
      <li className={css.sub_item}>
        <a
          href="#company"
          className={clsx(
            css.sub_link,
            activeSection === "company" && css.active
          )}
        >
          Про компанію
        </a>
      </li>
      <li className={css.sub_item}>
        <a
          href="#reviews"
          className={clsx(
            css.sub_link,
            activeSection === "reviews" && css.active
          )}
        >
          Відгуки
        </a>
      </li>
    </ul>
  );
};

export default Submenu;
