import { Image } from "../components/Image";
import { GridLayout, ImgDiv, InfoDiv, Section } from "../ui/PageLayout";

export default function About() {
  return (
    <GridLayout layout="row" rowSize="1fr">
      <Section colSize="1fr 1fr" rowSize="1fr 1fr">
        <InfoDiv padding="0 0 0 21rem">
          <h1>About Us</h1>
          <p>
            We’re a diverse group of professionals hailing from the US, UK,
            Germany, Australia, China, and New Zealand, united by a shared
            passion for creating groundbreaking technologies that inspire pride
            in our work. Our team is primarily composed of engineers,
            programmers, and researchers, each bringing unique perspectives and
            expertise to the table. This rich tapestry of backgrounds fosters a
            culture of collaboration and creativity, allowing us to tackle
            complex challenges from multiple angles.
          </p>
        </InfoDiv>
        <ImgDiv>
          <Image size="large" src="team.jpg" />
        </ImgDiv>
        <InfoDiv padding="0 0 0 21rem">
          <h1>Our Vision</h1>
          <p>
            In a rapidly evolving landscape, clinging to traditional methods can
            hinder progress and innovation. To truly harness the power of
            creative design, we must embrace change and be willing to explore
            uncharted territories.
          </p>
        </InfoDiv>
        <InfoDiv padding="10rem 8rem 0">
          <p>
            By challenging the status quo and adopting cutting-edge approaches,
            we position ourselves not only to respond to current demands but
            also to anticipate future trends. This adaptability is essential in
            ensuring that our solutions remain relevant and impactful,
            empowering us to lead the way in transforming the engineering
            industry for generations to come.
          </p>
        </InfoDiv>
      </Section>
    </GridLayout>
  );
}
