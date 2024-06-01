<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'user_name' => 'john_doe',
                'password' => Hash::make('password123'),
                'job' => 'primary',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_name' => 'jane_smith',
                'password' => Hash::make('password456'),
                'job' => 'secondary',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_name' => 'michael_johnson',
                'password' => Hash::make('password789'),
                'job' => 'primary',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_name' => 'emily_brown',
                'password' => Hash::make('passwordabc'),
                'job' => 'secondary',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_name' => 'david_lee',
                'password' => Hash::make('passworddef'),
                'job' => 'primary',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
