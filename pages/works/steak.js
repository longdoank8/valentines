import { Container, Badge } from '@chakra-ui/react'

import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Portfolio">
      <Container mt={{ md: 5 }}>
        <Title>
          Steak <Badge>2023</Badge>
        </Title>
        <P>Glückwunsch, du hast dich für das hausgemacht Steak entschieden.</P>
        <P>Sehr gute Wahl Baby, Chefkoch BabyBeo wird dir was schönes zaubern!</P>
        <P>Schreib bitte BabyBeo über Whatsapp eine Nachricht für eine Bestätigung.</P>
         <WorkImage src="/images/steak.jpg" alt="Portfolio" />
      </Container>
    </Layout>
  )
}

export default Work
