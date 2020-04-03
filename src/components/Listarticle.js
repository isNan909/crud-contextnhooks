import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export const Listarticle = () => {
  const { article, editArticle, deleteArticle } = useContext(GlobalContext);
  // console.log(article);
  return (
    <Fragment>
      <div className="Articlelist">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h3>Article Inventory</h3>
            </div>
            <div className="col-md-4 text-right">
              {article.length >= 1 ? (
                <Link to="/create">
                  <button type="button" className="btn btn-primary">
                    Create New Article
                  </button>
                </Link>
              ) : (
                <p></p>
              )}
            </div>
          </div>
          <div>
            <div className="listing">
              <div className="row">
                {article.length > 0 ? (
                  <div className="col-md-12">
                    {article.map(article => (
                      <div key={article.id}>
                        <div className="listBox">
                          <div className="row">
                            <div className="col-md-8">
                              <Link to={`/detail/${article.id}`}>
                                <span>{article.category}</span>
                                <h4>{article.heading}</h4>
                                <p>{article.subHeading}</p>
                                <span>{article.author}</span>
                              </Link>
                            </div>
                            <div className="col-md-4 actionIcons text-right">
                              <Link to={`/edit/${article.id}`}>
                                <div
                                  onClick={() => editArticle(article.id)}
                                  className="roundIcon"
                                >
                                  <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M16 2C16.2626 1.73735 16.5744 1.52901 16.9176 1.38687C17.2608 1.24473 17.6286 1.17157 18 1.17157C18.3714 1.17157 18.7392 1.24473 19.0824 1.38687C19.4256 1.52901 19.7374 1.73735 20 2C20.2626 2.26264 20.471 2.57444 20.6131 2.9176C20.7553 3.26077 20.8284 3.62856 20.8284 4C20.8284 4.37143 20.7553 4.73923 20.6131 5.08239C20.471 5.42555 20.2626 5.73735 20 6L6.5 19.5L1 21L2.5 15.5L16 2Z"
                                      stroke="white"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </Link>
                              <div className="roundIcon">
                                <button className="noBg" onClick={() => deleteArticle(article.id)} >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M3 6H5H21"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M10 11V17"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M14 11V17"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="noList">
                    <p>It Seems you dont have any articles</p>
                    <Link to="/create">
                      <button type="button" className="btn btn-primary">
                        Create New Article
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
