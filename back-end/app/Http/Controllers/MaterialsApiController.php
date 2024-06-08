<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Material;
use App\Models\Space;
use App\Models\MaterialType;
use App\Models\MaterialGroup;


class MaterialsApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $materials = Material::all();
        // $SQL_QUERY = $materials->space->name;
        return response()->json($materials, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $description = strval($request->description);   
        $space_name = strval($request->space_name);
        $space_id = Space::where('name', $space_name)->first()->id; // space id 
        Material::insert(
            [
                'space_id'=>$space_id?$space_id:5,
                'description'=>$description,
                'created_at'=>now()
            ]
        );
        return response()->json(Material::all(), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $material = Material::find(intval($id));
        return response()->json($material, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $material = Material::findOrFail($id);

        $description = strval($request->description);
        $space_name = strval($request->space_name);
        $space_id = Space::where('name', $space_name)->first()->id;

        $material->update([
            'space_id' => $space_id,
            'description' => $description,
            'updated_at' => now()
        ]);

        return response()->json($material, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $material = Material::findOrFail($id);
        $material->delete();
        return response()->json(Material::all(), 200);
    }
}
