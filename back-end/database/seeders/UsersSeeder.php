<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;  
class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'user_name' => 'john_doe', 
            'password' => bcrypt('password'), 
            'job' => 'primary_admin', 
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
