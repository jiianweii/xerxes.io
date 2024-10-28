import styled from "styled-components";
import { FlexLayout } from "../ui/PageLayout";
import PricingPlan from "../components/PricingPlan";
import ButtonGroup from "../components/ButtonGroup";
import { Button } from "../components/Button";
import { useState } from "react";

const PersonalPlans = [
  {
    name: "Basic",
    details: "With the most basic necessities",
    features: ["1.25x Charging Speed", "Max Charge of 10,000wAh"],
    monthlyPayment: [
      {
        type: "Monthly Subscription Plan",
        price: 30,
      },
      {
        type: "Semi-Annual Subscription Plan",
        price: 29 * 6,
      },
      {
        type: "Annual Subscription Plan",
        price: 28 * 12,
      },
    ],
    notes: "*The charging speed is for both physical and cloud battery",
  },
  {
    name: "Member",
    details: "Best for user that work outdoors",
    features: [
      "5x Charging Speed",
      "Upgradeable Maximum Capacity (10,000)",
      "Max Charge of 200,000wAh",
      "",
    ],
    monthlyPayment: [
      {
        type: "Monthly Subscription Plan",
        price: 250,
      },
      {
        type: "Semi-Annual Subscription Plan",
        price: 248 * 6,
      },
      {
        type: "Yearly payment",
        price: 245 * 12,
      },
    ],
    notes: "*Upgradeable battery capacity can only be used once per device",
  },
  {
    name: "VIP",
    details: "Perfect for user that travels a lot",
    features: [
      "20x Charging Speed",
      "Upgradeable Maximum Capacity (50,000)",
      "Max Charge of 800,000wAh",
      "Priority Technical Support",
      "Offline Access to Cloud",
    ],
    monthlyPayment: [
      {
        type: "Monthly Subscription Plan",
        price: 600,
      },
      {
        type: "Semi-Annual Subscription Plan",
        price: 595 * 6,
      },
      {
        type: "Annual Subscription Plan",
        price: 590 * 12,
      },
    ],
    notes:
      "*User can now access through the offline application for battery charging",
  },
];

const H1 = styled.h1`
  font-size: 42px;
`;

const PricingSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default function Pricing() {
  const [isPersonal, setIsPersonal] = useState(true);
  const [isBusiness, setIsBusiness] = useState(false);

  return (
    <PricingSection>
      <FlexLayout layout="col" alignContent="center" alignItems="center">
        <H1>Service Plans</H1>
        <FlexLayout layout="row" alignContent="center" alignItems="center">
          <ButtonGroup>
            <Button
              variant="variety"
              active={isPersonal}
              onClick={() => {
                setIsPersonal(true);
                setIsBusiness(false);
              }}
            >
              PERSONAL
            </Button>
            <Button
              active={isBusiness}
              variant="variety"
              onClick={() => {
                setIsBusiness(true);
                setIsPersonal(false);
              }}
            >
              BUSINESS
            </Button>
          </ButtonGroup>
        </FlexLayout>
        <FlexLayout
          layout="row"
          alignContent="center"
          alignItems="center"
          gap="4rem"
        >
          {PersonalPlans.map((p, key) => (
            <PricingPlan key={key} plan={p} />
          ))}
        </FlexLayout>
      </FlexLayout>
    </PricingSection>
  );
}
