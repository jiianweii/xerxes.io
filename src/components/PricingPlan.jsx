import styled from "styled-components";
import { getCurrency } from "../helper/useCalculation";

const PlanSection = styled.div`
  display: flex;
  height: 38rem;
  width: 25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #303030;
  border-radius: 24px;
  padding: 0 2rem;
  margin-top: 2rem;
`;

const TitleText = styled.h1`
  font-weight: 700;
  font-size: ${(props) => props.size || "24px"};

  color: ${(props) => props.color || "initial"};
`;

const SubTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
`;

const DetailText = styled.p`
  font-size: ${(props) => props.size || "10px"};
`;

const SectionDiv = styled.div`
  height: ${(props) => props.height || "auto"};
`;

const PaymentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  border-bottom: 3px solid #fff;
`;

export default function PricingPlan({ plan }) {
  const { name, details, features, monthlyPayment, notes } = plan;

  return (
    <PlanSection>
      <SectionDiv height="7rem">
        <TitleText size="30px">{name}</TitleText>
        <DetailText size="12px">{details}</DetailText>
      </SectionDiv>
      <SectionDiv height="100%">
        <TitleText color="#393939">Key Features</TitleText>
        {features.map((feature, key) => (
          <SubTitle key={key}>{feature}</SubTitle>
        ))}
      </SectionDiv>
      <SectionDiv height="100%">
        <TitleText>Flexible Subscription Plans</TitleText>
        {monthlyPayment.map((payment, key) => (
          <PaymentDiv key={key}>
            <SubTitle>{payment.type}</SubTitle>
            <DetailText>{getCurrency(payment.price)}</DetailText>
          </PaymentDiv>
        ))}
      </SectionDiv>
      <SectionDiv height="8rem">
        <DetailText>{notes}</DetailText>
      </SectionDiv>
    </PlanSection>
  );
}
