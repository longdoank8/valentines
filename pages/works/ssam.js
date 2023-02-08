import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExteralLinkIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Portfolio">
      <Container mt={{ md: 5 }}>
        <Title>
          Ssam <Badge>2023</Badge>
        </Title>
        <P>Glückwunsch, du hast dich für Ssam, entschieden.
           May, immer das teure nehmen nh? Alles klaro banano.
        </P>
        <P>Schreib bitte BabyBeo über Whatsapp eine Nachricht für eine Bestätigung.</P>
       <List ml={4} mb={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.ssam-bbq.de/de">
          https://www.ssam-bbq.de/de <ExternalLinkIcon mx="2" />
          </Link>
        </ListItem>
       </List>
         <WorkImage src="/images/ssam.jpg" alt="Portfolio" />
      </Container>
    </Layout>
  )
}

export default Work
