import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormateur } from "../../services/ActionThunk_Formateur";
import { useNavigate, useParams } from "react-router";

export default function EditFormateur() {
    const [ Formateur, setFormateur ] = useState( null );
    const Formateurs = useSelector( ( state ) => state.Formateur.Formateurs );
    const { id } = useParams();


    useEffect( () => {
        const trv = Formateurs.find( ( Formateur ) => Formateur.id == id );
        if ( trv ) setFormateur( trv );
    }, [ Formateurs ] );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleChange( e ) {
        setFormateur( { ...Formateur, [ e.target.name ]: e.target.value } );
    }
    function handleSubmit( e ) {
        e.preventDefault();
        dispatch( updateFormateur( Formateur ) );
        navigate( "/ListFormateur" );
    }
    return Formateur ? (
        <div>
            <h3 className="mt-4 mb-4 text-center">Ajouter un nouveau Formateur</h3>
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
                        value={ Formateur.nom_complet }
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
                        value={ Formateur.date_naissance }
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
                            checked={ Formateur.genre === "M" ? "checked" : "" }
                        />{ " " }
                        <span>Male</span>
                        <input
                            type="radio"
                            name="genre"
                            className="mx-3"
                            id="f"
                            value="f"
                            onChange={ handleChange }
                            checked={ Formateur.genre === "F" ? "checked" : "" }
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
                        value={ Formateur.note }
                        onChange={ handleChange }
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Ajouter
                </button>
            </form>
        </div>
    ) : (
        <p>Aucun Formateur n'est trouvé!</p>
    );
}
