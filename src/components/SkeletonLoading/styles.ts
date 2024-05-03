import { motion } from "framer-motion";
import styled from "styled-components";

export const LoadingContainer = styled(motion.div)`
  position: relative;
  background-image: linear-gradient(#b1b1b1, #f1f1f1);
  width: 230px;
  height: 310px;
  overflow: hidden;
  border-radius: 8px;

  @media (max-width: 420px) {
    width: 100%;
    height: 320px;
  }
`

export const LoadingSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  max-width: 1024px;
  margin: 0px auto;
  padding-top: 80px;
  padding-bottom: 46px;
  column-gap: 22px;
  row-gap: 32px;

  @media (max-width: 420px) {
    width: 70%;
    padding-top: 86px;
    padding-bottom: 46px;
  }
`
