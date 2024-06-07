import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { showMateriel } from "../../services/ActionsThunk_Materiel";

export default function ShowMateriel() {
    const { id } = useParams();
    const materiel = useSelector((state) => state.materiel.details_Materiel);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showMateriel(id));
    }, [id, dispatch]);

    return (
        materiel && (
            <div className="card w-75 mx-auto mt-4">
                <h5 className="card-header bg-primary text-white fw-bold">
                    ID: {materiel.id}
                </h5>
                <div className="card-body">
                    <p>Description: {materiel.description}</p>
                </div>
            </div>
        )
    );
}

