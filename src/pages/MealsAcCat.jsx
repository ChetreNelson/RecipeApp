import React, { useCallback, useEffect, useState } from "react";
import RecipeAPI from "../RecipeApi";
import {  useNavigate, useParams } from "react-router-dom";
import GoBackButton from "../util/GoBackButton";

const { API2 } = RecipeAPI;
function MealsAcCat() {
  const [getprops, setGetProps] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const getApis = useCallback(async () => {
    try {
      setLoading(true);
      const resp = await API2.get(`?c=${categoryName}`);
      setGetProps(resp.data.meals);
      setLoading(false);
    } catch (e) {}
  }, [categoryName]);

  useEffect(() => {
    getApis();
  }, [getApis]);

  const handleCLick = (categoryName, value) => {
    navigate(`/category/${categoryName}/id`, {
      state: { catname: categoryName, mealid: value },
    });
  };

  return (
    <div className="m-2 px-3">
      {isLoading && (
        <div className="flex items-center justify-center h-screen">
          <p className="text-xl font-bold">Loading...</p>
        </div>
      )}

      <GoBackButton />
      <div className="grid  md:grid-cols-6 gap-2">
        {getprops !== null &&
          getprops.map((val) => (
            <div
              key={val.idMeal}
              className="flex flex-col items-center max-w-sm rounded overflow-hidden 
              shadow-md shadow-gray-600 m-4 
              transition-transform duration-300 ease-in-out hover:scale-105"
            >
             
              {/* <Link to={{
                pathname:`/category/${categoryName}/${val.idMeal}`,
                state:{clickedItem : val.idMeal}
            }}> */}

              <img
                onClick={() => handleCLick(categoryName, val.idMeal)}
                src={val.strMealThumb}
                alt=""
                className="w-full cursor-pointer"
                style={{ height: "125px", objectFit: "cover" }}
              />
              {/* </Link> */}

              <div
                className="px-6 py-4 cursor-pointer "
                onClick={() => handleCLick(categoryName, val.idMeal)}
              >
                {val.strMeal}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MealsAcCat;
