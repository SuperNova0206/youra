<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use HasFactory;

    protected $fillable = ['space_id', 'description'];

    public function space()
    {
        return $this->belongsTo(Space::class);
    }

    public function materialGroups()
    {
        return $this->hasMany(MaterialGroup::class);
    }

    public function materialTypes()
    {
        return $this->hasMany(MaterialType::class);
    }

    public function trainerSpaceInfo()
    {
        return $this->hasOne(TrainerSpaceInfo::class, 'space_id', 'space_id');
    }
}
