import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Portfolio">
      <Container mt={{ md: 5 }}>
        <Title>
          Buffet <Badge>2023</Badge>
        </Title>
        <P>Glückwunsch, du hast dich für Aroma des Ostens entschieden.</P>
        <P>Schreib bitte BabyBeo über Whatsapp eine Nachricht für eine Bestätigung.</P>
       <List ml={4} mb={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://aroma-des-ostens.de/">
          https://aroma-des-ostens.de/ <ExternalLinkIcon mx="2" />
          </Link>
        </ListItem>
       </List>
         <WorkImage src="/images/buffet.jpg" alt="Portfolio" />
      </Container>
    </Layout>
  )
}

export default Work
