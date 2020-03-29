import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import styles from "./ShareButton.css";

let description = "Fotografia ślubna, zdjęcia ślubne, Warszawa, Lublin, Chełm";
let shareIcon = [
  {
    name: "facebook",
    color: "#3B5998",
    viewBox: "0 0 27 27",
    path:
      "M 22 5.16 c -0.406 -0.054 -1.806 -0.16 -3.43 -0.16 c -3.4 0 -5.733 1.825 -5.733 5.17 v 2.882 H 9 v 3.913 h 3.837 V 27 h 4.604 V 16.965 h 3.823 l 0.587 -3.913 h -4.41 v -2.5 c 0 -1.123 0.347 -1.903 2.198 -1.903 H 22 V 5.16 Z",
    title: "Udostępnij w serwisie Facebook. Strona otworzy się w nowym oknie."
  },
  {
    name: "twitter",
    color: "#1DA1F2",
    viewBox: "0 0 32 32",
    path:
      "M 27.996 10.116 c -0.81 0.36 -1.68 0.602 -2.592 0.71 a 4.526 4.526 0 0 0 1.984 -2.496 a 9.037 9.037 0 0 1 -2.866 1.095 a 4.513 4.513 0 0 0 -7.69 4.116 a 12.81 12.81 0 0 1 -9.3 -4.715 a 4.49 4.49 0 0 0 -0.612 2.27 a 4.51 4.51 0 0 0 2.008 3.755 a 4.495 4.495 0 0 1 -2.044 -0.564 v 0.057 a 4.515 4.515 0 0 0 3.62 4.425 a 4.52 4.52 0 0 1 -2.04 0.077 a 4.517 4.517 0 0 0 4.217 3.134 a 9.055 9.055 0 0 1 -5.604 1.93 A 9.18 9.18 0 0 1 6 23.85 a 12.773 12.773 0 0 0 6.918 2.027 c 8.3 0 12.84 -6.876 12.84 -12.84 c 0 -0.195 -0.005 -0.39 -0.014 -0.583 a 9.172 9.172 0 0 0 2.252 -2.336",
    title: "Udostępnij w serwisie Twitter. Strona otworzy się w nowym oknie."
  },
  {
    name: "google",
    color: "#DC4E41",
    viewBox: "0 0 32 32",
    path:
      "M 12 15 v 2.4 h 3.97 c -0.16 1.03 -1.2 3.02 -3.97 3.02 c -2.39 0 -4.34 -1.98 -4.34 -4.42 s 1.95 -4.42 4.34 -4.42 c 1.36 0 2.27 0.58 2.79 1.08 l 1.9 -1.83 C 15.47 9.69 13.89 9 12 9 c -3.87 0 -7 3.13 -7 7 s 3.13 7 7 7 c 4.04 0 6.72 -2.84 6.72 -6.84 c 0 -0.46 -0.05 -0.81 -0.11 -1.16 H 12 Z m 15 0 h -2 v -2 h -2 v 2 h -2 v 2 h 2 v 2 h 2 v -2 h 2 v -2 Z",
    title: "Udostępnij w serwisie Google+. Strona otworzy się w nowym oknie."
  }
];

class ShareButton extends Component {

  openWindow = event => {
    let winWidth = 520;
    let winHeight = 320;
    let winTop = window.screen.height / 2 - winHeight / 2;
    let winLeft = window.screen.width / 2 - winWidth / 2;
    let typeSocial = event.currentTarget.attributes["data-share"].value;

    window.open(this.showShareLink(typeSocial), 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
    // console.log(winTop + " " + winLeft)
  };

  showShareLink = typeSocial => {
    let url;
    switch (typeSocial) {
      case "facebook":
        url = "https://www.facebook.com/sharer/sharer.php?u=" + this.getUrl() + "&p=" + description;
        break;
      case "twitter":
        url = "http://twitter.com/share?text=" + description + "&url=" + this.getUrl();
        break;
      case "google":
        url = "https://plus.google.com/share?url=" + this.getUrl();
        break;
      default:
        return typeSocial;
    }
    return url;
  };

  getUrl = () => {
    return window.location.href;
  };

  render() {
    let shareicon = shareIcon.map((icon, index) => {
      let templateIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={icon.viewBox}>
          <g>
            <path d={icon.path} />
          </g>
        </svg>
      );

      let styleColorIcon = {
        backgroundColor: icon.color,
        fill: "#fff",
        margin: "4px 4px 0"
      };

      return (
        <Fragment key={index}>
          <div
            onClick={this.openWindow}
            title={icon.title}
            style={styleColorIcon}
            data-share={icon.name}
            className={styles.shareBtn}
          >
            <span>{templateIcon}</span>
          </div>
        </Fragment>
      );
    });

    return <div className={styles.shareButton}>{shareicon}</div>;
  }
}

export default ShareButton;
