
// id, число — идентификатор опубликованной фотографии.Это число от 1 до 25.
// Идентификаторы не должны повторяться.
// url, строка — адрес картинки вида photos / {{ i }}.jpg, где { { i } } — это число от 1 до 25.
// Адреса картинок не должны повторяться.
// likes, число — количество лайков, поставленных фотографии.Случайное число от 15 до 200.
// description, строка — описание фотографии.Описание придумайте самостоятельно.
const POST_COUNT = 25;

const DESCRIPTION = [
  'Отдыхать хорошо',
  'Жить хорошо',
  'Ученье-свет,не ученье-тьма',
  'Отличное место',
  'Хочу туда',
  'Это было что-то!',
];

// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.
// Количество комментариев к каждой фотографии — случайное число от 0 до 30.
// Все комментарии генерируются случайным образом.Пример описания объекта с комментарием.
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент?!',
];

// Имена
const NAMES = [
  'Александр',
  'Иван',
  'Артем',
  'Михаил',
  'Олег',
  'Шурик',
  'Степан',
  'Слава',
];

// Генерация случайного числа в диапазоне
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Генерация случайного элемента
const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  idComment: getRandomInteger(1, 1000),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAMES),
});

// Объект состоит из 5 ключей:
const createPhoto = () => ({
  id: getRandomInteger(1, 25),
  url: `photos/${getRandomInteger(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(0, 30) }, createComment)
});

const SIMILARPOSTS = Array.from({ length: POST_COUNT }, createPhoto);

console.log(SIMILARPOSTS);
