import React from "react";
import '../styles/Members.css';
import image14 from '../assets/member/image14.png';
import image15 from '../assets/member/image15.png';
import image16 from '../assets/member/image16.png';
import image17 from '../assets/member/image17.png';
import image18 from '../assets/member/image18.png';
import image19 from '../assets/member/image19.png';
import image5 from '../assets/member/image5.png';
import image6 from '../assets/member/image6.png';
import image7 from '../assets/member/image7.png';
import image8 from '../assets/member/image8.png';
import image9 from '../assets/member/image9.png';
import image10 from '../assets/member/image10.png';
import image20 from '../assets/member/image20.png';
import rectangle from '../assets/member/rectangle-15.svg';
import plus from '../assets/member/plus.svg';



const Members = () => {
  return (
    <div className="membership">
      <div className="div">
        <div className="overlap">
          <div className="frame">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="group">
                <div className="text-wrapper">Join our growing team!</div>
                <p className="we-love-what-we-do">
                  We love what we do and we do it with passion. We value the
                  <br />
                  experimentation of the message and smart incentives.
                </p>
                <div className="group-wrapper">
                  <div className="overlap-group-wrapper">
                    <div className="div-wrapper">
                      <div className="text-wrapper-2"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdIYC-ypq1YEmeHtIZwDju4dN81T8E5pUuxmW3mVEYzr5sbcw/viewform">Become a member now!</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-2">
                  <div className="overlap-3">
                    <img className="image" alt="Image" src={image5} />
                    <img className="image-2" alt="Image" src={image8} />
                    <img className="image-3" alt="Image" src={image7} />
                  </div>
                  <img className="image-4" alt="Image" src={image6} />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-3">How to Join?</div>
            <div className="group-2">
              <div className="overlap-group-2">
                <div className="frame-3">
                  <img className="image-5" alt="Image" src={image14} />
                  <p className="text-wrapper-4">
                    To join IOSD MAIT, the college society, start by attending their membership drive or orientation
                    session.
                  </p>
                </div>
                <div className="frame-4">
                  <img className="image-6" alt="Image" src={image14} />
                  <p className="text-wrapper-5">
                    Fill out the application form with accurate details and pay any required membership fees.
                  </p>
                </div>
                <div className="frame-5">
                  <img className="image-5" alt="Image" src={image14} />
                  <p className="text-wrapper-6">Engage actively in society meetings, events, and responsibilities</p>
                </div>
                <div className="frame-6">
                  <img className="image-6" alt="Image" src={image14} />
                  <p className="text-wrapper-7">Make the most of networking opportunities with fellow members.</p>
                </div>
                <div className="frame-7">
                  <img className="image-5" alt="Image" src={image14} />
                  <p className="text-wrapper-8">
                    Stay informed about society updates, contribute your skills and ideas, and enjoy the enriching
                    experience of being a part of IOSD MAIT.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-8">
            <div className="overlap-4">
              <div className="overlap-5">
                <img className="image-6" alt="Image" src={image18} />
                <img className="image-7" alt="Image" src={image9} />
              </div>
              <img className="image-8" alt="Image" src={image19} />
              <img className="image-9" alt="Image" src={image10} />
            </div>
            <p className="text-wrapper-9">Benefits of becoming a member</p>
            <p className="text-wrapper-10">
              Becoming a member of IOSD MAIT, the college society, comes with several benefits. Firstly, it provides an
              opportunity to connect and collaborate with like-minded individuals who share your interests and passions.
              Membership also allows you to participate in a wide range of engaging activities, workshops, and events
              organized by the society, which can enhance your skills and knowledge in various domains. Additionally,
              being a member often means access to valuable resources, mentorship opportunities, and a platform to
              showcase your talents and leadership abilities.
            </p>
          </div>
          <div className="frame-9">
            <div className="overlap-6">
              <div className="rectangle-2" />
              <img className="image-10" alt="Image" src={image20} />
              <div className="rectangle-3">
              <div className="text-wrapper-11">Membership Fee</div>
              <div className="text-wrapper-12">₹1180/-</div>
              <div className="overlap-group-3">
              <div className="text-wrapper-13"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdIYC-ypq1YEmeHtIZwDju4dN81T8E5pUuxmW3mVEYzr5sbcw/viewform">JOIN NOW</a></div>
              </div>
            </div>
          </div>
      </div>
      <div>
    </div>
    </div>
    </div>
      
    <div className="faq">
        <div className="faq-heading">FAQ's</div>
        <div className="title">
          <div className="title-3">
          <h3> Who can join "IOSD MAIT"? </h3>
          <p className="part"> Membership is open to all students at MAIT. We welcome anyone with an interest in technology and a passion for learning. </p>
          </div>

          <div className="title-4">
          <h3> How do I become a member? </h3>
          <p className="part"> You can become a member by signing up on our website or attending one of our introductory meetings. Membership involves a nominal fee. </p>
          </div>

          <div className="title-5">
          <h3> What benefits do members receive? </h3>
          <p className="part"> Members gain access to exclusive workshops, events, and resources. </p>
          </div>

          <div className="title-6">
          <h3> How can I stay updated with "IOSD MAIT" activities? </h3>
          <p className="part"> You can stay informed by following our website, social media channels. We also announce events during our meetings. </p>
          </div>
          
        </div>
        </div>
      </div>
    
    );
};

export default Members;
