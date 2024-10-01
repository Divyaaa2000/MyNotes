import React from 'react';

const MainContent =  React.forwardRef(({title,content}, ref) => {
    return (
        <div ref={ref} className="container text-center my-5">
            <h1 className="display-4">{title}</h1>
            <p className="lead">{content}</p>
            <button className="btn btn-primary btn-lg mt-3">Create First Note</button>
        </div>
    );
});

export default MainContent;
