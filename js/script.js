var lastElement = null;
$(document).ready( function(){
  registerClickEvents();
  $('.logo-block p').text(getRandomQuote(0, 16));
});
function registerClickEvents() {


    $('li a').on('click', function() {
    elementClick = $(this).attr('href');
    animateDiv(elementClick);
  });

  $('.content-block h1').on('click', function() {
    var elementClick = '#' + $(this).text().toLowerCase();
    animateDiv(elementClick);
  });

  $('.to-top').on('click', function() {
    if($(document).scrollTop()) toTop();
  });
}

function getRandomQuote(min, max) {
  var rand = min + Math.random() * (max - min);
  rand = Math.round(rand);
  return '"' + quotes[rand] + '"';
}

function animateDiv(elem) {
  if(lastElement)  {
    $(lastElement).removeClass('current');
    lastElement = null;
  }
  lastElement = elem;
  document.title = elem.toLowerCase() == '#index' ? 'Главная' : elem;
  $(elem).addClass('current');
  destination = $(elem).offset().top-20;
  $('body').animate( {scrollTop: destination}, 1100);
}

function toTop() {
  $('body').animate( {scrollTop: 0}, 1100);
  $(lastElement).removeClass('current');
  lastElement = null;
}

quotes = [
  'Честно говоря, моя дорогая, мне наплевать',
  'Я собираюсь сделать ему предложение, от которого он не сможет отказаться',
  'Вы не понимаете! Я мог иметь занятие. Я мог иметь врагов. Я мог быть кем угодно вместо бродяги, которым я являюсь',
  'Тото, у меня такое ощущение, что мы больше не в Канзасе',
  'Да пребудет с тобой Сила!',
  'В данном случае мы имеем отсутствие взаимопонимания',
  'Обожаю запах напалма по утрам!',
  'Любовь — это когда не нужно просить прощения',
  'Инопланетянин звонит домой',
  'Я зол, как чёрт, и я больше не собираюсь это терпеть',
  'Луи, мне кажется, это начало прекрасной дружбы',
  'Переписчик однажды попытался опросить меня. Я съел его печень с бобами и хорошим кьянти',
  'Я и есть великая звезда, просто фильмы стали маленькими',
  'Почему бы вам как-нибудь не прийти и не навестить меня?',
  'В конце концов, завтра — это другой день!',
  'Нагрудные знаки? Мы нет никаких знаков! Мы не надо никакие знаки! Я не должен показывать вам никакие чёртовы знаки!',
  'Моя мама всегда говорила: «Жизнь как коробка шоколадных конфет: никогда не знаешь, какая начинка тебе попадётся»'
]
