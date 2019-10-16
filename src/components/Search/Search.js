import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Search.css';
import { SEARCH } from '../../actions/search.action';
import { searchMusic } from '../../services/music.service';

function Search(props) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (text === "") return;

    props.searchText(text);

    props.searchStart();
    searchMusic(text)
      .then(res => {
        props.searchEnd();
        props.fetchMusic(res);
      })
      .catch(err => {
        props.searchEnd();
      });
  };

  return (
    <div className="row">
      <div className="col-sm-12 col-md-12">
        <div className="search">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search..." onChange={handleChange} />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    searchStart: () => dispatch({ type: SEARCH.SEARCHING, payload: true }),
    searchEnd: () => dispatch({ type: SEARCH.SEARCHING_STOP, payload: false }),
    searchText: (text) => dispatch({ type: SEARCH.SEARCH_TEXT, payload: text }),
    fetchMusic: (lists) => dispatch({ type: SEARCH.FETCH_MUSIC, payload: lists }),
  }
};

export default connect(null, mapDispatchToProps)(Search);