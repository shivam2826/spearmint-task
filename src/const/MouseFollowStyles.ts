import styled from "styled-components";
import magic from "../assets/magic.gif";
import BackgroundImg from "../assets/bg-2.jpg";

export const Container = styled.div`
  background-size: cover;
  height: 100%;
  width: 100%;
  background-image: url(${BackgroundImg});
  position: fixed;
`;

export const Magic = styled.div`
  background-image: url(${magic});
  background-size: cover;
  width: 350px;
  height: 350px;
  position: absolute;
  transform: translate3d(-50%, -50%, 0);
  transition: transform 4s cubic-bezier(0.02, 1.23, 0.79, 1.08);
`;