import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '../components/home/HeroSection';
import Search from '../components/home/Search';
import MovieCard from '../components/home/MovieCard';
export const Route = createFileRoute('/Home')({
   component: Home,
})  


function Home(){

    return (
        <>
           <HeroSection/>
           <Search/>
           <MovieCard/>

        </>

    );
}