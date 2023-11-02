import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../AxiosClient/Axios";
import Spinner from "./Core/Spinner";
import SurvayPublicQuestion from "./SurvayPublicQuestion";

export default function SurvayPublicView() {
  let answers = {};
  const [survay, setSurvay] = useState({ questions: [] });
  const [survayFinished, setSurvayFinished] = useState(false);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();
  useEffect(() => {
    setLoading(true);
    axiosClient
      .get(`/survay/get-by-slug/${slug}`)
      .then(({ data }) => {
        setSurvay(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  function answerChanged(question, value) {
    answers[question.id] = value;
    console.log(question, value);
  }
  function onSubmit(ev) {
    ev.preventDefault();
    axiosClient
      .post(`/survay/${survay.id}/answer`, { answers })
      .then((res) => {
        console.log(res);
        setSurvayFinished(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      {loading && <Spinner />}
      {!loading && survay && (
        <form
          onSubmit={(ev) => onSubmit(ev)}
          className="container mx-auto py-8"
        >
          <div className="grid grid-cols-6">
            <div className="mr-4 shadow-md rounded-md">
              <img
                src={survay.image_url}
                alt="Survay Image"
                className="rounded-md"
              />
            </div>
            <div className="col-span-5">
              <h1 className="text-3xl mb-3">{survay.title}</h1>
              <p className="text-gray-700 text-sm mb-3">
                {" "}
                Expire Date: {survay.expire_date}
              </p>
              <p className="text-gray-700 text-sm mb-3">
                Description: {survay.description}
              </p>
            </div>
          </div>
          {survayFinished && (
            <div className="py-8 px-8 bg-green-600 text-white fw-[600px] mx-auto text-center my-5 rounded-md">
              Thank You For Participating In The Survay
            </div>
          )}
          {!survayFinished && (
            <>
              <div className="p-3 border border-gray-300 shadow-md my-2 rounded-md">
                {survay.questions.map((question, index) => (
                  <SurvayPublicQuestion
                    key={question.id}
                    question={question}
                    index={index}
                    answerChanged={(val) => answerChanged(question, val)}
                  />
                ))}
              </div>
              <button
                type="submit"
                className="inline-flex shadow-md justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </>
          )}
        </form>
      )}
    </div>
  );
}
