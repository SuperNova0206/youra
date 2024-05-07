<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class MaterialsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('materials')->insert([
            'group_id' => 1, 
            'type_id' => 1, 
            'description' => 'Material 1', 
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
