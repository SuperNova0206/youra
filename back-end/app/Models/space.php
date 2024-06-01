<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Space extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'type_id'
    ];
    public function space_type() {
        return $this->belongsTo(SpaceType::class);
    }
    public function trainer_space_info() {
        return $this->belongsToMany(Trainer::class, 'trainer_space_info', 'trainer_id', 'space_id')->withTimestamps();
    }
}
