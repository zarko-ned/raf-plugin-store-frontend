import React, {useState, useEffect} from "react";
import axios from "../../axiosInstance.js";
import Card from "react-bootstrap/Card";
import {FaGithub} from 'react-icons/fa'


function StudentPluginCard() {
    const [plugins, setPlugins] = useState([]);
    const [description, setDescription] = useState("Ucitavanje opisa...");
    const [author, setAuthor] = useState("Ucitavanje opisa...");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);
    const [isExpandedDesc, setIsExpandedDesc] = useState(false);
    const maxLength = 35; // Maksimalni broj karaktera prije skraćivanja

    const toggleExpand = () => {
        setIsExpandedDesc(!isExpandedDesc);
    };

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

    const fetchDescription = async () => {
        try {
            const response = await axios.get('/');
            if (response.data.success) {
                console.log(response.data.data[0])
                setDescription(response.data.data[0].description); // Bez spread operatora
                setAuthor(response.data.data[0].author); // Bez spread operatora
            }
        } catch (error) {
            console.error("Greška prilikom preuzimanja opisa:", error);
        }
    };

    useEffect(() => {
        fetchPlugins();
        fetchDescription();
    }, [page]);

    const handleLoadMore = () => {
        setPage((prev) => prev + 1);
    };

    return (
        <div className="plugin-container">
            <p
                className="plugin-description"
                onClick={toggleExpand}
                style={{cursor: 'pointer'}}
            >
                {description.length > maxLength && !isExpandedDesc
                    ? `${description.substring(0, maxLength)}...`
                    : description}
            </p>
            <div className="plugin-header">
                <div className="button-container " style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                    {/* Dugme za kopiranje linka */}
                    <button
                        className="action-button"
                        onClick={() => {
                            navigator.clipboard.writeText('https://rafplugins.store/teacherplugin/update');
                            alert('Link kopiran!');
                        }}
                    >
                        <span className="emoji">📋</span> Kopiraj Plugin Repository link
                    </button>

                    {/* Dugme za GitHub - CORRECTED: using FaGithub instead of GitHubIcon */}
                    <a
                        className="action-button github-button"
                        href="https://github.com/RAFSoftLab/raf-teacher-plugin"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="emoji"><FaGithub/></span> GitHub Repo
                    </a>
                </div>


            </div>

            <table className="retro-table">
                <thead>
                <tr>
                    <th>Naziv</th>
                    <th>Verzija</th>
                    <th>Opis</th>
                    <th>Datum izdanja</th>
                    <th>Preuzmi</th>
                </tr>
                </thead>
                <tbody>
                {plugins.map((plugin) => (
                    <tr key={plugin.plugin_release_id}>
                        <td>{plugin.name}</td>
                        <td>{plugin.version}</td>
                        <td>{plugin.description}</td>
                        <td>
                            {new Intl.DateTimeFormat('sr-RS', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                            }).format(new Date(plugin.build_date))}
                        </td>

                        <td style={{width: "150px", whiteSpace: "nowrap"}}>
                            <a
                                href={`http://157.180.37.247/build/distributions/${plugin.name}.zip`}
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
