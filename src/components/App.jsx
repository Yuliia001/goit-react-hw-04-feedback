import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { SectionTitle } from './Title/SectionTitle';
import { Notification } from './Notitficatin/Notitficatin';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevItems => prevItems + 1);
        break;
      case 'neutral':
        setNeutral(prevItems => prevItems + 1);
        break;
      case 'bad':
        setBad(prevItems => prevItems + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const totalFeedback = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Layout>
      <SectionTitle title="Please leave feadback" />
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
      />
      <SectionTitle title="Statistics" />
      {totalFeedback === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      )}
      <GlobalStyle />
    </Layout>
  );
};
