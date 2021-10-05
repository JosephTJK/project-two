import { html } from 'lit';
import '../src/app.js';

export default {
  title: 'Project two',
  component: 'learning-card',
  argTypes: {
    type: { control: 'text' },
  },
};

function Template({ type, slot }) {
  return html`
    <learning-card type="${type}">
    ${slot}
    </learning-card>
  `;
}
export const Card = Template.bind({});

export const ScienceCard = Template.bind({});
ScienceCard.args = {
  type: 'science',
  slot: html`<p>slot stuff</p>`
};