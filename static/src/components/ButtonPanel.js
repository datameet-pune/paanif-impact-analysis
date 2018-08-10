import React, { Component } from 'react';

export default class ButtonPanel extends Component {
  render() {
    return (
      <div className="row save-panel">
        <div className="col-12 text-center">
          <button className="btn-info" id="save_image">
            Save as Image
          </button>

          <button className="btn-info" id="download_csv">
            Download CSV
          </button>
        </div>
      </div>
    );
  }
}
