<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MaterialGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('material_groups')->insert([
            [
                'material_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'material_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'material_id' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'material_id' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'material_id' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'material_id' => 6,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'material_id' => 7,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'material_id' => 8,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
