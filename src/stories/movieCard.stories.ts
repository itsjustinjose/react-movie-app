import type { Meta, StoryObj } from '@storybook/react';
import MovieCard from "../components/movieCard";
import SampleMovie from "./sampleData"; 

const meta = {
    title: 'Home Page/MovieCard',
    component: MovieCard,
} satisfies Meta<typeof MovieCard>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
    args: { movie : SampleMovie, selectFavourite : (id : number) =>{ console.log(`id is ${id}`) }
    }  
};
Basic.storyName = "Default";


const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
export const Exceptional: Story = {
    args: {movie :sampleNoPoster, selectFavourite : (id :number) => { console.log(id)}
    }  
};
Exceptional.storyName = "Exception";