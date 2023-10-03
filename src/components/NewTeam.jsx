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
    },
    {
      id: 2,
      name: 'Darpan Chanana',
      role: 'Vice President',
      img: DarpanChanana,
    },
    {
      id: 3,
      name: 'Chaitanya Bisht',
      role: 'Vice President',
      img: ChaitanyaBisht,
    },
    {
      id: 4,
      name: 'Atharva Rana',
      role: 'Treasurer',
      img: AtharvaRana,
    },
    {
      id: 5,
      name: 'Karanjot Singh',
      role: 'Core Team Leader',
      img: KaranjotSingh,
    },
    {
      id: 6,
      name: 'Anjali Gupta',
      role: 'General Secretary',
      img: AnjaliGupta,
    },
    {
      id: 7,
      name: 'Bhumika Arora',
      role: 'Joint Secretary',
      img: BhumikaArora,
    },
    {
      id: 8,
      name: 'Keshav Chahal',
      role: 'Operations Head',
      img: KeshavChahal,
    },
    {
      id: 9,
      name: 'Sumit Singh',
      role: 'Operations Head',
      img: SumitSingh,
    },
    {
      id: 10,
      name: 'Sparsh Goel',
      role: 'Operations Head',
      img: SparshGoel,
    },
    {
      id: 11,
      name: 'Kashvi Garg',
      role: 'SIG Head',
      img: KashviGarg,
    },
    {
      id: 12,
      name: 'Sparsh Chadha',
      role: 'SIG Head',
      img: SparshChadha,
    },
    {
      id: 13,
      name: 'Sachin Poonia',
      role: 'SIG Head',
      img: SachinPoonia,
    },
    {
      id: 14,
      name: 'Ayush Gupta',
      role: 'SIG Head',
      img: AyushGupta,
    },
  ];
  
  
  const core = [
    {
      id: 1,
      name: 'Arnav Gupta',
      role: 'PR Head',
      img: ArnavGupta
    },
    {
      id: 2,
      name: 'Aayush Roy',
      role: 'PR Head',
      img: AyushGupta
    },
    {
      id: 3,
      name: 'Jayant Aggarwal',
      role: 'Graphics Head',
      img: JayantAggarwal
    },
    {
      id: 4,
      name: 'Keshav Goyal',
      role: 'Graphics Head',
      img: KeshavGoyal
    },
    {
      id: 5,
      name: 'Jivesh Lakhani',
      role: 'Web Dev Head',
      img: JiveshLakhani
    },
    {
      id: 6,
      name: 'Paramhans Singh',
      role: 'Web Dev Head',
      img: ParamhansSingh
    },
    {
      id: 7,
      name: 'Arham Jain',
      role: 'CP Head',
      img: ArhamJain
    },
    {
      id: 8,
      name: 'Jatin Bhatt',
      role: 'DSA Head',
      img: JatinBhatt
    },
    {
      id: 9,
      name: 'Jiya Verma',
      role: 'UI/Ux Head',
      img: JiyaVerma
    },
    {
      id: 10,
      name: 'Ashish Yadav',
      role: 'Android Head',
      img: AshishYadav
    },
    {
      id: 11,
      name: 'Jai Sukheja',
      role: 'React Native Head',
      img: JaiSukheja
    },
    {
      id: 12,
      name: 'Varun Gambhir',
      role: 'AI/ML Head',
      img: VarunGambhir
    },
    {
      id: 13,
      name: 'Aditya Gupta',
      role: 'Social Media Head',
      img: AdityaGupta
    },
    {
      id: 14,
      name: 'Simran Arora',
      role: 'Social Media Head',
      img: SimranArora
    },
    {
      id: 15,
      name: 'Pratishtha Gupta',
      role: 'Content Head',
      img: PratishthaGupta
    },
  ]