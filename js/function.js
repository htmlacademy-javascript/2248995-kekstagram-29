// const isStringLength = (string, maxString) =>
// 	string.length <= maxString;
// isStringLength('Норильск', 20);

const isPolindrom = string => {
	const normalString = string
		.replaceAll(' ', '');
		.toUpperCase();
let inverstedString = '';
for (i = normalString.lenght - 1; i >= 0; i--) {
	inverstedString = inverstedString + normalString.at(i);
};
return inverstedString === normalstring;
};

isPolindrom('топот');
isPolindrom('ДовОд');
isPolindrom('Кекс');