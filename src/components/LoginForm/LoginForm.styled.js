import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SubmitBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RegisterText = styled.div`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: rgba(33, 37, 41, 0, 75);
`;

export const SignUpLink = styled(Link)`
  text-decoration: none;
`;
