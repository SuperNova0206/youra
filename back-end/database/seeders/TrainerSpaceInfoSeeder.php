<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TrainerSpaceInfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('trainer_space_info')->insert([
            [
                'trainer_id' => 1,
                'space_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'trainer_id' => 1,
                'space_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'trainer_id' => 2,
                'space_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'trainer_id' => 3,
                'space_id' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'trainer_id' => 4,
                'space_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'trainer_id' => 5,
                'space_id' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
