import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col justify-center items-center p-8">
        <div className="w-full flex flex-row justify-between items-center mb-2">
          <Link
            to="/admin"
            className="text-red-500 font-bold underline hover:text-red-700"
          >
            Go to admin Dashboard
          </Link>
          <Link
            to="/user"
            className="text-red-500 font-bold underline hover:text-red-700"
          >
            Go to user Dashboard
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center wrap">
          <img
            src="assets/images/undraw_navigator_a479.png"
            alt="undraw_navigator_a479.png"
            width={400}
            height={400}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            dignissimos sapiente adipisci numquam, repellat quaerat, ratione
            enim temporibus, facere maiores asperiores perspiciatis distinctio
            obcaecati facilis officiis modi! Magni, at quam?
          </p>
          <img
            src="assets/gif/car-revolving-animation.gif"
            alt="Towing"
            width={400}
            height={400}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            dignissimos sapiente adipisci numquam, repellat quaerat, ratione
            enim temporibus, facere maiores asperiores perspiciatis distinctio
            obcaecati facilis officiis modi! Magni, at quam?
          </p>
          <img
            src="assets/images/Towing.png"
            alt="Towing"
            width={400}
            height={400}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            dignissimos sapiente adipisci numquam, repellat quaerat, ratione
            enim temporibus, facere maiores asperiores perspiciatis distinctio
            obcaecati facilis officiis modi! Magni, at quam?
          </p>
          <img
            src="assets/images/By_my_car.png"
            alt="By_my_car"
            width={400}
            height={400}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            dignissimos sapiente adipisci numquam, repellat quaerat, ratione
            enim temporibus, facere maiores asperiores perspiciatis distinctio
            obcaecati facilis officiis modi! Magni, at quam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
