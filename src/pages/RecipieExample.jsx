import React, { useEffect, useState } from "react";
import RecipeAPI from "../RecipeApi";
import { Link } from "react-router-dom";

const RecipieExample = () => {
  const { API } = RecipeAPI;
  const [dat, setDat] = useState([]);

  const getCategories = async () => {
    try {
      const response = await API.get();
      setDat(response.data.categories);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="px-4 m-3">
      <div className="grid  md:grid-cols-6 gap-2">
        {dat.map((category) => (
          <div
            key={category.idCategory}
            className="flex flex-col items-center max-w-sm rounded overflow-hidden 
            shadow-md shadow-gray-600 m-4 
            transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <Link to={`/category/${category.strCategory}`} className="">
              <img src={category.strCategoryThumb} alt="" className="w-full" />
            </Link>
            <div className="px-6 py-4 ">
              <Link to={`/category/${category.strCategory}`} className="block">
                {category.strCategory}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipieExample;
