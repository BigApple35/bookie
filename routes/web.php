<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'HomepageGuest')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('/dashboard', 'HomepageAuth')->name('dashboard');
});

require __DIR__.'/auth.php';
