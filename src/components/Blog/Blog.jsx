import React from "react";
import "./blog.css";
import { MdKeyboardArrowRight } from "react-icons/md";

import img from "../../assets/curug2.jpg";
import img2 from "../../assets/danau2.jpg";
import img3 from "../../assets/tebing2.jpg";
import img4 from "../../assets/padangrumput.jpg";

const Posts = [
  {
    id: 1,
    postImage: img,
    title: "air terjun yg sangat indah",
    desc: "wisata alam yg di berikan tuhan memang tidak ada tandingan nya mari kunjungi bersama",
  },
  {
    id: 2,
    postImage: img2,
    title: "danau yang sangat jernih",
    desc: "wisata alam yg di berikan tuhan memang tidak ada tandingan nya mari kunjungi bersama",
  },
  {
    id: 1,
    postImage: img3,
    title: "tebing yang sangat mengesankan",
    desc: "wisata alam yg di berikan tuhan memang tidak ada tandingan nya mari kunjungi bersama",
  },
  {
    id: 1,
    postImage: img4,
    title: "padang rumput yang sangat asri",
    desc: "wisata alam yg di berikan tuhan memang tidak ada tandingan nya mari kunjungi bersama",
  },
];

const Blog = () => {
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">our best blog?</h2>
          <p>wawasan tentang pengalaman luar biasa di dunia</p>
        </div>

        <div className="mainContainer grid">
          {Posts.map(({ id, postImage, title, desc }) => {
            return (
              <div className="singlePost grid">
                <div className="imgDiv">
                  <img src={postImage} alt={title} />
                </div>

                <div className="postDetails">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>

                <a href="#" className="flex">
                  lihat selengkapnya
                  <MdKeyboardArrowRight className="icon" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
