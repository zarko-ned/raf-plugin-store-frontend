import React from "react";
import {Link} from "react-router-dom";

function PluginButton({ name, to }) {
    return (
        <Link to={to} className="plugin-button-link">
            <button className="plugin-button">
                {name}
            </button>
        </Link>
    );
}
export default PluginButton