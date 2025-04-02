import MovieList from "../components/MovieList.jsx";

const Home = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Your Movie Watchlist</h2>
            <MovieList />
        </div>
    );
};

export default Home;
