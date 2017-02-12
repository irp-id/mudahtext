angular.module('app', [])
    .controller('ctrl', ctrl);

function ctrl($log, $scope) 
{
    $log.info('Selamat Datang');
    $scope.teks = 'Selamat Datang';
}