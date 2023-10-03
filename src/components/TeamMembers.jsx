import { Container, Title, Group, SimpleGrid, } from "@mantine/core"
import TeamMember from "./TeamMember"
import classes from '../styles/TeamMembers.module.css';

const TeamMembers = ({council, core}) => {
  return (
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
  )
}

export default TeamMembers