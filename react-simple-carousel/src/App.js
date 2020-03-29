import React, { Component, Fragment } from "react";
import styles from './index.module.scss';

const slidesData = [
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum corporis minima dolores consequuntur? Sapiente officia perspiciatis necessitatibus nihil perferendis quos est, corporis veniam animi doloremque, tenetur explicabo provident cupiditate ab?",
    author: "Paweł",
    images: "https://via.placeholder.com/1200x800/004d7a/1.jpg"
  },
  {
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero qui ea cupiditate, nemo, accusamus temporibus fugit minus explicabo, quasi a dolorem iste perspiciatis quam aliquam! Optio dolorem exercitationem delectus officia.",
    author: "Anna",
    images: "https://via.placeholder.com/1200x800/008793/3.jpg"
  },
  {
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti sapiente libero velit cupiditate, iure cumque fugit, error placeat delectus nihil, repudiandae ipsam. Explicabo omnis laboriosam nemo accusantium adipisci saepe quis!.",
    author: "Janusz",
    images: "https://via.placeholder.com/1200x800/00bf72/4.jpg"
  },
  {
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, asperiores, tenetur voluptatum porro delectus, quo architecto dignissimos doloremque itaque eaque accusantium enim commodi quia quisquam distinctio nemo repudiandae eius. Hic.",
    author: "Andrzej",
    images: "https://via.placeholder.com/1200x800/ff0000/5.jpg"
  },
  {
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis iste esse blanditiis earum odit accusantium magni eius laborum ad ut! Voluptate, consectetur fugiat. Quod quam dignissimos eaque maiores delectus? Deserunt.",
    author: "Grzegorz",
    images: "https://via.placeholder.com/1200x800/e79b00/7.jpg"
  }
];

const arrowLeft = (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <title>circle-left</title>
    <path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z" />
    <path d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z" />
  </svg>
);

const arrowRight = (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" >
    <title>circle-right</title>
    <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z" />
    <path d="M11.086 22.086l2.829 2.829 8.914-8.914-8.914-8.914-2.828 2.828 6.086 6.086z" />
  </svg>
);

class CarouselItem extends Component {
  render() {
    const { type } = this.props;
    let arrowItem = (type === 'left')
      ? <span className={styles.carousel__arrow + ' ' + styles.carousel__arrow_left} onClick={this.props.onClick}>{arrowLeft}</span>
      : <span className={styles.carousel__arrow + ' ' + styles.carousel__arrow_right} onClick={this.props.onClick}>{arrowRight}</span>;

    return (
      <Fragment>{arrowItem}</Fragment>
    )
  }
}


class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <span
          className={
            this.props.index === this.props.activeIndex
              ? styles.carousel__indicator + ' ' + styles.carousel__indicator_active
              : styles.carousel__indicator
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

class CarouselSlide extends Component {
  render() {
    let srcImage = this.props.index === this.props.activeIndex ? this.props.slide.images : this.props.pix;
    return (
      <li
        className={
          this.props.index === this.props.activeIndex
            ? styles.carousel__slide + ' ' + styles.carousel__slide_active
            : styles.carousel__slide
        }
      >
        <img src={srcImage} alt={this.props.slide.author} />
      </li>
    );
  }
}

class Carousel extends Component {
  state = {
    activeIndex: 0,
    autoPlay: false,
    autoPlayShow: true,
    carouselIndicators: true,
    timeInterval: 1000,
    blackPix: 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEADMDOJaQAA3AA/uuuAAA='
  };

  goToSlide = index => {
    this.setState({
      activeIndex: index
    });
  };

  goToSlideType = typeSlide => {
    let index = this.state.activeIndex;
    let slidesLength =
      typeSlide === "prev" ? slidesData.length : slidesData.length - 1;

    if (typeSlide === "prev") {
      if (index < 1) {
        index = slidesLength;
      }
      --index;
    }
    if (typeSlide === "next") {
      if (index === slidesLength) {
        index = -1;
      }
      ++index;
    }
    this.setState({
      activeIndex: index
    });
  };

  keyPress = e => {
    if (e.keyCode === 37) {
      this.goToSlideType("prev");
    }
    if (e.keyCode === 39) {
      this.goToSlideType("next");
    }
  };

  playGallery = () => {
    this.state.autoPlay === false
      ? this.setState({ autoPlay: true })
      : this.setState({ autoPlay: false });
  };

  componentDidMount() {
    document.addEventListener("keydown", this.keyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPress, false);
  }

  onStart = () => {
    this.interval = setInterval(() => {
      this.setState({
        autoPlay: true
      })
      this.goToSlideType('next');
    }, this.state.timeInterval);
  }

  onStop = () => {
    clearInterval(this.interval);
  }

  render() {
    let playStop;
    let slides = slidesData.map((slide, index) => {
      return (
        <CarouselSlide
          key={index}
          index={index}
          activeIndex={this.state.activeIndex}
          pix={this.state.blackPix}
          slide={slide}
        />
      );
    });

    let indicator = slidesData.map((slide, index) => {
      return (
        <CarouselIndicator
          key={index}
          index={index}
          activeIndex={this.state.activeIndex}
          isActive={this.state.activeIndex === index}
          onClick={e => this.goToSlide(index)}
        />
      );
    });

    if (this.state.autoPlayShow) {
      playStop = (
        <Fragment>
          <div className={styles.play} onClick={this.onStart} />
          <div className={styles.stop} onClick={this.onStop} />
        </Fragment>
      )
    }
    console.log(this.state.activeIndex)
    return (
      <div className={styles.carousel}>
        <CarouselItem type="left" onClick={() => this.goToSlideType("prev")} />
        <CarouselItem type="right" onClick={() => this.goToSlideType("next")} />
        {playStop}
        <ul className={styles.carousel__slides}>{slides}</ul>
        {this.state.carouselIndicators ? <ul className={styles.carousel__indicators}>{indicator}</ul> : ''}
      </div>
    );
  }
}

export default Carousel;