import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbTest from '../public/images/buffet.jpg'
import thumbTest1 from '../public/images/steak.jpg'
import thumbTest2 from '../public/images/ssam.jpg'

const Works = () => {
  return (
    <Layout>
      <Container mt={{ md: 2 }}>
        <Heading as="h3" fontSize={20} mb={4}>
          Deine Auswahl an Essen
        </Heading>
        <SimpleGrid columns={[1, 1, 1]} gap={7}>
          <Section>
            <WorkGridItem
              id="portfolio"
              title="Aroma des Ostens"
              thumbnail={thumbTest}
            >
              Ganz gutes Buffet, overpriced wie immer.
              <p>Wird die Auswahl getroffen, werde ich nicht wieder bis zum kotzen essen ^^</p>
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="steak" title="Steak mit Fries" thumbnail={thumbTest1}>
              Hausgemachtes Steak von Beo nochmal zu Tode angebraten (done af), serviert mit fertiger TK Pommes

            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="ssam" title="Ssam" thumbnail={thumbTest2}>
              Herzhaftes koreanisches BBQ, extrems teuer, aber hey, geht ja auf mich ;(
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
