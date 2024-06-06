import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateMateriel } from "../../services/ActionsThunk_Materiel";

export default function EditMateriel() {
    const [ Materiel, setMateriel ] = useState( null );
    const Materiels = useSelector( ( state ) => state.Materiel.Materiels );
    const { id } = useParams();


    useEffect( () => {
        const trv = Materiels.find( ( Materiel ) => Materiel.id === id );
        if ( trv ) setMateriel( trv );
    }, [ Materiels ] );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleChange( e ) {
        setMateriel( { ...Materiel, [ e.target.name ]: e.target.value } );
    }
    function handleSubmit( e ) {
        e.preventDefault();
        dispatch( updateMateriel( Materiel ) );
        navigate( "/ListMateriel" );
    }
    return Materiel ? (
        <div>
            <h3 className="mt-4 mb-4 text-center">Ajouter un nouveau Materiel</h3>
            <form className="w-50 mx-auto mt-4" onSubmit={ handleSubmit }>
                <div className="mb-3">
                    <label for="nom_complet" className="form-label">
                        Nom complet
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="nom_complet"
                        name="nom_complet"
                        value={ Materiel.nom_complet }
                        onChange={ handleChange }
                    />
                </div>
                <div className="mb-3">
                    <label for="date_naissance" className="form-label">
                        Date de naissance
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="date_naissance"
                        name="date_naissance"
                        value={ Materiel.date_naissance }
                        onChange={ handleChange }
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="genre" className="form-label">
                        Genre
                    </label>
                    <div>
                        <input
                            type="radio"
                            name="genre"
                            id="m"
                            value="m"
                            onChange={ handleChange }
                            checked={ Materiel.genre === "M" ? "checked" : "" }
                        />
                        <span>Male</span>
                        <input
                            type="radio"
                            name="genre"
                            className="mx-3"
                            id="f"
                            value="f"
                            onChange={ handleChange }
                            checked={ Materiel.genre === "F" ? "checked" : "" }
                        />
                        <span>Femelle</span>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="note" className="form-label">
                        Note
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="note"
                        name="note"
                        value={ Materiel.note }
                        onChange={ handleChange }
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Ajouter
                </button>
            </form>
        </div>
    ) : (
        <p>Aucun Materiel n'est trouvé!</p>
    );
}
