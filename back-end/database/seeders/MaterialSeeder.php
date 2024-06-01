<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class MaterialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('materials')->insert([
            [
                'space_id' => 1,
                'description' => 'Ordinateurs de bureau, écrans et claviers',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'space_id' => 2,
                'description' => 'Mobilier de bureau, imprimante et photocopieur',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'space_id' => 3,
                'description' => 'Tableau blanc, tables et chaises',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'space_id' => 4,
                'description' => 'Étagères, boîtes et articles de papeterie',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'space_id' => 5,
                'description' => 'Projecteur, écran et système audio',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'space_id' => 6,
                'description' => 'Armoires de stockage, boîtes et fournitures',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'space_id' => 7,
                'description' => 'Outils, équipements et fournitures de maintenance',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'space_id' => 8,
                'description' => 'Mobilier et équipement pour réunions et formations',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
