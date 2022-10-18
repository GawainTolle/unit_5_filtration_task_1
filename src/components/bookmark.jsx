import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ status, handleToggleBookmark, id }) => {
    return (
        <button onClick={() => handleToggleBookmark(id)}>
            <i className={"bi bi-book" + (status ? "-fill" : "")}></i>
        </button>
    );
};
Bookmark.propTypes = {
    status: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    handleToggleBookmark: PropTypes.func.isRequired
};

export default Bookmark;
