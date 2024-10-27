<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:sanctum'], function () {

    Route::resource('posts', PostController::class);
    Route::get('categories', [CategoryController::class, 'index']);

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

});
