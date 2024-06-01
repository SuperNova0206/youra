<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trainer extends Model
{
    use HasFactory;
    protected $fillable = [
        'full_name'
    ];
    public function spaces(){
        return $this->belongsToMany(Space::class, 'trainer_space_info', 'trainer_id', 'space_id')->withTimestamps();
    }
}
