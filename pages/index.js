import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Button,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'




const Page = () => {
  return (
    <Layout>
      <Container>


        <Box dislpay={{ md: 'flex' }} delay={0.1}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title" id="headertext">
              <p>Invitation to be my valentine&apos;s date </p>
            </Heading>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="#ffbbc1"
              borderWidth={2}
              borderStyle="solid"
              border-radius={25}
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src="/images/bild1.jpeg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            <p>Kurze Begrüßung von BabyBeo</p>
          </Heading>

          <Paragraph>
            Hallo Babes,

            dein BabyBeo hier. Zum Jahre 2023 werde ich dich hiermit und endlich wie
            Baby es immer wünscht offiziel mit diesem Text einladen. 
            <p>Babylein willst du mein Valentine&apos;s Baby sein?</p>
            <p>Wenn Ja, dann drücke bitte den darunter liegenden Knopf.</p>
            Wenn Nein, dann drücke bitte den darunter liegenden Knopf.


          </Paragraph>


          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
                JAAAAAA
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Record
          </Heading>
          <BioSection>
            <BioYear>14.02.2021</BioYear>
            Ich wusste nicht, dass man fragen sollte.
          </BioSection>
          <BioSection>
            <BioYear>14.02.2022</BioYear>
            Streit, dass ich nicht rechtzeitig gefragt habe...
          </BioSection>
          <BioSection>
            <BioYear>14.02.2023</BioYear>
            Diese Webseite wurde erstellt, um dich auszufragen :)
          </BioSection>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
