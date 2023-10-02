import {
  Image,
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
  Group,
} from "@mantine/core";
import classes from "../styles/Team.module.css";
import TeamMember from "../components/TeamMember";

export default function Team() {
  return (
    <div size={700} className={classes.wrapper}>
      {/* <Title order={3} className={classes.supTitle}>Team</Title> */}

      <Title className={classes.title} order={2}>
        Meet our team of{" "}
        <span className={classes.highlight}>
          <strong>IOSD</strong>
        </span>{" "}
        MAIT
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
         
Allow us to introduce our dedicated and passionate team at the International Organization of Software Developers (IOSD) MAIT. Our team is a diverse group of individuals who share a common passion for software development and technology. With a collective commitment to fostering innovation and excellence, we come from various backgrounds, bringing a wide range of skills and experiences to the table
        </Text>
      </Container>
      <Container size="lg">
        <Title order={2} className={classes.teamTitle}>Faculty Coordinator</Title>
        <Group justify="center">
          <TeamMember 
            member={{
              name: 'Ms. Garima Gupta',
              role: 'Coordinator'
            }}

          />
        </Group>
        <Title order={2} className={classes.teamTitle}>Council</Title>
        <SimpleGrid cols={{ base: 1, xs: 4 }} spacing={80} mt={30} className={classes.grid}>
          {
            council.map(member=> <TeamMember member={member} />)
          }
        </SimpleGrid>
        <Title order={2} className={classes.teamTitle}>Core Team</Title>
        <SimpleGrid cols={{ base: 1, xs: 4 }} spacing={80} mt={30} className={classes.grid}>
        {
            core.map(member=> <TeamMember member={member} />)
          }
        </SimpleGrid>
      </Container>
    </div>
  );
}


const council = [
  {
    id: 1,
    name: 'Kushagra Jain',
    role: 'President',
    img: '',
  },
  {
    id: 2,
    name: 'Darpan Chanana',
    role: 'Vice President',
    img: '',
  },
  {
    id: 3,
    name: 'Chaitanya Bisht',
    role: 'Vice President',
    img: '',
  },
  {
    id: 4,
    name: 'Atharva Rana',
    role: 'Treasurer',
    img: '',
  },
  {
    id: 5,
    name: 'Karanjot Singh',
    role: 'Core Team Leader',
    img: '',
  },
  {
    id: 6,
    name: 'Anjali Gupta',
    role: 'General Secretary',
    img: '',
  },
  {
    id: 7,
    name: 'Bhoomika Arora',
    role: 'Joint Secretary',
    img: '',
  },
  {
    id: 8,
    name: 'Keshav Chahal',
    role: 'Operations Head',
    img: '',
  },
  {
    id: 9,
    name: 'Sumit Singh',
    role: 'Operations Head',
    img: '',
  },
  {
    id: 10,
    name: 'Sparsh Goel',
    role: 'Operations Head',
    img: '',
  },
  {
    id: 11,
    name: 'Kashvi Garg',
    role: 'SIG Head',
    img: '',
  },
  {
    id: 12,
    name: 'Sparsh Chadha',
    role: 'SIG Head',
    img: '',
  },
  {
    id: 13,
    name: 'Sachin Poonia',
    role: 'SIG Head',
    img: '',
  },
  {
    id: 14,
    name: 'Ayush Gupta',
    role: 'SIG Head',
    img: '',
  },
];


const core = [
  {
    id: 1,
    name: 'Arnav Gupta',
    role: 'PR Head',
    img: ''
  },
  {
    id: 2,
    name: 'Aayush Roy',
    role: 'PR Head',
    img: ''
  },
  {
    id: 3,
    name: 'Jayant Aggarwal',
    role: 'Graphics Head',
    img: ''
  },
  {
    id: 4,
    name: 'Keshav Goyal',
    role: 'Graphics Head',
    img: ''
  },
  {
    id: 5,
    name: 'Jivesh Lakhani',
    role: 'Web Dev Head',
    img: ''
  },
  {
    id: 6,
    name: 'Paramhans Singh',
    role: 'Web Dev Head',
    img: ''
  },
  {
    id: 7,
    name: 'Arham Jain',
    role: 'CP Head',
    img: ''
  },
  {
    id: 8,
    name: 'Jatin Bhatt',
    role: 'DSA Head',
    img: ''
  },
  {
    id: 9,
    name: 'Jiya Verma',
    role: 'UI/Ux Head',
    img: ''
  },
  {
    id: 10,
    name: 'Ashish Yadav',
    role: 'Android Head',
    img: ''
  },
  {
    id: 11,
    name: 'Jai Sukheja',
    role: 'React Native Head',
    img: ''
  },
  {
    id: 12,
    name: 'Varun Gambhir',
    role: 'AI/ML Head',
    img: ''
  },
  {
    id: 13,
    name: 'Aditya Gupta',
    role: 'Social Media Head',
    img: ''
  },
  {
    id: 14,
    name: 'Simran Arora',
    role: 'Social Media Head',
    img: ''
  },
  {
    id: 15,
    name: 'Pratishtha Gupta',
    role: 'Content Head',
    img: ''
  },
]