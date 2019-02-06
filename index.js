class zodiac {
	constructor (id, label, startMonth, startDay, endMonth, endDay) {
		this.id = id;
		this.label = label;
		this.startMonth = startMonth;
		this.startDay = startDay;
		this.endMonth = endMonth;
		this.endDay = endDay;
	}
	hasDate(userDate) {
		const startZodiacDate = new Date(userDate.getFullYear(),
		  this.startMonth, this.startDay);
		const endZodiacDate = new Date(userDate.getFullYear(),
		  this.endMonth, this.endDay);
		if(this.id === 11)
			return (userDate >= startZodiacDate || userDate < endZodiacDate);
		return (userDate >= startZodiacDate && userDate < endZodiacDate);
	}
}
const zodiacArray = [
new zodiac(0, 'Водолей', 0, 20, 1, 19),
new zodiac(1, 'Рыбы', 1, 19, 2, 21),
new zodiac(2, 'Овен', 2, 21, 3, 20),
new zodiac(3, 'Телец', 3, 20, 4, 21),
new zodiac(4, 'Близнецы', 4, 21, 5, 21),
new zodiac(5, 'Рак', 5, 21, 6, 23),
new zodiac(6, 'Лев', 6, 23, 7, 23),
new zodiac(7, 'Дева', 7, 23, 8, 23),
new zodiac(8, 'Весы', 8, 23, 9, 23),
new zodiac(9, 'Скорпион', 9, 23, 10, 22),
new zodiac(10, 'Стрелец', 10, 22, 11, 22),
new zodiac(11, 'Козерог', 11, 22, 0, 20)
];
const birthDate = document.getElementById('birthDate');
const defineButton = document.getElementById('defineButton');
const resultLabel = document.getElementById('resultLabel');
defineButton.addEventListener('click', function() {
	const userDate = new Date(Date.parse(birthDate.value));
	const result = zodiacArray.filter((zodiac) => {
		return zodiac.hasDate(userDate);
	});
if(result[0])
{
resultLabel.innerHTML = 'Знак зодиака - ' + result[0].label;
resultImage.src = 'images/zodiac-' + result[0].id + '.png';
}
else
{
birthDate.style.backgroundColor = 'pink';
resultImage.src = 'images/zodiac.jpg';
}
});
birthDate.addEventListener('focus', function() {
	this.style.backgroundColor = 'transparent';
})