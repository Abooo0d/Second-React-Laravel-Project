import PageComponent from "../Components/PageComponent";
import SurvaysListItem from "../Components/SurvaysListItem";
import { useStateContext } from "../Contexts/ContextProvider";
import image1 from "../Assets/ffffffff.jpg";
import image2 from "../Assets/iced-americano.png";
import image3 from "../Assets/vegetables.jpg";
import { BsPlusCircle } from "react-icons/bs";
import TButton from "../Components/Core/TButton";
let images = [image1, image2, image3];
export default function Survay() {
  const { survays } = useStateContext();
  const onDeleteClick = () => {
    console.log("OnDelete");
  };
  return (
    <PageComponent
      title="Survay"
      buttons={
        <TButton color="green" to="/survay/create">
          <BsPlusCircle className="h-6 w-6 mr-2" />
          Create New Survay
        </TButton>
      }
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {survays.map((survay, index) => (
          <SurvaysListItem
            survay={survay}
            key={survay.id}
            onDeleteClick={onDeleteClick}
            img={images[index]}
          />
        ))}
      </div>
    </PageComponent>
  );
}
