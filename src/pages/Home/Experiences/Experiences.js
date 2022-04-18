import React, { Fragment, useEffect, useState } from "react";
import ExperiencesCard from "../ExperiencesCard/ExperiencesCard";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    fetch("experiences.json")
      .then((res) => res.json())
      .then((data) => setExperiences(data));
  }, []);

  return (
    <Fragment>
      <div className="bg-color">
        <div className="text-center pt-5 pb-5">
          <h3>My Experiences</h3>
          <p>CHECK HERE HOW CAN I HELP YOU</p>
        </div>

        <div className=" pb-5 pb-5">
          <div className="row  g-4 mx-0">
            {experiences.map((experience) => (
              <ExperiencesCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Experiences;
