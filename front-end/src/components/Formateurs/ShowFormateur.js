import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { showFormateur } from "../../services/ActionThunk_Formateur";

export default function ShowFormateur() {
  const { id } = useParams();
  const Formateur = useSelector((state) => state.Formateur.details_Formateur);
  const disptach = useDispatch();

  useEffect(() => {
    disptach(showFormateur(id));
  }, [id]);
  return (
    Formateur && (
      <div className="card w-75 mx-auto mt-4">
        <h5 className="card-header bg-primary text-white fw-bold">
          {Formateur.nom_complet}
        </h5>
        <div className="card-body">
          <p>Date de naissance: {Formateur.date_naissance}</p>
          <p>Genre: {Formateur.genre == "M" ? "Male" : "Femelle"}</p>
          <p>Note: {Formateur.note}</p>
        </div>
      </div>
    )
  );
}
