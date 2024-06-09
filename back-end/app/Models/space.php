<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Space extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'type_id'];

    public function spaceType()
    {
        return $this->belongsTo(SpaceType::class, 'type_id');
    }
}

