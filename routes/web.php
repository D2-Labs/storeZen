<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/sales/sales-made', function () {
    return Inertia::render('Sales/SalesMade');
})->name('sales-made');

Route::get('/sales/sales-stats', function () {
    return Inertia::render('Sales/Statistics');
})->name('sales-statistics');

Route::get('/sales', function () {
    return Inertia::render('Sales/ProductsListing');
})->name('sales-dashboard');

Route::get('/sales/profile', function () {
    return Inertia::render('Sales/Profile');
})->name('sales-profile');

Route::get('/sales/notifications', function () {
    return Inertia::render('Sales/Notifications');
})->name('sales-notifications');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
