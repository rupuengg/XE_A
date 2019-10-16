import React from 'react';
import { connect } from 'react-redux';
import Music from './Music';
import './Music.css';

function MusicList(props) {
  console.log(props.musics);

  return (
    <div className="row">
      <div className="col-sm-12 col-md-12">
        <div className="music-list">
          <div className="row">
            {!props.isSearching && props.musics.map(music => <Music {...music} />)}
            {props.isSearching && <h1 className="loader">Loading...</h1>}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = store => {
  return {
    musics: store.search.lists,
    isSearching: store.search.isSearching,
  };
};

export default connect(mapStateToProps, null)(MusicList);