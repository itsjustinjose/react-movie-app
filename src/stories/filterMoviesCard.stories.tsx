import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react/types-6-0";
import FilterMoviesCard from "../components/filterMoviesCard";
import { MemoryRouter } from "react-router";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

export default {
  title: "FilterMoviesCard",
  component: FilterMoviesCard,
  decorators: [
    (Story: React.FC) => <MemoryRouter initialEntries={["/"]}><Story /></MemoryRouter>,
    (Story: React.FC) => (<QueryClientProvider client={queryClient}><Story /></QueryClientProvider>
    )
  ],
} as ComponentMeta<typeof FilterMoviesCard>;

const Template: ComponentStory<typeof FilterMoviesCard> = (args) => (
  <FilterMoviesCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onUserInput: (filterOption, value) => {
    console.log(`Filter option: ${filterOption}, Value: ${value}`);
  },
  titleFilter: "",
  genreFilter: "0",
  languageFilter: "en", // Add a default value for languageFilter
};