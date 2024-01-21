import classes from "../styles/MissionContainer.module.css";
import SideTitle from "./SideTitle";

import MissionGraphics from "../assets/About/MissionGraphics.svg";
import MissionListItem from "./MissionItem";

const MissionContainer = () => {
  return (
    <div className={classes.container}>
      <SideTitle title="Mission" />
      <div className={classes.mission}>
        <h2>
          At IOSD MAIT, our mission is to foster a vibrant and innovative tech
          community within our institution. We are committed to:
        </h2>
        <div className={classes.content}>
          <img src={MissionGraphics} className={classes.graphics} />
          <div className={classes.missionList}>
            {missionListData.map((item, index) => (
              <MissionListItem
                key={item.id}
                title={item.title}
                content={item.content}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionContainer;

const missionListData = [
  {
    id: 1,
    title: "Promoting diversity",
    content:
      "and inclusion within the tech community, ensuring that everyone, regardless of background, feels welcome and valued.",
  },
  {
    id: 2,
    title: "Encouraging our members",
    content:
      "to leverage technology for positive social impact by engaging in meaningful projects and initiatives.",
  },
  {
    id: 3,
    title: "Providing high-quality ",
    content:
      "educational resources, workshops, and events to ensure that our members stay at the forefront of technological advancements.",
  },
  {
    id: 4,
    title: "Facilitating collaboration",
    content:
      "and networking opportunities among tech enthusiasts, fostering a culture of learning and creativity.",
  },
  {
    id: 5,
    title: "Empowering Students",
    content:
      "with cutting-edge technology skills and knowledge, enabling them to excel in the ever-evolving tech industry.",
  },
];
