<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class MaterialTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('material_types')->insert([
            [
                'name' => 'ordinateurs de bureau',
                'material_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'ecrans et claviers',
                'material_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Cables electriques',
                'material_id' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'rallonges',
                'material_id' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'adaptateurs secteur',
                'material_id' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'chargeurs',
                'material_id' => 6,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'equipement reseau',
                'material_id' => 7,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'equipement audio',
                'material_id' => 8,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'equipement de securite',
                'material_id' => 9,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
