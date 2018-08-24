import $ from 'jquery';

import React, { Component } from 'react';

import { connect } from 'react-redux';
import html2canvas from 'html2canvas';
import Canvas2Image from 'canvas-to-image';
import config from '../config';

class ButtonPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      downloadLink: null
    };

    this.downloadCSV = this.downloadCSV.bind(this);
    this.saveImage = this.saveImage.bind(this);
  }

  componentDidUpdate() {
    console.log('setting file path for ' + this.props.mapType.mapTypeVal);
    const filePath = config.csvFileURLs[this.props.mapType.mapTypeVal];
    this.state.downloadLink = filePath;
  }

  downloadCSV() {
    console.log('in downloadCSV');
  }

  saveImage() {
    console.log('in saveImage');
    $('.gmnoprint').attr('data-html2canvas-ignore', true);
    $('.gm-fullscreen-control')
      // .parent()
      .attr('data-html2canvas-ignore', true);
    const transformDiv = '.gm-style>div:first>div:first>div:last>div';
    // const transformDiv = '.gm-style>div:first>div';
    if (window.chrome) {
      // Fix for Chrome
      var transform = $(transformDiv).css('transform');
      var comp = transform.split(','); //split up the transform matrix
      var mapleft = parseFloat(comp[4]); //get left value
      var maptop = parseFloat(comp[5]); //get top value
      $(transformDiv).css({
        //get the map container. not sure if stable
        transform: 'none',
        left: mapleft,
        top: maptop
      });
    }
    // console.log('map-header');

    html2canvas($('.map-header')[0], {
      logging: false,
      useCORS: true
    }).then(canvas => {
      canvas.setAttribute('id', 'myCanvas5');
      $('#canvas_wrapper')[0].appendChild(canvas);
      // console.log('before');

      html2canvas($('#before')[0], {
        logging: false,
        useCORS: true
      }).then(canvas => {
        canvas.setAttribute('id', 'myCanvas3');
        $('#canvas_wrapper')[0].appendChild(canvas);
        // console.log('after');

        html2canvas($('#after')[0], {
          logging: false,
          useCORS: true
        }).then(canvas => {
          canvas.setAttribute('id', 'myCanvas4');
          $('#canvas_wrapper')[0].appendChild(canvas);
          // console.log('map1');
          html2canvas($('div.map_before > div > div.gm-style')[0], {
            logging: false,
            useCORS: true
          }).then(canvas => {
            // console.log('maadfsdfp2');
            canvas.setAttribute('id', 'myCanvas1');
            $('#canvas_wrapper')[0].appendChild(canvas);
            // console.log('map2');

            if (window.chrome) {
              // Fix for Chrome
              $(transformDiv).css({
                left: 0,
                top: 0,
                transform: transform
              });
            }
            html2canvas($('div.map_after > div > div.gm-style')[0], {
              logging: false,
              useCORS: true
            }).then(canvas => {
              canvas.setAttribute('id', 'myCanvas2');
              $('#canvas_wrapper')[0].appendChild(canvas);

              if (window.chrome) {
                // Fix for Chrome
                $(transformDiv).css({
                  left: 0,
                  top: 0,
                  transform: transform
                });
              }
              setTimeout(function() {
                // console.log('showing canvas');

                $('#canvas_wrapper').show();
                setTimeout(function() {
                  // console.log('merging canvas');

                  html2canvas($('#canvas_wrapper')[0], {
                    logging: false,
                    useCORS: true
                  }).then(canvas => {
                    $('#canvas_wrapper').empty();
                    canvas.setAttribute('id', 'myCanvas6');
                    $('#final_canvas_wrapper')[0].appendChild(canvas);
                    setTimeout(function() {
                      // console.log('Canvas2Image');
                      Canvas2Image('myCanvas6', {
                        name: 'myImage',
                        type: 'jpg',
                        quality: 0.7
                      });
                      $('#final_canvas_wrapper').empty();
                    }, 1000);
                  });
                }, 1000);
              }, 1000);
            });
          });
        });
      });
    });
  }

  saveImage1() {
    let self = this;
    // console.log('in saveImage');
    $('.gmnoprint').attr('data-html2canvas-ignore', true);
    $('.gm-fullscreen-control')
      .parent()
      .attr('data-html2canvas-ignore', true);
    const transformDiv = '.gm-style>div:first>div:first>div:last>div';

    const transformDivBefore =
      'div.map_before>div>div.gm-style>div:first>div:first>div:last>div';

    const transformDivAfter =
      'div.map_after>div>div.gm-style>div:first>div:first>div:last>div';

    // const transformDiv = '.gm-style>div:first>div';
    if (window.chrome) {
      // Fix for Chrome
      var transformBefore = $(transformDivBefore).css('transform');
      var transformAfter = $(transformDivAfter).css('transform');
      var compB = transformBefore.split(','); //split up the transform matrix
      var mapleftB = parseFloat(compB[4]); //get left value
      var maptopB = parseFloat(compB[5]); //get top value
      var compA = transformAfter.split(','); //split up the transform matrix
      var mapleftA = parseFloat(compA[4]); //get left value
      var maptopA = parseFloat(compA[5]); //get top value
      $(transformDivBefore).css({
        //get the map container. not sure if stable
        transform: 'none',
        left: mapleftB,
        top: maptopB
      });
      $(transformDivAfter).css({
        //get the map container. not sure if stable
        transform: 'none',
        left: mapleftA,
        top: maptopA
      });
    }
    // console.log('map-header');

    html2canvas($('.map-wrapper')[0], {
      logging: false,
      useCORS: true
    }).then(canvas => {
      canvas.setAttribute('id', 'myCanvas');
      $('#final_canvas_wrapper')[0].appendChild(canvas);
      // if (window.chrome) {
      //   // Fix for Chrome
      //   $(transformDivBefore).css({
      //     left: 0,
      //     top: 0,
      //     transform: transformBefore
      //   });
      //   $(transformDivAfter).css({
      //     left: 0,
      //     top: 0,
      //     transform: transformAfter
      //   });
      // }

      setTimeout(function() {
        console.log('Canvas2Image');
        Canvas2Image('myCanvas', {
          name:
            'WaterCup_' +
            self.props.wcEdition +
            '-' +
            self.props.village.villageName +
            '_' +
            self.props.village.villageCode +
            '- ' +
            self.props.mapType.mapTypeVal,
          type: 'jpg',
          quality: 0.7
        });
        $('#final_canvas_wrapper').empty();
      }, 1000);
    });
  }

  render() {
    return (
      <div className="row save-panel">
        <div className="col-12 text-center">
          <button
            className="btn btn-info"
            id="save_image"
            onClick={this.saveImage}
          >
            Save as Image
          </button>

          <a
            className="btn btn-info"
            id="download_csv"
            href={this.state.downloadLink}
            onClick={this.downloadCSV}
          >
            Download CSV
          </a>
        </div>
      </div>
    );
  }
}
function mapStateToProps({
  mapType,
  village,
  mapTypeData,
  timePeriod,
  wcEdition
}) {
  return { mapType, village, mapTypeData, timePeriod, wcEdition };
}

export default connect(mapStateToProps, null)(ButtonPanel);
