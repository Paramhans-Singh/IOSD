import classes from "../styles/VisionContainer.module.css";
import SideTitle from "./SideTitle";

import VisionGraphics from "../assets/About/VisionGraphics.svg";
import MissionListItem from "./MissionItem";
import VisionListItem from "./VisionListItem";

const VisionContainer = () => {
  return (
    <div className={classes.container}>
      <SideTitle title="Vision" />
      <div className={classes.mission}>
        <h2>
        Our vision for IOSD MAIT is to become a leading tech society recognized not only within our institution but also on a broader scale. We envision:
        </h2>
        <div className={classes.content}>
          <div className={classes.missionList}>
            {missionListData.map((item, index) => (
              <VisionListItem
                key={item.id}
                title={item.title}
                content={item.content}
                index={1}
                color="black"
              />
            ))}
          </div>
          <div className={classes.titleContainer}>
            {missionListData.map((mission, index)=> <h3 className={classes.title} key={index}>{mission.title}</h3>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionContainer;

const missionListData = [
  {
    id: 1,
    title: "A Thriving Tech Ecosystem:",
    content:
      "A thriving and interconnected tech ecosystem within our institution, where students, faculty, and industry professionals collaborate and innovate.",
  },
  {
    id: 2,
    title: "Global Impact:",
    content:
      "A thriving and interconnected tech ecosystem within our institution, where students, faculty, and industry professionals collaborate and innovate.",
  },
  {
    id: 3,
    title: "Industry Partnership:",
    content:
      "A thriving and interconnected tech ecosystem within our institution, where students, faculty, and industry professionals collaborate and innovate.",
  },
  {
    id: 4,
    title: "Skill Development:",
    content:
      "A thriving and interconnected tech ecosystem within our institution, where students, faculty, and industry professionals collaborate and innovate.",
  },
  {
    id: 5,
    title: "Community Building:",
    content:
      "A thriving and interconnected tech ecosystem within our institution, where students, faculty, and industry professionals collaborate and innovate.",
  },
];
