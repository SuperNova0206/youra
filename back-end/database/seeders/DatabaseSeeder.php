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
                MaterialTypesSeeder::class,
                MaterialGroupsSeeder::class,
                MaterialsSeeder::class, 
                SpacesSeeder::Class,
                SpaceTypesSeeder::class,
                TrainersSeeder::class,
                PermissionsSeeder::Class,
                UsersSeeder::class
            ]
        );
    }
}
