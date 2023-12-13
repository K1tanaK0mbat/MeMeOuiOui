import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ title, imageUrl, projectUrl, repoUrl, }) => {
  return (
    <figure className="projCard">
      <a href={projectUrl}>
        <img src={imageUrl} alt={title} />
      </a>
      <div className="projMini">
        <h2>{title}</h2><div >
        <a href={repoUrl} >Github Repo</a>
      </div>
      </div>
    </figure>
  );
};
Project.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    projectUrl: PropTypes.string.isRequired,
    repoUrl: PropTypes.string.isRequired,
  };

export default Project;