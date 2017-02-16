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
				<li><a href="{{ url('login') }}">@yield('login')</a></li>
			</ul>
		</div>
	</header>
	@yield('content')
</body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.bundle.js"></script>
    <script src="js/view.js"></script>
</html>