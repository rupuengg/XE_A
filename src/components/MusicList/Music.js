import React from 'react';
import './Music.css';

function Music(props) {
  return (
    <div className="col-md-3 col-sm-3">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-4 col-sm-4">
            <img src={props.artworkUrl100} className="card-img" alt="..." />
          </div>
          <div className="col-md-8 col-sm-8">
            <div className="card-body">
              <h5 className="card-title">{props.collectionName}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;