<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('material_types', function (Blueprint $table) {
            $table->id();
            $table->enum('name', ['ordinateurs de bureau', 'ecrans et claviers', 'Cables electriques', 'rallonges', 'adaptateurs secteur', 'chargeurs', 'equipement reseau', 'equipement audio', 'equipement de securite']);
            $table->unsignedBigInteger('material_id');
            $table->foreign('material_id')->references('id')->on('materials')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('material_types');
    }
};
