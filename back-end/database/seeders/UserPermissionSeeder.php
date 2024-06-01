<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('user_permission_info')->insert([
            [
                'permission_id' => 1,
                'user_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'permission_id' => 2,
                'user_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'permission_id' => 3,
                'user_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'permission_id' => 4,
                'user_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'permission_id' => 1,
                'user_id' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'permission_id' => 3,
                'user_id' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'permission_id' => 2,
                'user_id' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'permission_id' => 4,
                'user_id' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
