<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    use HasFactory;

    protected $fillable = ['permission_type'];

    public function userPermissionInfos()
    {
        return $this->hasMany(UserPermissionInfo::class, 'permission_id');
    }
}
