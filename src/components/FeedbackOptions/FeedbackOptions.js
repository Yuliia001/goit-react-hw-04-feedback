import { Button, WrapperFeedback } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <WrapperFeedback>
      {options.map(option => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {' '}
          {option}{' '}
        </Button>
      ))}
    </WrapperFeedback>
  );
};
