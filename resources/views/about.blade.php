<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Nosotros</title>

        <link rel="stylesheet" href="/css/app.css">

    </head>
    <body>
        <div id="App"></div>

        <script type="text/javascript">
            window.CSRF_TOKEN = '{{ csrf_token() }}';
        </script>

        <script src="/js/app.js"></script>

    </body>
</html>
