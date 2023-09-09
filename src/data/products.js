const products = [
  {
    name: 'джин',
    icon: 'images/vodka.svg',
  },
  {
    name: 'абрикосовый ликер',
    icon: 'images/apricot.svg',
  },
  {
    name: 'апельсиновый сок',
    icon: 'images/orange-juice.svg',
  },
  {
    name: 'содовая',
    icon: 'images/vodka.svg',
  },
  {
    name: 'лайм',
    icon: 'images/lime.svg',
  },
  {
    name: 'холодный чай',
    icon: 'images/tea.svg',
  },
  {
    name: 'водка',
    icon: 'images/vodka.svg',
  },
  {
    name: 'лимон',
    icon: 'images/lemon.svg',
  },
  {
    name: 'лед в кубиках',
    icon: 'images/ice.svg',
  },
  {
    name: 'лимонный сок',
    icon: 'images/lemon-juice.svg',
  },
  {
    name: 'сахарный сироп',
    icon: 'images/vodka.svg',
  },
  {
    name: 'темный ром',
    icon: 'images/dark-rum.svg',
  },
  {
    name: 'лимонная цедра',
    icon: 'images/lemon.svg',
  },
  {
    name: 'имбирный эль',
    icon: 'images/ginger-ale.svg',
  },
  {
    name: 'апельсин',
    icon: 'images/orange.svg',
  },
  {
    name: 'шампанское',
    icon: 'images/champagne.svg',
  },
  {
    name: 'апельсиновая кожура и клубника',
    icon: 'images/orange.svg',
  },
  {
    name: 'клюквенный сок',
    icon: 'images/cranberry-juice.svg',
  },
  {
    name: 'персиковый сок',
    icon: 'images/peach-juice.svg',
  },
  {
    name: 'ром',
    icon: 'images/vodka.svg',
  },
  {
    name: 'ананасовый сок',
    icon: 'images/pineapple-juice.svg',
  },
  {
    name: 'кокосовое пюре',
    icon: 'images/coconut.svg',
  },
  {
    name: 'ликер блю кюрасао',
    icon: 'images/blue.svg',
  },
  {
    name: 'лед',
    icon: 'images/ice.svg',
  },
  {
    name: 'нежирные сливки',
    icon: 'images/cream.svg',
  },
  {
    name: 'кофейный ликер',
    icon: 'images/coffee-liquor.svg',
  },
  {
    name: 'апероль',
    icon: 'images/aperol.svg',
  },
  {
    name: 'просекко',
    icon: 'images/prosecco.svg',
  },
  {
    name: 'сухой вермут',
    icon: 'images/vodka.svg',
  },
  {
    name: 'оливки',
    icon: 'images/olive.svg',
  },
  {
    name: 'коньяк',
    icon: 'images/cognac.svg',
  },
  {
    name: 'лимонад',
    icon: 'images/lemon-juice.svg',
  },
  {
    name: 'имбирь',
    icon: 'images/ginger.svg',
  },
  {
    name: 'кожура огурца',
    icon: 'images/peel-cucumber.svg',
  },
  {
    name: 'томатный сок',
    icon: 'images/tomato.svg',
  },
  {
    name: 'соус "Вотчестер"',
    icon: 'images/tomato.svg',
  },
  {
    name: 'соус "Табаско"',
    icon: 'images/tomato.svg',
  },
  {
    name: 'соль',
    icon: 'images/salt.svg',
  },
  {
    name: 'сухое шампанское',
    icon: 'images/champagne.svg',
  },
  {
    name: 'ликер из черной смородины',
    icon: 'images/tomato.svg',
  },
  {
    name: 'мандарин',
    icon: 'images/orange.svg',
  },
  {
    name: 'лондонский сухой джин',
    icon: 'images/vodka.svg',
  },
  {
    name: 'зеленый базилик',
    icon: 'images/basil.svg',
  },
  {
    name: 'черный чай',
    icon: 'images/tea.svg',
  },
  {
    name: 'белый ром',
    icon: 'images/vodka.svg',
  },
  {
    name: 'гвоздика',
    icon: 'images/clove.svg',
  },
  {
    name: 'кардамон',
    icon: 'images/cardamom.svg',
  },
  {
    name: 'вино белое',
    icon: 'images/white-vine.svg',
  },
  {
    name: 'виноград',
    icon: 'images/grape.svg',
  },
  {
    name: 'тоник',
    icon: 'images/vodka.svg',
  },
  {
    name: 'лаймовый кордиал',
    icon: 'images/lime-juice.svg',
  },
  {
    name: 'лаймовая цедра',
    icon: 'images/lime.svg',
  },
  {
    name: 'белое сухое вино',
    icon: 'images/champagne.svg',
  },
  {
    name: 'лаймовый сок',
    icon: 'images/lime-juice.svg',
  },
  {
    name: 'свежий арбуз',
    icon: 'images/watermelon.svg',
  },
  {
    name: 'мята',
    icon: 'images/mint.svg',
  },
  {
    name: 'дробленый лед',
    icon: 'images/ice.svg',
  },
  {
    name: 'кола',
    icon: 'images/coffee-liquor.svg',
  },
  {
    name: 'золотой ром',
    icon: 'images/gold-rum.svg',
  },
  {
    name: 'кашаса',
    icon: 'images/vodka.svg',
  },
  {
    name: 'грейпфрутовый сок',
    icon: 'images/grenadine.svg',
  },
  {
    name: 'биттер',
    icon: 'images/bitter.svg',
  },
  {
    name: 'кальвадос',
    icon: 'images/apricot.svg',
  },
  {
    name: 'гренадин',
    icon: 'images/grenadine.svg',
  },
  {
    name: 'газированная вода',
    icon: 'images/vodka.svg',
  },
  {
    name: 'сок красного апельсина',
    icon: 'images/aperol.svg',
  },
  {
    name: 'сок манго',
    icon: 'images/orange-juice.svg',
  },
  {
    name: 'соус "Табаско" красный',
    icon: 'images/tomato.svg',
  },
  {
    name: 'самбука классическая',
    icon: 'images/vodka.svg',
  },
  {
    name: 'серебряная текила',
    icon: 'images/vodka.svg',
  },
  {
    name: 'абсент',
    icon: 'images/absinthe.svg',
  },
  {
    name: 'айриш крим',
    icon: 'images/irish-creame.svg',
  },
  {
    name: 'шотландский виски',
    icon: 'images/amaretto.svg',
  },
  {
    name: 'ликер амаретто',
    icon: 'images/amaretto.svg',
  },
  {
    name: 'сироп ваниль',
    icon: 'images/vanilla.svg',
  },
  {
    name: 'сироп клюква',
    icon: 'images/cranberry-juice.svg',
  },
  {
    name: 'медовый сироп',
    icon: 'images/orange-juice.svg',
  },
  {
    name: 'банан',
    icon: 'images/banana.svg',
  },
  {
    name: 'коктейльная вишня',
    icon: 'images/cherry.svg',
  },
  {
    name: 'карамельный сироп',
    icon: 'images/vanilla.svg',
  },
  {
    name: 'кофе эспрессо',
    icon: 'images/coffee-liquor.svg',
  },
  {
    name: 'ликер трипл сек',
    icon: 'images/vodka.svg',
  },
  {
    name: 'персиковое пюре',
    icon: 'images/peach.svg',
  },
  {
    name: 'выдержанный бурбон',
    icon: 'images/amaretto.svg',
  },
  {
    name: 'ангостура',
    icon: 'images/tomato.svg',
  },
  {
    name: 'сахарная пудра',
    icon: 'images/powdered.svg',
  },
  {
    name: 'гальяно',
    icon: 'images/lemon-juice.svg',
  },
  {
    name: 'персиковый ликер',
    icon: 'images/peach-juice.svg',
  },
  {
    name: 'ананас',
    icon: 'images/pineapple.svg',
  },
  {
    name: 'малина',
    icon: 'images/raspberry.svg',
  },
  {
    name: 'ржаной виски',
    icon: 'images/amaretto.svg',
  },
  {
    name: 'вермут красный',
    icon: 'images/vermouth.svg',
  },
  {
    name: 'campari',
    icon: 'images/vermouth.svg',
  },
  {
    name: 'спрайт',
    icon: 'images/vodka.svg',
  },
  {
    name: 'трипл сек',
    icon: 'images/vodka.svg',
  },
  {
    name: 'ирландский виски',
    icon: 'images/amaretto.svg',
  },
  {
    name: 'кофе американо',
    icon: 'images/coffe.svg',
  },
  {
    name: 'жирные сливки',
    icon: 'images/cream.svg',
  },
  {
    name: 'домашний медовый-имбирный сироп',
    icon: 'images/orange-juice.svg',
  },
  {
    name: 'апельсиновая цедра',
    icon: 'images/orange.svg',
  },
  {
    name: 'lillet blanc',
    icon: 'images/lemon-juice.svg',
  },
  {
    name: "rimm's'",
    icon: 'images/tomato.svg',
  },
  {
    name: 'свежий огурец',
    icon: 'images/cucumber.svg',
  },
  {
    name: 'свежая клубника',
    icon: 'images/strawberry.svg',
  },
  {
    name: 'свежий лимон',
    icon: 'images/lemon.svg',
  },
  {
    name: 'свежий апельсин',
    icon: 'images/orange.svg',
  },
  {
    name: 'бурбон',
    icon: 'images/amaretto.svg',
  },
  {
    name: 'красный вермут',
    icon: 'images/vermouth.svg',
  },
  {
    name: 'ангостура биттер',
    icon: 'images/orange-juice.svg',
  },
  {
    name: 'какао ликер коричневый',
    icon: 'images/amaretto.svg',
  },
  {
    name: 'мускатный орех молотый',
    icon: 'images/nutmeg.svg',
  },
  {
    name: 'маракуйя',
    icon: 'images/passion-fruit.svg',
  },
  {
    name: 'красное сухое вино',
    icon: 'images/vermouth.svg',
  },
  {
    name: 'ванильный сахар',
    icon: 'images/vanilla-sugar.svg',
  },
  {
    name: 'апельсины',
    icon: 'images/orange.svg',
  },
  {
    name: 'клубника',
    icon: 'images/strawberry.svg',
  },
  {
    name: 'ежевика',
    icon: 'images/blackberry.svg',
  },
  {
    name: 'черника',
    icon: 'images/blueberries.svg',
  },
  {
    name: 'палочки корицы',
    icon: 'images/cinnamon.svg',
  },
  {
    name: 'персиковый биттер',
    icon: 'images/peach-juice.svg',
  },
  {
    name: 'сливочный ликер',
    icon: 'images/creamy-liquor.svg',
  },
  {
    name: 'виски',
    icon: 'images/orange-juice.svg',
  },
  {
    name: 'самбука',
    icon: 'images/vodka.svg',
  },
  {
    name: 'апельсиновый ликер',
    icon: 'images/orange-juice.svg',
  },
  {
    name: 'красный биттер campari',
    icon: 'images/vermouth.svg',
  },
  {
    name: 'ежевика свежая',
    icon: 'images/blackberry.svg',
  },
  {
    name: 'сахар',
    icon: 'images/vanilla-sugar.svg',
  },
  {
    name: 'белок перепелинового яйца',
    icon: 'images/egg.svg',
  },
  {
    name: 'писко',
    icon: 'images/vodka.svg',
  },
  {
    name: 'кокосовый ликер',
    icon: 'images/vodka.svg',
  },
  {
    name: 'ванильный сироп',
    icon: 'images/vodka.svg',
  },
  {
    name: 'кокосовая стружка',
    icon: 'images/coconut.svg',
  },
  {
    name: 'кофе в зернах',
    icon: 'images/coffe.svg',
  },
  {
    name: 'тросниковый сахар',
    icon: 'images/vanilla-sugar.svg',
  },
  {
    name: 'белый ментоловый ликер',
    icon: 'images/vodka.svg',
  },
  {
    name: 'клюква',
    icon: 'images/cranberry.svg',
  },
  {
    name: 'односолодовый виски',
    icon: 'images/orange-juice.svg',
  },
  {
    name: 'ревеневый ликер',
    icon: 'images/peach-juice.svg',
  },
  {
    name: 'клубничный сироп',
    icon: 'images/tomato.svg',
  },
  {
    name: 'кокосовый сироп',
    icon: 'images/vodka.svg',
  },
  {
    name: 'ликер малибу',
    icon: 'images/cream.svg',
  },
  {
    name: 'яичный желток',
    icon: 'images/egg.svg',
  },
  {
    name: 'молоко',
    icon: 'images/cream.svg',
  },
  {
    name: 'мускатный орех',
    icon: 'images/nutmeg.svg',
  },
  {
    name: 'светлый ром',
    icon: 'images/vodka.svg',
  },
  {
    name: 'ароматизированная водка',
    icon: 'images/vodka.svg',
  },
  {
    name: 'малиновый ликер',
    icon: 'images/cranberry-juice.svg',
  },
  {
    name: 'имбирное пиво',
    icon: 'images/ginger-ale.svg',
  },
  {
    name: 'темный ром bacardi',
    icon: 'images/dark-rum.svg',
  },
  {
    name: 'белый ром bacardi',
    icon: 'images/vodka.svg',
  },
  {
    name: 'ликер драй оранж',
    icon: 'images/orange-juice.svg',
  },
  {
    name: 'ликер фалернум',
    icon: 'images/vodka.svg',
  },
  {
    name: 'ананасовые листья',
    icon: 'images/pineapple-leafs.svg',
  },
  {
    name: 'ликер бейлис',
    icon: 'images/irish-creame.svg',
  },
  {
    name: 'ликер куантро',
    icon: 'images/orange-juice.svg',
  },
  {
    name: 'ликер гран марнье',
    icon: 'images/lemon-juice.svg',
  },
  {
    name: 'зеленый шартрез',
    icon: 'images/ginger-ale.svg',
  },
  {
    name: 'ликер мараскино',
    icon: 'images/vodka.svg',
  },
  {
    name: 'бенедиктин',
    icon: 'images/amaretto.svg',
  },
  {
    name: 'вишневый ликер',
    icon: 'images/tomato.svg',
  },
  {
    name: 'яблочный ликер зеленый',
    icon: 'images/apple-juice.svg',
  },
  {
    name: 'яблоки',
    icon: 'images/apple.svg',
  },
  {
    name: 'абсент зеленый',
    icon: 'images/absinthe.svg',
  },
  {
    name: 'абсент черный',
    icon: 'images/coffee-liquor.svg',
  },
  {
    name: 'водка черная',
    icon: 'images/coffee-liquor.svg',
  },
  {
    name: 'водка конопляная',
    icon: 'images/vodka.svg',
  },
  {
    name: 'спрайт и сок лимона',
    icon: 'images/lemon-juice.svg',
  },
  {
    name: 'ежевичный ликер',
    icon: 'images/coffee-liquor.svg',
  },
  {
    name: 'сахарный песок',
    icon: 'images/powdered.svg',
  },
  {
    name: 'выдержанный ром',
    icon: 'images/amaretto.svg',
  },
  {
    name: 'миндальный сироп',
    icon: 'images/vodka.svg',
  },
  {
    name: 'сверхкрепкий ром',
    icon: 'images/amaretto.svg',
  },
  {
    name: 'сироп корицы',
    icon: 'images/tomato.svg',
  },
  {
    name: 'грейпфрут',
    icon: 'images/grapefruit.svg',
  },
  {
    name: 'фиалковый ликер',
    icon: 'images/violet.svg',
  },
  {
    name: 'светлое пиво',
    icon: 'images/cognac.svg',
  },
  {
    name: 'устричный соус',
    icon: 'images/coffee-liquor.svg',
  },
  {
    name: 'вустерширский соус',
    icon: 'images/coffee-liquor.svg',
  },
  {
    name: 'дженевер',
    icon: 'images/vodka.svg',
  },
  {
    name: 'драмбуи',
    icon: 'images/orange-juice.svg',
  },
  {
    name: 'пишо биттер',
    icon: 'images/tomato.svg',
  },
  {
    name: 'сахар в кубиках',
    icon: 'images/vanilla-sugar.svg',
  },
  {
    name: 'цитрусовая водка',
    icon: 'images/vodka.svg',
  },
  {
    name: 'домашняя клубничная текила',
    icon: 'images/vodka.svg',
  },
  {
    name: 'дынный ликер',
    icon: 'images/absinthe.svg',
  },
  {
    name: 'энергетик',
    icon: 'images/energy.svg',
  },
  {
    name: 'яблочная водка',
    icon: 'images/vodka.svg',
  },
  {
    name: 'сироп гренадин',
    icon: 'images/grenadine.svg',
  },
  {
    name: 'яичный белок',
    icon: 'images/egg.svg',
  },
  {
    name: 'какао ликер светлый',
    icon: 'images/vodka.svg',
  },
  {
    name: 'мятный ликер зеленый',
    icon: 'images/lime-juice.svg',
  },
  {
    name: 'сироп маракуйи',
    icon: 'images/orange-juice.svg',
  },
];
