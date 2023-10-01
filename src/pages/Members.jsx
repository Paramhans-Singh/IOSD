import React from "react";
import '../styles/Members.css';
import member1 from '../assets/member1.png';
import member2 from '../assets/member2.png';
import member3 from '../assets/member3.png';
import member4 from '../assets/member4.jpg';

const Members = () => {
  return (
    <div className="members">
      {/* <div className="mainheading">Members</div> */}
      <div className="sectionContainer">
        <div className="subheading first">How to Join</div>
        <div className="content firstBox">
          <div className="contentLeft">
            <img src={member1} alt="" />
          </div>
          <div className="contentRight">
            <div className="contentText">
              To join IOSD MAIT, the college society, start by attending their membership drive or orientation session. Fill out the application form with accurate details and pay any required membership fees. Engage actively in society meetings, events, and responsibilities, and make the most of networking opportunities with fellow members. Stay informed about society updates, contribute your skills and ideas, and enjoy the enriching experience of being a part of IOSD MAIT.
            </div>
          </div>
        </div>
        <hr className="hr first" />
      </div>
      <div className="sectionContainer">
        <div className="subheading second">Benefits of becoming a member</div>
        <div className="content secondBox">
          <div className="contentLeft">
            <img src={member2} alt="" />
          </div>
          <div className="contentRight">
            <div className="contentText">
            Becoming a member of IOSD MAIT, the college society, comes with several benefits. Firstly, it provides an opportunity to connect and collaborate with like-minded individuals who share your interests and passions. Membership also allows you to participate in a wide range of engaging activities, workshops, and events organized by the society, which can enhance your skills and knowledge in various domains. Additionally, being a member often means access to valuable resources, mentorship opportunities, and a platform to showcase your talents and leadership abilities. It can also be a fulfilling experience that contributes to personal and professional growth while fostering a sense of community and camaraderie within your college.
            </div>
          </div>
        </div>
        <hr className="hr second" />
      </div>
      <div className="sectionContainer">
        <div className="subheading third">Membership Fee</div>
        <div className="content thirdBox">

          {/* <div className="FeeBox">
            <div className="boxHeading">Basic</div>
            <div className="boxPrice">₹ 10000/-</div>
            <div className="boxContent">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea aut corrupti eius nihil fuga cupiditate odit, quia alias amet dolorem!</div>
            <div className="FeeBoxButton">Join Now</div>
            <div className="boxContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolores facilis, maxime numquam aut quod illo harum laudantium sunt sit soluta possimus totam illum praesentium at deleniti reprehenderit nisi atque. Alias aliquam unde officiis distinctio ipsa, nobis voluptas non expedita tenetur quibusdam, nihil nisi eum nesciunt similique. Aspernatur, tenetur a.</div>
          </div> */}
          <div className="contentLeft">
            <img src={member4} alt="" />
          </div>
          <div className="FeeBox">
            <div className="boxHeading">Membership</div>
            <div className="boxPrice">₹ 1180/-</div>
            {/* <div className="boxContent">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea aut corrupti eius nihil fuga cupiditate odit, quia alias amet dolorem!</div> */}
            <div className="FeeBoxButton">Join Now</div>
            {/* <div className="boxContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolores facilis, maxime numquam aut quod illo harum laudantium sunt sit soluta possimus totam illum praesentium at deleniti reprehenderit nisi atque. Alias aliquam unde officiis distinctio ipsa, nobis voluptas non expedita tenetur quibusdam, nihil nisi eum nesciunt similique. Aspernatur, tenetur a.</div> */}
          </div>
          {/* <div className="FeeBox">
            <div className="boxHeading">Advanced</div>
            <div className="boxPrice">₹ 10000/-</div>
            <div className="boxContent">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea aut corrupti eius nihil fuga cupiditate odit, quia alias amet dolorem!</div>
            <div className="FeeBoxButton">Join Now</div>
            <div className="boxContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolores facilis, maxime numquam aut quod illo harum laudantium sunt sit soluta possimus totam illum praesentium at deleniti reprehenderit nisi atque. Alias aliquam unde officiis distinctio ipsa, nobis voluptas non expedita tenetur quibusdam, nihil nisi eum nesciunt similique. Aspernatur, tenetur a.</div>
          </div>
        </div> */}
       </div>
        <hr className="hr third" />
      </div>
      <div className="sectionContainer">
        <div className="subheading fourth">FAQ's</div>
        <div className="content fourthBox">
          <div className="contentLeft">
            <img src={member3} alt="" />
          </div>

          <div className="contentRight">
            <div className="contentText">
            <h3> Who can join "IOSD MAIT"? </h3>
          <p> Membership is open to all students at MAIT. We welcome anyone with an interest in technology and a passion for learning. </p>
          
          <h3> How do I become a member? </h3>
          <p> You can become a member by signing up on our website or attending one of our introductory meetings. Membership involves a nominal fee. </p>
          
          <h3> What benefits do members receive? </h3>
          <p> Members gain access to exclusive workshops, events, and resources. </p>
            
          <h3> How can I stay updated with "IOSD MAIT" activities? </h3>
          <p> You can stay informed by following our website, social media channels. We also announce events during our meetings. </p>
          
          </div>
          </div>
        </div>


        <hr className="hr fourth" />
      </div>
    </div>
  );
};

export default Members;
