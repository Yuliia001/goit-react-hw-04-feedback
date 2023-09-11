import styled from 'styled-components';

export const WrapperFeedback = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
`;
export const Button = styled.button`
  background-color: #d4ecfd;
  padding: 10px 20px;
  border: 1px solid #232b31;
  border-radius: 4px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s ease-in-out;
  &:hover,
  &:focus {
    background-color: #ffef64;
    transform: scale(0.9);
  }
`;
