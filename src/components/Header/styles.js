import styled from "styled-components";

export const Container = styled.div`
  height: 150px;
  text-align: center;
  background: #111111;
`;

export const Header = styled.h1``;

export const Title = styled.div`
  padding-top: 30px;
  color: #fff;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 27px;
  }

  span {
    font-weight: 600;
    -webkit-background-clip: text;
    -webkit-text-fill-color:transparent;
    background-image: linear-gradient(135deg,#0e73cc 1.93%,#624bbb 14.86%,#ff455d 48.09%,#f35815 77.82%,#f2b600 97.3%)
  }
`;
