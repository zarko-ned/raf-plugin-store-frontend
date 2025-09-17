import React, {useState, useEffect} from "react";
import axios from "../../axiosInstance.js";
import Card from "react-bootstrap/Card";
import {FaGithub, FaCopy} from 'react-icons/fa'


function TeacherPluginCard() {
    const [plugins, setPlugins] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);


    const fetchPlugins = async () => {
        try {
            const response = await axios.get(`/releases/teacher?page=${page}`);
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
                <div className="button-container " style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                    {/* Dugme za kopiranje linka */}
                    <button
                        className="action-button"
                        onClick={() => {
                            navigator.clipboard.writeText('https://rafplugins.store/teacherplugin/update');
                            alert('Link kopiran!');
                        }}
                    >
                        <span className="emoji"><FaCopy/></span> Kopiraj link za Plugin Store
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

                    <th>Verzija</th>
                    <th>Opis</th>
                    <th>Datum izdanja</th>
                    <th>Preuzmi</th>
                </tr>
                </thead>
                <tbody>
                {plugins.map((plugin) => (
                    <tr key={plugin.plugin_release_id}>
                        <td data-label="Verzija">{plugin.version}</td>
                        <td data-label="Opis">{plugin.description}</td>
                        <td data-label="Datum izdanja">
                            {new Intl.DateTimeFormat('sr-RS', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                            }).format(new Date(plugin.build_date))}
                        </td>
                        <td data-label="Preuzmi" style={{width: "150px", whiteSpace: "nowrap"}}>
                            <a
                                href={`https://rafplugins.store/build/distributions/${plugin.name}.zip`}
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

export default TeacherPluginCard;
