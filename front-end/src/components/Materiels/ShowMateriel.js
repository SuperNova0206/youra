import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { showMateriel } from "../../services/ActionsThunk_Materiel";

export default function ShowMateriel() {
    const { id } = useParams();
    const material = useSelector( ( state ) => state.materiel.details_Materiel );
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( showMateriel( id ) );
    }, [ id, dispatch ] );

    return (
        material && (
            <div className="card w-75 mx-auto mt-4">
                <h5 className="card-header bg-primary text-white fw-bold">
                    Type de Matériel{ material.type_material }
                </h5>
                <div className="card-body">
                    <p>ID: <strong>{ material.id }</strong></p>
                    <p>Description: <strong>{ material.description }</strong></p>
                    <p>Groupe ID: <strong>{ material.group_id }</strong></p>
                    <p>Nom de l'Espace: <strong>{ material.nom }</strong></p>
                    <p>Type d'Espace: <strong>{ material.type_space }</strong></p>
                    <p>Trainer ID: <strong>{ material.id_trainer }</strong></p>
                    <p>Nom du Trainer: <strong>{ material.nom_trainer }</strong></p>
                </div>
            </div>
        )
    );
}

