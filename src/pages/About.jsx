import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Helmet } from "react-helmet";

// components
import { Cta } from "../components";

// constants
import { SKILLS, EXPERIENCES, SITE_NAME } from "../constants";

import "react-vertical-timeline-component/style.min.css";

// about
const About = () => {
  return (
    <>
      {/* update site title */}
      <Helmet>
        <title>{SITE_NAME} | About me</title>
      </Helmet>

      {/* about section */}
      <section className="max-container">
        {/* about head */}
        <h1 className="head-text">
          Hello, I&apos;m{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            {SITE_NAME.split(" ")[0]}
          </span>
        </h1>

        {/* about text */}
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Software Engineer based in India, specializing in technical
            education throught hands-on learning and building applications.
          </p>
        </div>

        {/* about skills */}
        <div className="py-10 flex flex-col">
          {/* skills head */}
          <h3 className="subhead-text">My Skills</h3>

          {/* skills list */}
          <div className="mt-16 flex flex-wrap gap-12">
            {/* map over each skill */}
            {SKILLS.map((skill) => (
              <div
                className="block-container w-20 h-20"
                key={`skill_${skill.name}`}
              >
                {/* bg btn */}
                <div className="btn-back rounded-xl" />
                {/* skill icon */}
                <div
                  className="btn-front rounded-xl flex justify-center items-center"
                  title={skill.name}
                >
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* work experience */}
        <div className="py-16">
          {/* experience head */}
          <h3 className="subhead-text">Work Experience</h3>

          {/* experience text */}
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              I&apos;ve worked with all sorts of companies, leveling up my
              skills and teaming up with smart people. Here&apos;s the rundown:
            </p>
          </div>

          {/* experience list */}
          <div className="mt-12 flex">
            <VerticalTimeline>
              {/* map over each experience */}
              {EXPERIENCES.map((experience) => (
                <VerticalTimelineElement
                  key={`Experience_${experience.title}`}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      {/* experience icon */}
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{
                    background: experience.iconBg,
                  }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  {/* experience info */}
                  <div>
                    {/* experience title */}
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>

                    {/* experience company name */}
                    <p
                      className="text-black-500 font-medium font-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>

                  {/* experience points */}
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {/* map over each experience point */}
                    {experience.points.map((point, i) => (
                      <li
                        key={`Experience_${experience.title}_point_${i + 1}`}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        {/* horizontal separator */}
        <hr className="border-slate-200" />

        {/* call-to-action */}
        <Cta />
      </section>
    </>
  );
};

export default About;
