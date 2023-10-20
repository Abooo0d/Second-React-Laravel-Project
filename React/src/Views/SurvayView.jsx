import React, { useState } from "react";
import Page from "../Components/PageComponent";
import { HiOutlinePhoto } from "react-icons/hi2";
import TButton from "../Components/Core/TButton";
import axiosClint from "../AxiosClient/Axios";

export default function SurvayView() {
  const [survay, setSurvay] = useState({
    title: "",
    slug: "",
    status: "",
    description: "",
    image: "",
    Image_url: "",
    expire_date: "",
    questions: [],
  });
  const onSubmit = (ev) => {
    ev.preventDefault();
    axiosClint.post("survay",{
      title:"Abood Item 1",
      description: "Test",
      expire_date:"11/24/2023",
      status:true
    }).then()
    .catch(err => {
      console.log(err);
      console.log("Abood");
    })
  };
  const onImageChange = () => {
    console.log("Image Changed");
  };
  return (
    <Page title="SurvayView">
      <form action="#" method="post" onSubmit={onSubmit}>
        <div className="shadow sm:overflow-hidden sm:rounded-md">
          <div className="space-y-6 bg-white py-5 px-4 sm:p6">
            {/* Image */}
            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                {survay.Image_url && (
                  <img
                    src={survay.Image_url}
                    alt={survay.title}
                    className="w-32 h-32 object-cover"
                  />
                )}
                {!survay.Image_url && (
                  <span className="flex justify-center items-center text-gray-400 h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    <HiOutlinePhoto className="w-8 h-8" />
                  </span>
                )}
                <button
                  type="button"
                  className=" relative ml-5 rounded-md border border-gray-300 bg-white py-2 px-3
                              text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50
                              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <input
                    type="file"
                    className="absolute left-0 top-0 right-0 bottom-0 opacity-0"
                    onChange={onImageChange}
                  />
                  Change
                </button>
              </div>
            </div>
            {/* Image */}
            {/* Title */}
            <div className="col-span-6 ms:col-span-3">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Survay Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={survay.title}
                placeholder="Survay Title"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={(ev) =>
                  setSurvay({ ...survay, title: ev.target.value })
                }
              />
            </div>
            {/* Title */}
            {/* Description */}
            <div className="col-span-6 ms:col-span-3">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Survay Description
              </label>
              <textarea
                name="description"
                id="description"
                value={survay.description}
                placeholder="Survay Title"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={(ev) =>
                  setSurvay({ ...survay, description: ev.target.value })
                }
              ></textarea>
            </div>
            {/* Description */}
            {/* Expire Date */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="expire_date"
                className="block text-sm font-medium text-gray-700"
              >
                Expire Date
              </label>
              <input
                type="date"
                name="expire_date"
                id="expire_date"
                value={survay.expire_date}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={(ev) =>
                  setSurvay({ ...survay, expire_date: ev.target.value })
                }
              />
            </div>
            {/* Expire Date */}
            {/* Active */}
            <div className="flex items-start">
              <div className="flex h5 items-center">
              <input
                type="checkbox"
                name="status"
                id="status"
                checked={survay.status}
                value={survay.expire_date}
                placeholder="Survay Title"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                onChange={(ev) =>
                  setSurvay({ ...survay, status: ev.target.value })
                }
              />
              </div>
              <div className="ml-3 text-sm">
              <label htmlFor="comments" className="font-medium text-gray-700">
                Active
              </label>
              <p className="text-gray-500">
                Whether To Make The Survay Publicly Available
              </p>
            </div>
            </div>

            {/* Active */}
          </div>
          <div className="bg-gray-50 px-4 py-4 text-right sm-px-6">
            <TButton>Save</TButton>
          </div>
        </div>
      </form>
    </Page>
  );
}
