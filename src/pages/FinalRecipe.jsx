import React, { useEffect, useState } from "react";
import RecipeApi from "../RecipeApi";
import { useParams, useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import GoBackButton from "../util/GoBackButton";
function FinalRecipe() {
  //const { cname, id } = useParams();
  const { API3 } = RecipeApi;
  const [steps, setSteps] = useState([]);
  const location = useLocation();
  console.log(location.state);

  const getSteps = async () => {
    try {
      const value = await API3.get(`?i=${location.state.mealid}`);
      setSteps(value.data.meals);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getSteps();
  }, []);

  return (
    <div className="m-2 px-3">
      <GoBackButton />
      <p>clickek item{location.state.catname}</p>
      <div className="flex flex-col items-center">
        {steps.map((step) => (
          <div
            key={step.idMeal}
            className=" flex flex-col items-center max-w-fit rounded overflow-hidden shadow-md shadow-gray-600 m-4"
          >
            {step.strYoutube ? (
              <ReactPlayer url={step.strYoutube} controls={true} width="100%" />
            ) : (
              <img src={step.strMealTHumb} />
            )}
            <div className="p-4">
              <h1 className="font-bold text-3xl text-gray-800">Steps :</h1>
            </div>

            <div className="p-4 text-justify">
              <p className="text-lg text-gray-800">{step.strInstructions}</p>
            </div>
            <div>
              <div className="p-4">
                <h1 className="font-bold text-2xl text-gray-800">
                  Ingredients :
                </h1>
              </div>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 20 }).map((_, index) => (
                  <div key={index} className="flex items-center">
                    {step[`strIngredient${index + 1}`] && (
                      <li className="bg-gray-400 text-white p-2 rounded-md">
                        {step[`strIngredient${index + 1}`]}
                      </li>
                    )}
                  </div>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FinalRecipe;
