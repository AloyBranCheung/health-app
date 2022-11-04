import React from "react";
import MyDetails from "../components/HealthDashboard/MyDetails";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "HealthDashboard/MyDetails",
  component: MyDetails,
} as ComponentMeta<typeof MyDetails>;

export const Template: ComponentStory<typeof MyDetails> = (args) => (
  <MyDetails {...args} />
);
