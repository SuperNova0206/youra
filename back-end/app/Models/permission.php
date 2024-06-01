<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    use HasFactory;
    protected $fillable = [
        'permission_type'
    ];
    public function users(){
        return $this->belongsToMany(Users::class, 'user_permission_info', 'permission_id', 'user_id')->withTimestamps();
    }
}
