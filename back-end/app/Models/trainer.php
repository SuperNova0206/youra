<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trainer extends Model
{
    use HasFactory;

    public function trainerSpaceInfo()
    {
        return $this->hasMany(TrainerSpaceInfo::class);
    }
}
