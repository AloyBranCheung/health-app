import { ComponentStory, ComponentMeta } from "@storybook/react";
import MainCard from "../components/HealthDashboard/MainCard";

export default {
  title: "Main Card",
  component: MainCard
} as ComponentMeta<typeof MainCard>;

export const Template: ComponentStory<typeof MainCard> = (args) => (
  <MainCard {...args} />
);
