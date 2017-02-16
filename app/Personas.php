<?php

namespace faltas;

use Illuminate\Database\Eloquent\Model;

class Personas extends Model
{
    protected $table = "personas";
    protected $fillable = ['nombre'];

    public function call()
    {
    	return $this->hasMany('faltas\Faltas');
    }
}
