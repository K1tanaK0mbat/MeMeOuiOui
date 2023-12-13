import React from 'react';

const Project = ({ title, imageUrl, projectUrl, repoUrl, description }) => {
  return (
    <figure className="projCard">
      <a href={projectUrl}>
        <img src={imageUrl} alt={title} />
      </a>
      <div className="projMini">
        <h2>{title}</h2>
        <a href={repoUrl}>Github Repo</a>
      </div>
    </figure>
  );
};

export default Project;