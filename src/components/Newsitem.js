import React from "react";

const Newsitem =(props)=> {
    let {title,description,imageUrl,newsUrl,author,date, source} = props
    return (
      <div>
        <div className="card my-3">
          
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
          <span className="badge rounded-pill bg-primary">{source}</span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
      
    
    );
}

export default Newsitem;
