import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  padding: 20px;
  width: 300px;
`;

export const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  font-size: 10px;
  max-width: 100%;
  padding: 5px;
  border-radius: 5px;
  :hover,
  :focus {
    background: rgb(27 180 139);
    color: white;
  }
`;
