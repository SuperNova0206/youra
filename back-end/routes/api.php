<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MaterialApiController;

Route::apiResource('materials', MaterialApiController::class);
