import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

import { StyledDiv, StyledH6 } from './styled';

import { Button, Flex } from '@/pages/common/atoms'

const Header = ({ children }) => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate(-1);
  }
  return (
    <StyledDiv>
      <Flex alignItems='center'>
        <Button margin='0' padding='1.2rem' border='none' onBtnClick={handleBtnClick}>
          <IoArrowBackOutline fontSize='2rem'/>
        </Button>
        <StyledH6>{children}</StyledH6>
      </Flex>
    </StyledDiv>
  )
}

export default Header