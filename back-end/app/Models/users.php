<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_name',
        'password',
        'job'
    ];
    public function permissions(){
        return $this->belongsToMany(Users::class, 'user_permission_info', 'permission_id', 'user_id')->withTimestamps();
    }
}
