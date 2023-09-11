import { StatisticsData, Text } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsData>
      <Text>Good:{good}</Text>
      <Text>Neutral:{neutral}</Text>
      <Text>Bad:{bad}</Text>
      <Text>Total:{total}</Text>
      <Text>Positive feedback:{positivePercentage}%</Text>
    </StatisticsData>
  );
};
