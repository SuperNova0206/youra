import { useDispatch, useSelector } from "react-redux";
import { getMateriels ,deleteMateriel } from "../../services/ActionsThunk_Materiel";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ListMateriel() {
    const materials = useSelector((state) => state.materiel.materials);
    const searchText = useSelector((state) => state.materiel.searchText);
    // console.log(materials);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMateriels()).then((result) => {
            console.log('Dispatched getMateriels:', result);
        });
    }, [dispatch]);
    const handleDelete = (material) => {
        if (window.confirm(`Voulez-vous supprimer le matériel ${material.description} ?`)) {
            dispatch(deleteMateriel(material.id));
        }
    };

    return (
        <>
            <div className="container mt-5">
                <Link to="/create" className="btn btn-primary">
                    Nouveau Matériel
                </Link>
            </div>
            <div className="container text-center mt-4">
                {materials && (
                    <div>
                        <h3 className="mb-5">Tous les Matériels</h3>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {materials.filter((material) => {
                                    if (searchText === "") return material;
                                    return material.description.toLowerCase().includes(searchText.toLowerCase());
                                }).map((material) => (
                                    <tr key={material.id}>
                                        <td>{material.id}</td>
                                        <td>{material.description}</td>
                                        <td>
                                            <Link to={`/materiel/${material.id}`} className="btn btn-info">
                                                Détails
                                            </Link>
                                            <Link to={`/materiel/${material.id}/edit`} className="btn btn-info">
                                                Éditer
                                            </Link>
                                            <button onClick={() => handleDelete(material)} className="btn btn-danger">
                                                Supprimer
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    );
}