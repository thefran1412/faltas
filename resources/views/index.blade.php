<!DOCTYPE html>
<html>
<head>
	<title>Faltas WebMonkey</title>
	<link rel="stylesheet" href="{{ URL::asset('css/style.css') }}" />

</head>
<body>
	<header>
		<div class="menu">
			<ul>
				<li><a href="{{ url('login') }}">{{$label}}</a></li>
			</ul>
		</div>
	</header>
	<div style="width: 100%; height: 400px; background-color: orange;">
		
	</div>
    <canvas id="myChart" width="500" height="100"></canvas>
</body>
    <script src="/js/app.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.bundle.js"></script>
    <script src="/js/view.js"></script>
    <meta name="_token" content="{!! csrf_token() !!}" />

</html>