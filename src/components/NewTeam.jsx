import React from 'react'
import classes from '../styles/NewTeam.module.css';
import NewTeamMember from './NewTeamMember';
import TeamMember from './TeamMember';


import AnjaliGupta from '../assets/Team/council/AnjaliGupta.jpg';
import AtharvaRana from '../assets/Team/council/AtharvaRana.jpg';
import AyushGupta from '../assets/Team/council/AyushGupta.jpg';
import BhumikaArora from '../assets/Team/council/BhumikaArora.jpg';
import ChaitanyaBisht from '../assets/Team/council/ChaitanyaBisht.jpg';
import DarpanChanana from '../assets/Team/council/DarpanChanana.jpg';
import KaranjotSingh from '../assets/Team/council/KaranjotSingh.jpg';
import KashviGarg from '../assets/Team/council/KashviGarg.jpg';
import KeshavChahal from '../assets/Team/council/KeshavChahal.jpg';
import KushagraJain from '../assets/Team/council/KushagraJain.jpg';
import SachinPoonia from '../assets/Team/council/SachinPoonia.jpg';
import SparshChadha from '../assets/Team/council/SparshChadha.jpg';
import SparshGoel from '../assets/Team/council/SparshGoel.jpg';
import SumitSingh from '../assets/Team/council/SumitSingh.jpg';


import JiveshLakhani from '../assets/Team/Core/JiveshLakhani.jpg';
import AdityaGupta from '../assets/Team/Core/AdityaGupta.jpg';
import ArhamJain from '../assets/Team/Core/ArhamJain.jpg';
import ArnavGupta from '../assets/Team/Core/ArnavGupta.jpg';
import AshishYadav from '../assets/Team/Core/AshishYadav.jpg';
import JaiSukheja from '../assets/Team/Core/JaiSukheja.jpg';
import JatinBhatt from '../assets/Team/Core/JatinBhatt.jpg';
import JayantAggarwal from '../assets/Team/Core/JayantAggarwal.jpg';
import JiyaVerma from '../assets/Team/Core/JiyaVerma.jpg';
import KeshavGoyal from '../assets/Team/Core/KeshavGoyal.jpg';
import ParamhansSingh from '../assets/Team/Core/ParamhansSingh.jpg';
import PratishthaGupta from '../assets/Team/Core/PratishthaGupta.jpg';
import SimranArora from '../assets/Team/Core/SimranArora.jpg';
import VarunGambhir from '../assets/Team/Core/VarunGambhir.jpg';
import AayushRoy from '../assets/Team/Core/AayushRoy.jpg';

import Garima from '../assets/Team/Garima.jpg';

const NewTeam = () => {
  return (
    <main>
  <section id="council" className={classes["section"]}>
    <h1>Faculty Advisor</h1>
    {   <div className={classes['card-cont']} >

        <TeamMember 
            
            member={{
              name: 'Ms. Garima Gupta',
              role: 'Faculty Advisor',
              img: Garima,
              linkedin: '',
              insta: ''
            }}
        />
    </div>
    }
  </section>
  <section id="council" className={classes["section"]}>
    <h1>Council Members</h1>
    <div className={`${classes["card-cont"]} ${classes['council']}`}>
     {
        council.map(member=> 
            <TeamMember key={member.id}
                member={member}
            />    
        )
     }
    </div>
  </section>
  <section id="core" className={classes["section"]}>
    <h1>Core Members</h1>
    <div className={`${classes["card-cont"]} ${classes['core']}`}>
      {
        core.map(member=> 
            <TeamMember key={member.id}
                member={member}
            />
        )
      }
    </div>
  </section>
</main>

  )
}

export default NewTeam



