import { BsPencil } from "react-icons/bs";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import TButton from "./Core/TButton";
export default function SurvaysListItem({survay ,onDeleteClick,img}) {
  return (
    <div className="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]">
      <img src={survay.image_url} alt={survay.title} className="w-full h-48  object-cover" />
      <h4 className="mt-4 text-lg font-bold">{survay.title}</h4>
      <div dangerouslySetInnerHTML={{__html:survay.description}} className="overflow-hidden flex-1">
      </div>
      <div className="flex justify-between items-center mt-3">
        <TButton to={`/survay/${survay.id}`}>
          <BsPencil className="w-5 h-5 mr-2"/>
          Edit
        </TButton>
        <div className="flex items-center">
          <TButton href={`/view/survay/${survay.slug}`} circle link >
            <BsBoxArrowUpRight className="w-5 h-5"/>
          </TButton>
          {survay.id && (
            <TButton onClickEvent={onDeleteClick} circle link color="red">
              <FaTrash  className="w-5 h-5"/>
            </TButton>
          )}
        </div>
      </div>

    </div>
  )
}
