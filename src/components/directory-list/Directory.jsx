import React, { Component } from "react";
import MenuItems from "../menu-items-component/MenuItems";
import "./Directory.styles.scss";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/YbccwdP/joshua-coleman-y-VRLC75-Ma8-unsplash.jpg",
          id: 1,
          linkUrl: "shop/hats"
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/4Yks2x8/amanda-vick-oh-Wf6-Yuz-OQk-unsplash.jpg",
          id: 2,
          linkUrl: "shop/jackets"
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/vwykvrt/giorgio-trovato-b9-Kdwn-KWh-Rk-unsplash.jpg",
          id: 3,
          linkUrl: "shop/sneakers"
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/jWh7t0c/woman-wearing-yellow-jacket-3622616.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens"
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/vQ8jF0z/man-wearing-red-sweatshirt-and-black-pants-leaning-on-the-845434.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/mens"
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <MenuItems key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
