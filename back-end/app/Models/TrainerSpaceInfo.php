<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrainerSpaceInfo extends Model
{
    use HasFactory;
    protected $table = "trainer_space_info";
    protected $fillable = ['space_id', 'trainer_id'];

    public function trainer()
    {
        return $this->belongsTo(Trainer::class);
    }

    public function space()
    {
        return $this->belongsTo(Space::class);
    }
}
