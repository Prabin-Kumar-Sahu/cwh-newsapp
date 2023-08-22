import React, { Component } from "react";

export class NewsItem extends Component {
  render() {

    let {title , description , imageUrl} = this.props;
    return (
        <div className= "my-3">

      <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
           {description}
          </p>
          <a href="http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
        </div>
    );
  }
}

export default NewsItem;
