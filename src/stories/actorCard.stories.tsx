import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ActorCard from "../components/actorCard";
import { ActorProps } from "../types/interfaces";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/ActorCard",
  component: ActorCard,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ margin: "2rem" }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
} as Meta<typeof ActorCard>;

const Template: StoryFn<typeof ActorCard> = (args) => <ActorCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  actor: {
    id: 123,
    name: "Tom Hardy",
    profile_path: "oIciQWr8VwKoR8TmAw1owaiZFyb.jpg",
    popularity: 82.4,
    known_for_department: "Acting",
    gender: 2,
    known_for: [
      {
        id: 1,
        title: "Inception",
        poster_path: "/poster.jpg",
        media_type: "movie",
      },
    ],
  } as ActorProps,
};

export const NoImage = Template.bind({});
NoImage.args = {
  actor: {
    id: 456,
    name: "Unknown Actor",
    popularity: 12.3,
    known_for_department: "Directing",
    gender: 1,
    known_for: [],
  } as ActorProps,
};
