import React, { useState } from "react";
import { CgArrowLongRightR, CgArrowLongLeftR } from "react-icons/cg";
import {
  Title_Area,
  Title,
  Calc_Area,
  Calculator,
  Brake_Down,
  Input_Wrapper,
  Button_Wrapper,
  Input,
  Button,
  Uni_Div,
} from "../globalstyles/GlobalStyles";

const Main = () => {
  const [price, setPrice] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [tradeIn, setTradeIn] = useState(0);
  const [stateTax, setStateTax] = useState(0);
  const [otherFees, setOtherFees] = useState(0);
  const [suggestion, setSuggestion] = useState("");

  const [totalFinancing, setTotalFinancing] = useState();
  const [taxPaid, setTaxPaid] = useState();
  const [totalPaid, setTotalPaid] = useState();
  const [financingCost, setFinacningCost] = useState();
  const [monthlyPayment, setMonthlyPayment] = useState();

  const priceSetter = (e) => {
    setPrice(e.target.value);
  };
  const loanTermSetter = (e) => {
    setLoanTerm(e.target.value);
  };
  const interestRateSetter = (e) => {
    setInterestRate(e.target.value);
  };
  const downPaymentSetter = (e) => {
    setDownPayment(e.target.value);
  };
  const tradeInSetter = (e) => {
    setTradeIn(e.target.value);
  };
  const stateTaxSetter = (e) => {
    setStateTax(e.target.value);
  };
  const otherFeesSetter = (e) => {
    setOtherFees(e.target.value);
  };

  let toBeFinanced =
    parseInt(price) -
    parseInt(downPayment) -
    parseInt(tradeIn) +
    parseInt(otherFees);
  let toBeTaxed = Math.floor((parseInt(price) * stateTax) / 100);
  let toBeInterestRate = Math.floor(
    ((toBeFinanced + toBeTaxed) * parseInt(interestRate)) / 100
  );
  let toBeMonthly =
    (toBeFinanced + toBeTaxed + toBeInterestRate) / parseInt(loanTerm);
  let toBeTotalPaid =
    parseInt(price) +
    parseInt(downPayment) +
    parseInt(tradeIn) +
    toBeTaxed +
    toBeInterestRate;
  let toBeCostOfFinance = parseInt(otherFees) + toBeInterestRate;

  const calculator = () => {
    setTotalFinancing(toBeFinanced);
    setTaxPaid(toBeTaxed);
    setMonthlyPayment(Math.floor(toBeMonthly));
    setTotalPaid(toBeTotalPaid);
    setFinacningCost(toBeCostOfFinance);
  };

  const rest = (e) => {
    setPrice(0);
    setLoanTerm(0);
    setInterestRate(0);
    setDownPayment(0);
    setTradeIn(0);
    setStateTax(0);
    setOtherFees(0);
  };

  const suggestionText = () => {
    setSuggestion(<h4>Save money! Go get a beater car:)</h4>);
  };
  const totalPrice = priceSetter - downPaymentSetter;
  return (
    <>
      <Title_Area>
        <Title
          display="flex"
          fontSize="4em"
          textAlign="center"
          color="black"
          filter="drop-shadow(40px 10px 5px #000)"
        >
          Car Loan Calculator
        </Title>
      </Title_Area>
      <Calc_Area>
        <Calculator>
          <Input_Wrapper>
            Vehicle price
            <Input type="number" value={price} onChange={priceSetter} />
            Loan term
            <Input type="number" value={loanTerm} onChange={loanTermSetter} />
            Interest rate
            <Input
              type="number"
              value={interestRate}
              onChange={interestRateSetter}
            />
            Down payment
            <Input
              type="number"
              value={downPayment}
              onChange={downPaymentSetter}
            />
            Trade-in value
            <Input type="number" value={tradeIn} onChange={tradeInSetter} />
            Your state tax
            <Input type="number" value={stateTax} onChange={stateTaxSetter} />
            All other fee
            <Input type="number" value={otherFees} onChange={otherFeesSetter} />
          </Input_Wrapper>
          <Button_Wrapper>
            <Button onClick={calculator}>Calculate</Button>
            <Button onClick={rest}>Rest</Button>
          </Button_Wrapper>
        </Calculator>
        <Brake_Down alignItems="center">
          <Uni_Div height="10%" justifyContent="center" alignItems="center">
            <Title
              flexDireciton="column"
              justifyContent="center"
              fontSize="1.2em"
              fontWeight="bold"
              textAlign="center"
              color="black"
            >
              Your estimated payment
            </Title>
          </Uni_Div>
          <Uni_Div flexDirection="column" height="30%" width="100%">
            <Uni_Div height="50%" justifyContent="center" alignItems="center">
              <CgArrowLongRightR color="white" size="80%" />
              <Title justifyContent="center"> ${monthlyPayment}/mo.</Title>
              <CgArrowLongLeftR color="white" size="80%" />
            </Uni_Div>
            <Title justifyContent="center">Breakdown</Title>
          </Uni_Div>
          <Uni_Div flexDirection="column" height="40%" width="90%">
            <Uni_Div
              height="20%"
              justifyContent="space-between"
              alignItems="flex-end"
              borderBottom="2px solid white"
            >
              Total financing <h3>${totalFinancing}</h3>
            </Uni_Div>
            <Uni_Div
              height="20%"
              justifyContent="space-between"
              alignItems="flex-end"
              borderBottom="2px solid white"
            >
              Tax paid <h3>${taxPaid}</h3>
            </Uni_Div>
            <Uni_Div
              height="20%"
              justifyContent="space-between"
              alignItems="flex-end"
              borderBottom="2px solid white"
            >
              Total paid <h3>${totalPaid}</h3>
            </Uni_Div>
            <Uni_Div
              height="20%"
              justifyContent="space-between"
              alignItems="flex-end"
              borderBottom="2px solid white"
            >
              Cost of financing <h3>${financingCost}</h3>
            </Uni_Div>
          </Uni_Div>
          <Uni_Div>
            <Uni_Div
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <h4>Click below to get recommendations</h4>
              <Button onClick={suggestionText}>SHOW ME</Button>
              {suggestion}
            </Uni_Div>
          </Uni_Div>
        </Brake_Down>
      </Calc_Area>
    </>
  );
};

export default Main;
