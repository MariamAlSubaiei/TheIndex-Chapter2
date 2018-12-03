import React, { Component } from "react";

class AuthorList extends Component {
  render() {
    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
              <div className="image">
                <img
                  className="card-img-top img-fluid"
                  src={authors[0].imageUrl}
                  alt={authors[0].first_name + " " + authors[0].last_name}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <span>
                    {authors[0].first_name + " " + authors[0].last_name}
                  </span>
                </h5>
                <small className="card-text">
                  {authors[0].books.length} books
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AuthoList;
