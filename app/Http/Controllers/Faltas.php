<?php

namespace faltas\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Auth;

class Faltas extends Controller
{
	public function index(){
		$label = "Login";
		if (Auth::check())
		{
			$label = "Admin Pannel";
		}
        return view('index', compact('label'));
	}
	public function data()
	{
        $sql = \faltas\Personas::leftjoin('faltas as f','f.personas_id', 'personas.id')
                ->groupBy('nombre', 'is_grave')
                ->get(['nombre', DB::raw('count(is_grave) as count'), 'is_grave'])->toJson();
         echo $sql;
	}
}
