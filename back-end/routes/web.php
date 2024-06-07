<?php

use Illuminate\Support\Facades\Route as route;
use App\Http\Controllers\MaterialController;

route::get('materials', [MaterialController::class, 'index']);
route::post('materials', [MaterialController::class, 'insert']);