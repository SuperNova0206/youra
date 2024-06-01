<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('permissions')->insert([
            [
                'permission_type' => 'r',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'permission_type' => 'd',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'permission_type' => 'u',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'permission_type' => 'p',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
