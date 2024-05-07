<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SpaceTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('space_types')->insert([
            'space_id' => 1,
            'type'=>'office',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
