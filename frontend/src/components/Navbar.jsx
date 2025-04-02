import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold">Movie Watchlist</h1>
            <div className="flex gap-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/add-movie" className="hover:underline">Add Movie</Link>
            </div>
        </nav>
    );
};

export default Navbar;
