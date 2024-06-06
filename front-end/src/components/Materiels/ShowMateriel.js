import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { showMateriel } from "../../services/ActionsThunk_Materiel";

export default function ShowMateriel() {
    const { id } = useParams();
    const Materiel = useSelector( ( state ) => state.Materiel.details_Materiel );
    const disptach = useDispatch();

    useEffect( () => {
        disptach( showMateriel( id ) );
    }, [ id ] );
    return (
        Materiel && (
            <div className="card w-75 mx-auto mt-4">
                <h5 className="card-header bg-primary text-white fw-bold">
                    { Materiel.nom_complet }
                </h5>
                <div className="card-body">
                    <p>Date de naissance: { Materiel.date_naissance }</p>
                    <p>Genre: { Materiel.genre === "M" ? "Male" : "Femelle" }</p>
                    <p>Note: { Materiel.note }</p>
                </div>
            </div>
        )
    );
}
