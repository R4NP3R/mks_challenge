import { motion } from 'framer-motion';
import { LoadingIconDiv } from "./styles";

export const LoadingIcon = () => {
    return <LoadingIconDiv>
            <motion.img 
            src='src/assets/loader-circle.svg'
            alt="loading icon"
            initial={{rotate: 0, scale: 2}}
            animate={{rotate: 360}}
            transition={{repeat: Infinity, duration: 1, ease: "linear"}}
            />
          </LoadingIconDiv>
}