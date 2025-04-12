import connectMongoDB from "../../config/mongodb";
import React from "react";
import styles from './page.module.css';
import chair from './image/this_chair.jpg';

let user = {
  profile: "davey Jones"
};

const images = [
  './images/this_chair.jpg',
  './images/this_chair.jpg',
  './images/this_chair.jpg'
]; //edit this to change the cover images

export default function Home() {
  connectMongoDB();
  return (
    <div 
    className="flex items-center justify-center min-h-screen text-4xl">
        <div>
          <img
              src="/images/ocean-sea.gif"
              alt="background"
              className={styles.bg}
            />
          <div className={styles.contents}>
              <div
              className="flex flex-col gap-6 p-6 w-[60%]">
              <div
                className="flex items-center justify-center p-6 text-white rounded pirata">
                <p className={styles.styleTest}>
                  Scallywag Stash is your campus hideout for free school supplies.
                  Trade and claim treasures like books, clothes, and furniture — all
                  donated by fellow students. Log in to find what you need, no gold
                  doubloons required.
                </p>

              </div>

            <div className={styles.container}>
              <div className={styles.imageSet}>
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                className={styles.fadeInImg}
                style={{ animationDelay: `${(index * 0.3) + 1.3}s` }}
                alt={`image-${index + 1}`}
              />
            ))}
              </div>
            </div>
          </div>
        </div>
    
        <div
          style={{ backgroundColor: "#3c2222" }}
          className="flex flex-col items-center justify-center p-6 text-white rounded pirata"
        >
          <p>Plunder of the Week</p>

          <img
            src="/images/background.jpg"
            alt="Item image"
            className="w-[50px] h-[50px] mb-4"
          />
          <p className="text-center">{user.profile}</p>
        </div>
      </div>
    </div>
  );
}
