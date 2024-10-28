import styled from "styled-components";
import { Button } from "../components/Button";
import { Image } from "../components/Image";
import { GridLayout, ImgDiv, InfoDiv, Section } from "../ui/PageLayout";

const SecDiv = styled.div`
  min-height: 20rem;
  background-color: #dadada;
  color: #000000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PartnersDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  grid-row-gap: 2.5rem;
  grid-column-gap: 3.5rem;
`;

const CenterDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) =>
    props.alignContent === "left" && props.direction !== "column"
      ? "start"
      : props.alignContent === "right" && props.direction !== "column"
      ? "end"
      : "center"};
  align-items: ${(props) =>
    props.alignItems === "left" && props.direction === "column"
      ? "start"
      : props.alignItems === "right" && props.direction === "column"
      ? "end"
      : "center"};
`;

const ClickableDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.349), rgba(0, 0, 0, 0.555)),
    url(${(props) => props.url});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 80%;
  border-radius: 4rem;
  cursor: pointer;

  & p {
    display: none;
    text-align: center;
    padding: 0 3rem;
  }

  &:hover {
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.726),
        rgba(0, 0, 0, 0.726)
      ),
      url(${(props) => props.url});
    background-position: center;
    transform: scale(0.95, 0.95);
    & p {
      display: block;
    }
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: 2rem;
  & span {
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

export default function Home() {
  return (
    <GridLayout layout="row" rowSize="1fr 20rem 1fr 30rem" rowGap="4rem">
      <Section colSize="1fr 1fr" rowSize="1fr" colGap="7rem">
        <InfoDiv padding="0 0 0 18rem">
          <h1>World’s No.1 Award Winning Organisation</h1>
          <p>
            Saving the world is within our reach. In partnership with National
            University of Singapore and National Technological University, we’ve
            managed to achieve the first ever digital charging.
          </p>
          <ButtonDiv>
            <Button variant="secondary">View Pricing</Button>
            <span>*With 7-days money back guaranteed.</span>
          </ButtonDiv>
        </InfoDiv>
        <ImgDiv align="left">
          <Image size="landscape-large" src="cloud_battery.jpg" />
        </ImgDiv>
      </Section>
      <SecDiv>
        <PartnersDiv>
          <CenterDiv alignContent="left">
            <Image variant="banner" src="Walmart_Logo.png" />
          </CenterDiv>
          <CenterDiv alignContent="left">
            <Image variant="banner" src="NTU_Logo.png" />
          </CenterDiv>
          <CenterDiv alignContent="left">
            <Image variant="banner" src="SembCorp_Logo.png" />
          </CenterDiv>
          <CenterDiv alignContent="left">
            <Image variant="banner" src="OCK_Logo.png" />
          </CenterDiv>

          <CenterDiv alignContent="left">
            <Image variant="banner" src="SpaceX-Logo.png" />
          </CenterDiv>
          <CenterDiv alignContent="left">
            <Image variant="banner" src="NUS_Logo.png" />
          </CenterDiv>
          <CenterDiv alignContent="left">
            <Image variant="banner" src="KFC_Logo.png" />
          </CenterDiv>
          <CenterDiv alignContent="left">
            <Image variant="banner" src="FedEx_Logo.png" />
          </CenterDiv>
        </PartnersDiv>
      </SecDiv>
      <Section colSize="1fr 1fr 1fr" rowSize="30rem">
        <ClickableDiv url="battery-capacity.PNG">
          <h2>Cloud Battery</h2>
          <p>
            Cloud Battery is a futuristic technology that eliminates the need
            for physical batteries by storing energy in a distributed network of
            data centers. Instead of relying on traditional battery storage,
            energy generated from renewable sources is converted into data and
            stored in the cloud. Users can access this stored energy via the
            internet, allowing devices designed for this technology to draw
            power directly from the cloud as needed.
          </p>
        </ClickableDiv>
        <ClickableDiv url="battery-charging.jpg">
          <h2>Optimize Charging Speed</h2>
          <p>
            Optimize Charging Speed is a futuristic feature that enhances the
            rate at which devices charge by intelligently managing power flow
            and adjusting charging parameters in real-time. The app analyzes
            factors such as battery health, temperature, and current charge
            level to determine the optimal charging speed, balancing efficiency
            with safety. By leveraging machine learning algorithms, it predicts
            user behavior and adjusts charging patterns accordingly,
            prioritizing faster charging during peak usage times and slowing
            down during periods of inactivity.
          </p>
        </ClickableDiv>
        <ClickableDiv url="fast_charging.jpg">
          <h2>Increase Battery Capacity</h2>
          <p>
            Increasing Battery Capacity is a futuristic feature that utilizes
            cloud technology to enhance the effective battery capacity of
            devices. The application connects to a cloud server that stores
            excess energy and dynamically reallocates it to connected devices
            based on their needs and usage patterns. By analyzing real-time data
            on energy consumption and device performance, the app can optimize
            the distribution of virtual battery power, effectively extending the
            operational time of devices without requiring physical battery
            upgrades.
          </p>
        </ClickableDiv>
      </Section>
    </GridLayout>
  );
}
