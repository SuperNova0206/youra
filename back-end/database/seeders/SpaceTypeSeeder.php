<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SpaceTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('space_types')->insert([
            [
                'type' => 'stock',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'type' => 'store',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'type' => 'classroom',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'type' => 'office',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
