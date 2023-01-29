import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PrimaryDropdown from "../../components/UI/FormElements/PrimaryDropdown";

export default {
  title: "Components/Primary Dropdown",
  component: PrimaryDropdown,
} as ComponentMeta<typeof PrimaryDropdown>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PrimaryDropdown> = (args) => (
  <PrimaryDropdown {...args} />
);

export const Example = Template.bind({});

Example.args = {
  options: [
    { id: "alpha", name: "alpha" },
    { id: "beta", name: "beta" },
    { id: "charlie", name: "charlie" },
  ],
};
