<?php

namespace faltas\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $personas = \faltas\Personas::All();
        return view('home', compact('personas'));
    }
    public function post()
    {
        $data = $_POST['id'];
        $pieces = explode(" ", $data);
        $type = intval($pieces[1]);
        $id = intval($pieces[2]);
        try{
            $faltas = \faltas\Faltas::create([
                'personas_id' => $id,
                'is_grave' => $type
                ]);
            echo $select = \faltas\Faltas::where('personas_id', $id)->where('is_grave', $type)->count();
        }catch(Exception $e){
            echo $e;
        }
    }
}
