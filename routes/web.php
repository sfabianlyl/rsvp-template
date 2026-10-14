<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('splash');
})->name('splash');

Route::get('/home', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/schedule', function () {
    return Inertia::render('schedule');
})->name('schedule');

Route::get('/faqs', function () {
    return Inertia::render('faqs');
})->name('faqs');

Route::get('/where-to-stay', function () {
    return Inertia::render('where-to-stay');
})->name('where-to-stay');

Route::get('/rsvp', [App\Http\Controllers\RsvpController::class, 'index'])->name('rsvp');
Route::post('/rsvp', [App\Http\Controllers\RsvpController::class, 'store'])->name('rsvp.store');


require __DIR__.'/settings.php';