const council = [
    {
      id: 1,
      name: 'Kushagra Jain',
      role: 'President',
      img: KushagraJain,
      linkedin: 'https://www.linkedin.com/in/kushagra-jain-6a9a8a1b1/',
      insta: 'https://www.instagram.com/kushagra_j_58',
      
    },
    {
      id: 2,
      name: 'Darpan Chanana',
      role: 'Vice President',
      img: DarpanChanana,
      linkedin: 'https://www.linkedin.com/in/darpan-chanana-058914201/',
      insta: 'https://www.instagram.com/darpan.2001/'
    },
    {
      id: 3,
      name: 'Chaitanya Bisht',
      role: 'Vice President',
      img: ChaitanyaBisht,
      linkedin: 'https://www.linkedin.com/in/chaitanyabisht/',
      insta: 'https://www.instagram.com/bisht_chaitanya/'
    },
    {
      id: 4,
      name: 'Atharva Rana',
      role: 'Treasurer',
      img: AtharvaRana,
      linkedin: 'https://www.linkedin.com/in/atharva-rana-4b5029183/',
      insta: 'https://www.instagram.com/rana_atharva/'
    },
    {
      id: 5,
      name: 'Karanjot Singh',
      role: 'Core Team Leader',
      img: KaranjotSingh,
      linkedin: 'https://www.linkedin.com/in/karanjot-s/',
      insta: 'https://www.instagram.com/_karanjot_s/'
    },
    {
      id: 6,
      name: 'Anjali Gupta',
      role: 'General Secretary',
      img: AnjaliGupta,
      linkedin: 'https://www.linkedin.com/in/anjali-gupta-254814203/',
      insta: 'https://www.instagram.com/_anjalii40/'
    },
    {
      id: 7,
      name: 'Bhumika Arora',
      role: 'Joint Secretary',
      img: BhumikaArora,
      linkedin: 'https://www.linkedin.com/in/bhumika-arora-a0aa92222/',
      insta: 'https://www.instagram.com/bhumika._.arora/'
    },
    {
      id: 8,
      name: 'Keshav Chahal',
      role: 'Operations Head',
      img: KeshavChahal,
      linkedin: 'https://www.linkedin.com/in/keshav-chahal-884237125/',
      insta: 'https://www.instagram.com/ikeshavchahal/'
    },
    {
      id: 9,
      name: 'Sumit Singh',
      role: 'Operations Head',
      img: SumitSingh,
      linkedin: 'https://www.linkedin.com/in/sumit-singh07/',
      insta: 'https://www.instagram.com/_vihaan07/'
    },
    {
      id: 10,
      name: 'Sparsh Goel',
      role: 'Operations Head',
      img: SparshGoel,
      linkedin: 'https://www.linkedin.com/in/sparsh-goel-3113831b7/',
      insta: 'https://www.instagram.com/sparshg16_/'
    },
    {
      id: 11,
      name: 'Kashvi Garg',
      role: 'SIG Head',
      img: KashviGarg,
      linkedin: 'https://www.linkedin.com/in/kashvi-garg-2k3/',
      insta: 'https://www.instagram.com/picklekashu/'
    },
    {
      id: 12,
      name: 'Sparsh Chadha',
      role: 'SIG Head',
      img: SparshChadha,
      linkedin: 'https://www.linkedin.com/in/sparsh-chadha-330643204/',
      insta: 'https://www.instagram.com/sparsh71/'
    },
    {
      id: 13,
      name: 'Sachin Poonia',
      role: 'SIG Head',
      img: SachinPoonia,
      linkedin: 'https://www.linkedin.com/in/sachin-poonia-7482a01bb/',
      insta: ''
    },
    {
      id: 14,
      name: 'Ayush Gupta',
      role: 'SIG Head',
      img: AyushGupta,
      linkedin: 'https://www.linkedin.com/in/ayush-gupta-057368186/',
      insta: 'https://www.instagram.com/the.aayushgupta/'
    },
  ];
  
  
  const core = [
    {
      id: 1,
      name: 'Arnav Gupta',
      role: 'PR Head',
      img: ArnavGupta,
      linkedin: 'https://www.linkedin.com/in/arnav-gupta-b1715121b/',
      insta: 'https://www.instagram.com/arnavv_gupta/'
    },
    {
      id: 2,
      name: 'Aayush Roy',
      role: 'PR Head',
      img: AayushRoy,
      linkedin: 'https://www.linkedin.com/in/aayushr2y/',
      insta: 'https://www.instagram.com/auswalld'
    },
    {
      id: 3,
      name: 'Jayant Aggarwal',
      role: 'Graphics Head',
      img: JayantAggarwal,
      linkedin: 'https://www.linkedin.com/in/jayant-aggarwal-418910248/',
      insta: 'https://www.instagram.com/itsjayant_21'
    },
    {
      id: 4,
      name: 'Keshav Goyal',
      role: 'Graphics Head',
      img: KeshavGoyal,
      linkedin: 'https://www.linkedin.com/in/keshav-goyal-481004250/',
      insta: 'https://www.instagram.com/keshavgoyal344/'
    },
    {
      id: 5,
      name: 'Jivesh Lakhani',
      role: 'Web Dev Head',
      img: JiveshLakhani,
      linkedin: 'https://www.linkedin.com/in/jivesh-lakhani',
      insta: 'https://www.instagram.com/jivesh_lakhani/'
    },
    {
      id: 6,
      name: 'Paramhans Singh',
      role: 'Web Dev Head',
      img: ParamhansSingh,
      linkedin: 'https://www.linkedin.com/in/paramhans-singh13/',
      insta: 'https://www.instagram.com/paramsingh1303/'
    },
    {
      id: 7,
      name: 'Arham Jain',
      role: 'CP Head',
      img: ArhamJain,
      linkedin: 'https://www.linkedin.com/in/arham-jain-52566b228/',
      insta: 'https://www.instagram.com/arhamjain09/'
    },
    {
      id: 8,
      name: 'Jatin Bhatt',
      role: 'DSA Head',
      img: JatinBhatt,
      linkedin: 'https://www.linkedin.com/in/jatin-bhatt-711aa1194/',
      insta: 'https://www.instagram.com/bhatt_jatin_13/'
    },
    {
      id: 9,
      name: 'Jiya Verma',
      role: 'UI/Ux Head',
      img: JiyaVerma,
      linkedin: 'https://www.linkedin.com/in/jiyaverma/',
      insta: 'https://www.instagram.com/jvrox_x/'
    },
    {
      id: 10,
      name: 'Ashish Yadav',
      role: 'Android Head',
      img: AshishYadav,
      linkedin: 'https://www.linkedin.com/in/ashish-yadav-95243121b/',
      insta: 'https://www.instagram.com/ashish.yyadav/'
    },
    {
      id: 11,
      name: 'Jai Sukheja',
      role: 'React Native Head',
      img: JaiSukheja,
      linkedin: 'https://www.linkedin.com/in/jai-sukheja-b16863229/',
      insta: ''
    },
    {
      id: 12,
      name: 'Varun Gambhir',
      role: 'AI/ML Head',
      img: VarunGambhir,
      linkedin: 'https://www.linkedin.com/in/varun-gambhir-903b741b0/',
      insta: 'https://www.instagram.com/iamvarungambhir/'
    },
    {
      id: 13,
      name: 'Aditya Gupta',
      role: 'Social Media Head',
      img: AdityaGupta,
      linkedin: 'https://www.linkedin.com/in/aditya-gupta-3112abc/',
      insta: 'https://www.instagram.com/adityaa._.gupta/'
    },
    {
      id: 14,
      name: 'Simran Arora',
      role: 'Social Media Head',
      img: SimranArora,
      linkedin: 'https://www.linkedin.com/in/simran-arora-28125b258/',
      insta: 'https://www.instagram.com/simran_arora.4/'
    },
    {
      id: 15,
      name: 'Pratishtha Gupta',
      role: 'Content Head',
      img: PratishthaGupta,
      linkedin: 'https://www.linkedin.com/in/pratishtha-gupta-8a8b29250/',
      insta: 'https://www.instagram.com/itspratishtha_/'
    },
  ];