<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Material;

class MaterialController extends Controller
{
    public function index() {
        $materials = Material::all();
        return response()->json($materials, 201);
    }
    public function insert(Request $tab) {
        $material = new Material();
        $material->space_id=$tab->space_id;
        $material->description=$tab->description;
        if(!$material->save()){
            return ['msg'=>false];
        }else {
            return ['msg'=>true];
        }
        
    }
}
