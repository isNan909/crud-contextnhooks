import React, { Fragment, useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export const Editarticle = route => {
  let history = useHistory();
  const { article, editArticle } = useContext(GlobalContext);
  const [selectedArticle, setSelectedArticle] = useState({
    id: null,
    category: "",
    heading: "",
    description: "",
    subHeading: "",
    author: ""
  });
  const currentArticleId = route.match.params.id;

  useEffect(() => {
    const articleId = currentArticleId;
    const selectedArticle = article.find(x => x.id === parseInt(articleId));
    setSelectedArticle(selectedArticle);
    // eslint-disable-next-line
  }, []);

  const handleOnChange = (articleKey, val) =>
    setSelectedArticle({ ...selectedArticle, [articleKey]: val });

  const onSubmit = e => {
    e.preventDefault();
    editArticle(selectedArticle);
    history.push("/");
  };

  return (
    <Fragment>
      <div className="container Articleedit">
        <h3>Edit Articles</h3>
        <br />
        <br />
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Article Heading</label>
            <input
              type="text"
              className="form-control"
              value={selectedArticle.heading}
              onChange={e => handleOnChange("heading", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Sub Heading</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="2"
              value={selectedArticle.subHeading}
              onChange={e => handleOnChange("subHeading", e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Description</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              value={selectedArticle.description}
              onChange={e => handleOnChange("description", e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Article Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              value={selectedArticle.category}
              onChange={e => handleOnChange("category", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Author Name</label>
            <input
              type="text"
              className="form-control"
              id="author"
              value={selectedArticle.author}
              onChange={e => handleOnChange("author", e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save Article
          </button>
          <Link to="/">
            {" "}
            <button type="button" className="btn">
              Cancel
            </button>
          </Link>
        </form>
      </div>
    </Fragment>
  );
};
