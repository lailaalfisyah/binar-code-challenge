// Ambil piihan dari komputer
function getPilihanKomputer() {
	const com = Math.floor(Math.random() * 9 + 1);

	if (com <= 3) return 'batu';
	if (com >= 4 && com <= 6) return 'gunting';
	return 'kertas';
}

// Buat rules menang & kalah
function getHasil(com, player) {
	if (player == com)
		return 'SERI';
	if (player == 'batu')
		return (com == 'gunting' ? 'MENANG' : 'KALAH');
	if (player == 'gunting')
		return (com == 'batu' ? 'KALAH' : 'MENANG');
	if (player == 'kertas')
		return (com == 'batu' ? 'MENANG' : 'KALAH');
}

// Menyeleksi tombol
const pilihanPlayer = document.querySelectorAll('#player > img');
pilihanPlayer.forEach(function(imgPilihan) {
	imgPilihan.addEventListener('click', function() {
		const pilihanCom = getPilihanKomputer();
		const pilihanPlayer = imgPilihan.className;
		const hasil = getHasil(pilihanCom, pilihanPlayer);
			
		const info = document.querySelector('.info');
		info.innerHTML = hasil;
		info.classList.add('styling-info');

		const imgCom = document.querySelector(`#com > .${pilihanCom}`);
		imgCom.classList.add('yang-dipilih');

		const imgPlayer = document.querySelector(`#player > .${pilihanPlayer}`);
		imgPlayer.classList.add('yang-dipilih');
	});
});