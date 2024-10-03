import React from 'react';
import { useNavigate } from 'react-router-dom';
const MainContent = ({title,content}) => {
    const navigate = useNavigate();

    return (
        
        <div className="container text-center my-5">
            <h1 className="display-4">{title}</h1>
            <p className="lead">{content}</p>
            <button className="btn btn-primary btn-lg mt-3" onClick={() => navigate("/CreateNote")}>Create First Note</button>
        </div>
    );
};

export default MainContent;
