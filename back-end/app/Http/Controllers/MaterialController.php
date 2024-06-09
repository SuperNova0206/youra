<?php

namespace App\Http\Controllers;

use App\Models\Material;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MaterialController extends Controller
{
    public function index()
    {
        $materials = Material::with(['space.spaceType', 'materialGroups', 'materialTypes', 'trainerSpaceInfo.trainer'])->get();
        $mappedMaterials = $materials->map(function ($material) {
            return [
                'id' => $material->id,
                'description' => $material->description,
                'group_id' => $material->materialGroups->pluck('id')->implode(', '),
                'type_material' => $material->materialTypes->pluck('name')->implode(', '),
                'nom' => $material->space->name,
                'type_space' => optional($material->space->spaceType)->type,
                'id_trainer' => optional(optional($material->trainerSpaceInfo)->trainer)->id,
                'nom_triner' => optional(optional($material->trainerSpaceInfo)->trainer)->full_name,
            ];
        });

        return response()->json($mappedMaterials);
    }

    public function show($id)
    {
        // Récupérer le matériel avec ses relations
        $material = Material::with(['space', 'materialGroups', 'materialTypes', 'trainerSpaceInfo.trainer'])->find($id);
        // Construire la réponse JSON
        $response = [
            'id' => $material->id,
            'description' => $material->description,
            'group_id' => $material->materialGroups->pluck('id')->implode(', '),
            'type_material' => $material->materialTypes->pluck('name')->implode(', '),
            'nom' => optional($material->space)->name,
            'type_space' => optional(optional($material->space)->spaceType)->type,
            'id_trainer' => optional(optional($material->trainerSpaceInfo)->trainer)->id,
            'nom_trainer' => optional(optional($material->trainerSpaceInfo)->trainer)->full_name,
        ];

        // Retourner la réponse JSON
        return response()->json($response);
    }

    public function destroy($id)
    {
        $material = Material::findOrFail($id); // Récupère le matériel par son ID
        $material->delete(); // Supprime le matériel
        Log::info('Material Deleted:', ['material' => $material]);
        return response()->json(['message' => 'Material deleted successfully']); // Retourne une réponse avec un message de succès
    }
    
}
