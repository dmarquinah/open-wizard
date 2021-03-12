import { Fragment } from 'react';
import TopicCheckbox from 'components/TopicCheckbox';

export default function Presidential() {
  return (
    <Fragment>
      <TopicCheckbox type="education" />
      <TopicCheckbox type="health" />
      <TopicCheckbox type="economy" />
      <TopicCheckbox type="gobernability" />
      <TopicCheckbox type="security" />
      <TopicCheckbox type="environment" />
    </Fragment>
  );
}
