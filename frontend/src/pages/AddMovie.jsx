import MovieForm from "../components/MovieForm.jsx";

const AddMovie = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Add a New Movie</h2>
            <MovieForm />
        </div>
    );
};

export default AddMovie;
