<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**wh
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(
            [
                SpaceTypeSeeder::class,
                SpaceSeeder::class,
                MaterialSeeder::class,
                MaterialGroupSeeder::class,
                MaterialTypeSeeder::class,
                TrainerSeeder::class,
                PermissionSeeder::class,
                UsersSeeder::class,
                TrainerSpaceInfoSeeder::class,
                UserPermissionSeeder::class
            ]
        );
    }
}
