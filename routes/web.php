<?php

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

Route::get('/', function () {
    return view('welcome');
});
Route::get('/', 'Faltas@index');
Route::post('/data', 'Faltas@data');

Auth::routes();
Route::get('/home', 'HomeController@index');
Route::post('/post', 'HomeController@post');

// Route::get('/login', view('auth.login'));

// Route::get('/login', function () {
//     return view('auth.login');
// });