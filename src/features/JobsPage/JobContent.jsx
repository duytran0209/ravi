import React from "react";
import styled from "styled-components";

const JobContentStyled = styled.div``;

const JobContent = ({ heading, caption }) => {
  return (
    <JobContentStyled>
      <h2>{heading}</h2>
      <div className="summary">
        <span>{caption}</span>
      </div>
    </JobContentStyled>
  );
};

export default JobContent;
