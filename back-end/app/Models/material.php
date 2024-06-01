<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'space_id',
        'description'
    ];
    public function space() {
        return $this->belongsTo(Space::class);
    }

    public function material_group() {
        return $this->belongsTo(MaterialGroup::class);
    }

    public function material_type() {
        return $this->belongsTo(MaterilaType::class);
    }
}
