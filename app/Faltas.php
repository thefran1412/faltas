<?php

namespace faltas;

use Illuminate\Database\Eloquent\Model;

class Faltas extends Model
{
    protected $table = "faltas";
    protected $fillable = ['personas_id', 'is_grave'];

    public function personas()
    {
    	return $this->belongsTo('faltas\Personas');
    }
}
