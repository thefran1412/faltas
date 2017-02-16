@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>
                <div class="panel-body">
                    @foreach ($personas as $persona)
                        <?php $e = \faltas\Personas::find($persona->id)->call; ?>
                        <div class="card panel">
                            <h3>{{ $persona->nombre}}</h3>
                           
                           <?php $c1 = 0; $c2 = 0;?>
                           
                            @foreach($e as $falta)
                                @if(!$falta->is_grave)
                                    <?php $c1++;?>
                                @else
                                    <?php $c2++;?>
                                @endif
                            @endforeach()

                            <div class="vertical">
                                <h2>Graves:</h2>
                                <div class="faltas">
                                    <h3>{{$c2}}</h3>
                                </div>
                                <button class="falta 1 {{$persona->id}}">
                                    <h1>+</h1>
                                </button>
                            </div>
                            <div class="vertical">
                                <h2>Leves:</h2>
                                <div class="faltas">
                                    <h3>{{$c1}}</h3>
                                </div>
                                <button class="falta 0 {{$persona->id}}">
                                    <h1>+</h1>
                                </button>
                            </div>
                        </div>
                    @endforeach
                    <div class="card panel">
                        <h2>Normas</h2>
                        <table>
                          <tr>
                            <th></th>
                            <th>- 30 min</th>
                            <th>+ 30 min</th> 
                          </tr>
                          <tr>
                            <td>Justificada</td>
                            <td> - </td> 
                            <td>LEVE</td>
                          </tr>
                          <tr>
                            <td>No Justificada</td>
                            <td>LEVE</td> 
                            <td>GRAVE</td>
                          </tr>
                        </table>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
