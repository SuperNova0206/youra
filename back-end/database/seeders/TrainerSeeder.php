<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class TrainerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('trainers')->insert([
            [
                'full_name' => 'John Doe',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'full_name' => 'Jane Smith',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'full_name' => 'Michael Johnson',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'full_name' => 'Emily Brown',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'full_name' => 'David Lee',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'full_name' => 'Sarah Davis',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'full_name' => 'Andrew Wilson',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'full_name' => 'Jessica Thompson',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'full_name' => 'Christopher Martinez',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'full_name' => 'Olivia Hernandez',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}
