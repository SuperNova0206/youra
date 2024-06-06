import { useState } from "react";
import { useDispatch } from "react-redux";
import { createFormateur } from "../../services/ActionThunk_Formateur";
import { useNavigate } from "react-router";

export default function CreateFormateur() {
    const [ Formateur, setFormateur ] = useState( null );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handleChange( e ) {
        setFormateur( { ...Formateur, [ e.target.name ]: e.target.value } );
    }
    function handleSubmit( e ) {
        e.preventDefault();
        dispatch( createFormateur( Formateur ) );
        navigate( "/ListFormateur" );
    }
    return (
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
                        placeholder="Entrez le nom complet"
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
                        />{ " " }
                        <span>Male</span>
                        <input
                            type="radio"
                            name="genre"
                            className="mx-3"
                            id="f"
                            value="f"
                            onChange={ handleChange }
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
                        onChange={ handleChange }
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Ajouter
                </button>
            </form>
        </div>
    );
}
