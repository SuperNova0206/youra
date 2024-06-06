import { useDispatch, useSelector } from "react-redux";
import { deleteFormateur } from "../../services/ActionThunk_Formateur";
import { Link } from "react-router-dom";

export default function ListFormateur() {
    const Formateurs = useSelector( ( state ) => state.Formateur.Formateurs );
    const text_recherche = useSelector( ( state ) => state.Formateur.text_recherche );

    const dispatch = useDispatch();

    function handleSupprimer( Formateur ) {
        if ( window.confirm( `Voulez vous supprimer le Formateur?${ Formateur.nom_complet }` ) )
            dispatch( deleteFormateur( Formateur.id ) );
    }
    return (
        <>
            <div className="container mt-5">
                <Link to="/create" className="btn btn-primary">
                    Nouveau Formateur
                </Link>
            </div>
            <div className="container text-center mt-4">
                { Formateurs && (
                    <div>
                        <h3 className="mb-5">Tous les Formateurs</h3>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nom complet</th>
                                    <th>Genre</th>
                                    <th>Date de naissance</th>
                                    <th>Note</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { Formateurs.filter( ( Formateur ) => {
                                    if ( text_recherche === "" ) { return Formateur }
                                    return Formateur.nom_complet.toLowerCase().includes( text_recherche.toLowerCase() );
                                } ).map( ( Formateur ) => (
                                    <tr>
                                        <td>{ Formateur.id }</td>
                                        <td>{ Formateur.nom_complet }</td>
                                        <td>{ Formateur.genre === "M" ? "Male" : "Femelle" }</td>
                                        <td>{ Formateur.date_naissance }</td>
                                        <td>{ Formateur.note }</td>
                                        <td>
                                            <Link
                                                to={ `/Formateur/${ Formateur.id }` }
                                                className="btn btn-info"
                                            >
                                                Détails
                                            </Link>
                                            <Link
                                                to={ `/Formateur/${ Formateur.id }/edit` }
                                                className="btn btn-info"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={ () => handleSupprimer( Formateur ) }
                                                className="btn btn-danger"
                                            >
                                                Supprimer
                                            </button>
                                        </td>
                                    </tr>
                                ) ) }
                            </tbody>
                        </table>
                    </div>
                ) }
            </div>
        </>
    );
}
