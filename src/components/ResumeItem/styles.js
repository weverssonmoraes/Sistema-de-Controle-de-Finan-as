import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 15px;
  width: 30%;

  @media (max-width: 768px) {
    width: 24%;
    padding: 5px 10px;
    margin: 0;

    p {
      font-size: 15px;
    }

    span {
      font-size: 16px;
    }

    svg {
      display: none;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 20px auto;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 20px;
`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
`;
