import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [moveis, setMoveis] = useState([]);
    useEffect(() => {
        fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        )
        .then((response) => response.json())
        .then((json) => {
            setMoveis(json.data.movies);
            setLoading(false);
        });
    }, [])
    console.log(moveis)
    return <div>
        {loading ? <h1>Loading...</h1> : null}
    </div>;
}

export default App;