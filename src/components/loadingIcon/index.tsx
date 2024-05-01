import loading from '../../assets/rotate-cw.svg';
import { LoadingIconDiv, LoadingIconImg } from "./styles";

export const LoadingIcon = () => {
    return <LoadingIconDiv>
            <LoadingIconImg 
            src={loading} 
            alt="loading icon"    
            animate={{rotate: 360}}
            transition={{repeat: Infinity, duration: 2}}
            />
          </LoadingIconDiv>
}