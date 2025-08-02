import React, {useState, useEffect} from "react";
import axios from "../../axiosInstance.js";
import Card from "react-bootstrap/Card";


function StudentPluginCard() {
    const [plugins, setPlugins] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);

    const fetchPlugins = async () => {
        try {
            const response = await axios.get(`/teacherplugin?page=${page}`);
            if (response.data.success) {
                setPlugins((prev) => [...prev, ...response.data.data]);

                const pagination = response.data.pagination;
                // Postavi dugme samo ako ima više od 10 itema u totalu
                setHasMore(pagination.totalItems > 10 && pagination.currentPage < pagination.totalPages);
            }
        } catch (error) {
            console.error("Greška prilikom preuzimanja plugina:", error);
        }
    };

    useEffect(() => {
        fetchPlugins();
    }, [page]);

    const handleLoadMore = () => {
        setPage((prev) => prev + 1);
    };

    return (
        <div className="plugin-container">
            <div className="plugin-header">
                <h2 className="store-link">
                    <a href="/store">⭢ Idi na Store</a>
                </h2>
                <p className="plugin-description">
                    <strong>Studentski plugin store</strong> je u fazi razvoja.<br />
                    Ovde možete pronaći najnovije verzije dostupnih pluginova.
                </p>
            </div>

            <table className="retro-table">
                <thead>
                <tr>
                    <th>Naziv</th>
                    <th>Verzija</th>
                    <th>Preuzmi</th>
                </tr>
                </thead>
                <tbody>
                {plugins.map((plugin) => (
                    <tr key={plugin.plugin_release_id}>
                        <td>{plugin.name}</td>
                        <td>{plugin.version}</td>
                        <td>
                            <a
                                href={`http://157.180.37.247/build/distributions/${plugin.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                📥 Download
                            </a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {hasMore && (
                <div className="load-more">
                    <button onClick={handleLoadMore}>Učitaj još</button>
                </div>
            )}
        </div>
    );
}

export default StudentPluginCard;
