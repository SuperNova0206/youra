import { useDispatch, useSelector } from "react-redux";
import { getMateriels, deleteMateriel } from "../../services/ActionsThunk_Materiel";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Container, Table, Button, ButtonGroup } from 'react-bootstrap';
import { FaTrash, FaInfoCircle } from 'react-icons/fa';

export default function ListMateriel() {
    const materials = useSelector((state) => state.materiel.materials);
    const searchText = useSelector((state) => state.materiel.searchText);
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
        <Container className="mt-4">
            {materials && (
                <div className="animate__animated animate__fadeIn">
                    <h3 className="mb-5 text-center">Tous les Matériels</h3>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                                <th>Groupe ID</th>
                                <th>Type de Matériel</th>
                                <th>Nom de l'Espace</th>
                                <th>Type d'Espace</th>
                                <th>Trainer ID</th>
                                <th>Nom du Trainer</th>
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
                                    <td>{material.group_id}</td>
                                    <td>{material.type_material}</td>
                                    <td>{material.nom}</td>
                                    <td>{material.type_space}</td>
                                    <td>{material.id_trainer}</td>
                                    <td>{material.nom_triner}</td>
                                    <td>
                                        <ButtonGroup>
                                            <Link to={`/materiels/${material.id}`} className="btn btn-info btn-sm me-2">
                                                <FaInfoCircle /> Détails
                                            </Link>
                                            <Button onClick={() => handleDelete(material)} variant="danger" size="sm">
                                                <FaTrash /> Supprimer
                                            </Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}
        </Container>
    );
}