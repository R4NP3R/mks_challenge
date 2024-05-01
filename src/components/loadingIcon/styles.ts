import { motion } from "framer-motion";
import styled from "styled-components";

export const LoadingIconDiv = styled.div`
  width: 100%;
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoadingIconImg = styled(motion.img)`
  width: 32px;
  margin: 0px auto;
`