import { useState } from "react";
import { useDispatch } from "react-redux";
import { createMateriel } from "../../services/ActionsThunk_Materiel";
import { useNavigate } from "react-router";

export default function CreateMateriel() {
    const [formData, setFormData] = useState({
        description: "",
        group_id: "",
        type_material: "",
        nom: "",
        type_space: "",
        id_trainer: "",
        nom_trainer: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createMateriel(formData));
        navigate("/materiels");
    };

    return (
        <div className="container">
            <h2>Créer un nouveau matériel</h2>
            <form onSubmit={handleSubmit} method="post">
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <input type="text" name="description" id="description" className="form-control" value={formData.description} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="group_id" className="form-label">Groupe ID:</label>
                    <input type="text" name="group_id" id="group_id" className="form-control" value={formData.group_id} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="type_material" className="form-label">Type de matériel:</label>
                    <input type="text" name="type_material" id="type_material" className="form-control" value={formData.type_material} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Nom de l'espace:</label>
                    <input type="text" name="nom" id="nom" className="form-control" value={formData.nom} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="type_space" className="form-label">Type d'espace:</label>
                    <input type="text" name="type_space" id="type_space" className="form-control" value={formData.type_space} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="id_trainer" className="form-label">ID du formateur:</label>
                    <input type="text" name="id_trainer" id="id_trainer" className="form-control" value={formData.id_trainer} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="nom_trainer" className="form-label">Nom du formateur:</label>
                    <input type="text" name="nom_trainer" id="nom_trainer" className="form-control" value={formData.nom_trainer} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Créer</button>
            </form>
        </div>
    );
}
