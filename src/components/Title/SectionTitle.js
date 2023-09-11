import { Title, Wrapper } from './SectionTitle.styled';

export const SectionTitle = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};
