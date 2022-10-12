import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

function SongList(props) {
  return (
    <>
      {props.songs.map((song, i) => {
        return (
          <div className="ui divided list ">
            <div className="item" key={i}>
              <div className="right floated content">
                <button
                  className="ui button primary"
                  onClick={() => props.selectSong(song)}
                >
                  Select
                </button>
              </div>
              <div className="content">{song.title} </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);
