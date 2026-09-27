import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Faro Casino официальный сайт — играть онлайн, рабочее зеркало Faro Casino',
  description:
    'Faro Casino — официальный сайт для игры онлайн. Фаро казино предлагает актуальное рабочее зеркало, лицензионные слоты, щедрые бонусы и быстрый вывод средств 24/7.',
  alternates: {
    canonical: 'https://farocasino18.vercel.app/',
  },
  openGraph: {
    title: 'Faro Casino — официальный сайт, зеркало, играть онлайн',
    description:
      'Фаро казино: рабочее зеркало, лицензионные слоты, бонусы и быстрый вывод. Играть в Faro можно 24/7.',
    url: 'https://farocasino18.vercel.app/',
    siteName: 'Faro Casino',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Page() {
  return (
    <article className="frc-shell" lang="ru">
      <header className="frc-topbar">
        <div className="frc-topbar-inner">
          <a href="/" className="frc-brandmark" aria-label="Faro Casino — на главную">
            <span className="frc-brandmark-glyph">F</span>
            <span className="frc-brandmark-text">Faro Casino</span>
          </a>
          <nav className="frc-topnav" aria-label="Основная навигация">
            <a href="#frc-about" className="frc-topnav-link">О платформе</a>
            <a href="#frc-mirror" className="frc-topnav-link">Зеркало</a>
            <a href="#frc-games" className="frc-topnav-link">Игры</a>
            <a href="#frc-bonus" className="frc-topnav-link">Бонусы</a>
            <a href="#frc-mobile" className="frc-topnav-link">Мобильная</a>
          </nav>
        </div>
      </header>

      <main className="frc-main">
        <section className="frc-hero" aria-labelledby="frc-hero-title">
          <div className="frc-hero-inner">
            <div className="frc-hero-copy">
              <p className="frc-hero-eyebrow">Faro Casino · официальный сайт</p>
              <h1 id="frc-hero-title" className="frc-hero-title">
                Faro Casino — официальный сайт для игры онлайн
              </h1>
              <p className="frc-hero-lead">
                Фаро казино работает по лицензии Кюрасао с 2019 года. На официальном сайте Faro Casino вас ждут
                лицензионные слоты, live-дилеры, турниры и быстрый вывод средств. Играть в Faro можно прямо сейчас —
                регистрация занимает меньше двух минут.
              </p>
              <div className="frc-hero-actions">
                <a href="#frc-about" className="frc-cta-primary">Начать играть</a>
                <a href="#frc-mirror" className="frc-cta-ghost">Рабочее зеркало</a>
              </div>
            </div>
            <figure className="frc-hero-figure">
              <img
                src="/faro-hero-art.png"
                alt="Интерьер Faro Casino: игровые столы, золотые люстры и атмосфера азарта"
                width={720}
                height={480}
                className="frc-hero-image"
              />
            </figure>
          </div>
        </section>

        <section id="frc-about" className="frc-block" aria-labelledby="frc-about-title">
          <h2 id="frc-about-title" className="frc-h2">Faro Casino: что это за платформа</h2>
          <p className="frc-paragraph">
            Faro Casino — это современная игровая платформа, которая работает на рынке с 2019 года. За время
            существования бренд Faro завоевал доверие тысяч игроков благодаря прозрачным условиям, быстрым выплатам
            и широкому выбору развлечений. На официальном сайте Faro Casino каждый найдёт то, что ему по душе: от
            классических слотов до live-игр с живыми дилерами.
          </p>
          <p className="frc-paragraph">
            Фаро казино официальный сайт использует сертифицированный генератор случайных чисел, поэтому результат
            каждого спина полностью случаен. Все автоматы проходят регулярные проверки независимыми аудиторами, а
            RTP публикуется в открытом доступе. Faro casino официальный — это честная игра без скрытых условий.
          </p>
        </section>

        <section id="frc-mirror" className="frc-block" aria-labelledby="frc-mirror-title">
          <h2 id="frc-mirror-title" className="frc-h2">Faro casino зеркало: вход при блокировке</h2>
          <p className="frc-paragraph">
            Иногда основной домен Faro casino может быть недоступен из-за ограничений провайдера. В таких случаях
            на помощь приходит Faro casino зеркало — точная копия сайта, расположенная на альтернативном адресе.
            Фаро казино зеркало рабочее обновляется ежедневно, поэтому у вас всегда будет доступ к любимым играм.
          </p>
          <p className="frc-paragraph">
            Чтобы найти актуальное Faro casino зеркало, достаточно перейти по ссылке с нашего официального сайта.
            Фаро казино зеркало сохраняет все ваши данные: баланс, бонусы, историю ставок. Вход через зеркало
            Faro casino ничем не отличается от входа на основной домен — используйте свой обычный логин и пароль.
          </p>
        </section>

        <section id="frc-games" className="frc-block" aria-labelledby="frc-games-title">
          <h2 id="frc-games-title" className="frc-h2">Фаро казино играть: ассортимент развлечений</h2>
          <p className="frc-paragraph">
            В Faro казино играть можно в более чем 3000 игр от ведущих провайдеров: Pragmatic Play, NetEnt,
            Microgaming, Evolution Gaming и других. Слоты, рулетка, блэкджек, покер, баккара — всё это доступно в
            один клик. Фаро казино онлайн предлагает как классические автоматы, так и новинки с прогрессивными
            джекпотами, где призовой фонд растёт с каждой ставкой.
          </p>
          <figure className="frc-figure">
            <img
              src="/faro-slots-art.png"
              alt="Игровые автоматы Faro Casino: слоты с прогрессивным джекпотом"
              width={720}
              height={420}
              loading="lazy"
              decoding="async"
              className="frc-figure-image"
            />
            <figcaption className="frc-figure-caption">
              Faro casino играть онлайн — слоты, рулетка и live-игры в одном месте.
            </figcaption>
          </figure>
          <p className="frc-paragraph">
            Faro casino официальный сайт регулярно добавляет новые игры. В разделе «Популярное» собраны автоматы,
            которые выбирают сами игроки. Фаро казино играть можно как на реальные деньги, так и в демо-режиме —
            это удобно, чтобы изучить механику перед серьёзной ставкой.
          </p>
        </section>

        <section id="frc-bonus" className="frc-block" aria-labelledby="frc-bonus-title">
          <h2 id="frc-bonus-title" className="frc-h2">Faro casino официальный: бонусы и акции</h2>
          <p className="frc-paragraph">
            Faro casino официальный сайт радует игроков щедрой бонусной программой. Новые пользователи получают
            приветственный пакет: до 100 000 рублей на первые пять депозитов и 200 фриспинов для топовых слотов.
            Постоянные клиенты Faro casino участвуют в еженедельных турнирах, кэшбэк-программе и получают
            персональные подарки от менеджеров.
          </p>
          <figure className="frc-figure">
            <img
              src="/faro-bonus-art.png"
              alt="Бонусы Faro Casino: приветственный пакет, фриспины и кэшбэк"
              width={720}
              height={420}
              loading="lazy"
              decoding="async"
              className="frc-figure-image"
            />
            <figcaption className="frc-figure-caption">
              Фаро казино официальный — бонусы за регистрацию, депозит и активную игру.
            </figcaption>
          </figure>
          <p className="frc-paragraph">
            Faro casino играть выгоднее с программой лояльности: чем больше ставок, тем выше статус и тем лучше
            условия. Фаро казино онлайн начисляет баллы за каждую ставку, которые можно обменять на реальные деньги
            или фриспины. Faro casino официальный сайт не прячет условия вейджера — всё прозрачно.
          </p>
        </section>

        <section id="frc-registration" className="frc-block" aria-labelledby="frc-registration-title">
          <h2 id="frc-registration-title" className="frc-h2">Фаро казино официальный: регистрация и вход</h2>
          <p className="frc-paragraph">
            Чтобы начать играть в Фаро казино, достаточно пройти простую регистрацию. Укажите email, придумайте
            пароль и подтвердите аккаунт. Весь процесс занимает не больше двух минут. После этого вы получите
            полный доступ ко всем возможностям Faro casino официальный сайт: слотам, live-играм, бонусам и
            турнирам.
          </p>
          <p className="frc-paragraph">
            Faro casino поддерживает вход через зеркало и мобильную версию. Фаро казино официальный сайт принимает
            рубли, гривны, тенге и доллары. Пополнение счёта возможно банковскими картами, электронными кошельками
            и криптовалютой. Faro casino зеркало рабочее сохраняет все платёжные методы без ограничений.
          </p>
        </section>

        <section id="frc-mobile" className="frc-block" aria-labelledby="frc-mobile-title">
          <h2 id="frc-mobile-title" className="frc-h2">Faro casino играть: мобильная версия</h2>
          <p className="frc-paragraph">
            Faro casino играть можно с любого устройства. Мобильная версия сайта адаптирована под iPhone SE и
            старшие модели Pro Max, работает стабильно даже при слабом интернете. Фаро казино онлайн не требует
            скачивания приложения — просто откройте браузер и наслаждайтесь игрой.
          </p>
          <figure className="frc-figure">
            <img
              src="/faro-cards-art.png"
              alt="Карточные игры Faro Casino: блэкджек, покер и баккара в мобильной версии"
              width={720}
              height={420}
              loading="lazy"
              decoding="async"
              className="frc-figure-image"
            />
            <figcaption className="frc-figure-caption">
              Faro казино играть с телефона — интерфейс под iPhone SE и Pro Max.
            </figcaption>
          </figure>
          <p className="frc-paragraph">
            Фаро казино официальный сайт в мобильной версии сохраняет все функции: пополнение, вывод, бонусы,
            турниры. Faro casino зеркало также открывается на смартфоне без потери качества. Faro казино —
            удобная игра в любом месте, где есть интернет.
          </p>
        </section>

        <section id="frc-security" className="frc-block" aria-labelledby="frc-security-title">
          <h2 id="frc-security-title" className="frc-h2">Faro казино: безопасность и поддержка</h2>
          <p className="frc-paragraph">
            Faro казино уделяет особое внимание безопасности. Все данные защищены SSL-шифрованием, а финансовые
            операции проходят через проверенные платёжные системы. Faro casino официальный сайт хранит средства
            игроков на отдельных счетах и выводит выигрыши в течение 24 часов.
          </p>
          <p className="frc-paragraph">
            Служба поддержки Faro casino работает круглосуточно и готова помочь в любой ситуации. Связаться с
            операторами Фаро казино можно через онлайн-чат, email или Telegram. Faro casino зеркало рабочее
            обслуживается той же командой — вы всегда получите ответ на свой вопрос.
          </p>
        </section>
      </main>

      <footer className="frc-footer" aria-labelledby="frc-footer-title">
        <h2 id="frc-footer-title" className="frc-footer-title">Faro Casino — поиск по сайту</h2>
        <p className="frc-footer-lead">
          Используйте хештеги, чтобы быстро найти нужный раздел Faro casino официальный сайт:
        </p>
        <ul className="frc-taglist" aria-label="Хештеги для поиска по сайту Faro Casino">
          <li className="frc-tagitem"><a href="#frc-about" className="frc-taglink">#faro</a></li>
          <li className="frc-tagitem"><a href="#frc-about" className="frc-taglink">#casino</a></li>
          <li className="frc-tagitem"><a href="#frc-about" className="frc-taglink">#faroCasino</a></li>
          <li className="frc-tagitem"><a href="#frc-about" className="frc-taglink">#фаро</a></li>
          <li className="frc-tagitem"><a href="#frc-about" className="frc-taglink">#казино</a></li>
          <li className="frc-tagitem"><a href="#frc-mirror" className="frc-taglink">#faroCasinoЗеркало</a></li>
          <li className="frc-tagitem"><a href="#frc-mirror" className="frc-taglink">#фароКазиноЗеркало</a></li>
          <li className="frc-tagitem"><a href="#frc-mirror" className="frc-taglink">#фароКазиноЗеркалоРабочее</a></li>
          <li className="frc-tagitem"><a href="#frc-games" className="frc-taglink">#faroCasinoИграть</a></li>
          <li className="frc-tagitem"><a href="#frc-games" className="frc-taglink">#фароКазиноИграть</a></li>
          <li className="frc-tagitem"><a href="#frc-games" className="frc-taglink">#фароКазиноОнлайн</a></li>
          <li className="frc-tagitem"><a href="#frc-bonus" className="frc-taglink">#faroCasinoОфициальный</a></li>
          <li className="frc-tagitem"><a href="#frc-bonus" className="frc-taglink">#фароКазиноОфициальный</a></li>
          <li className="frc-tagitem"><a href="#frc-bonus" className="frc-taglink">#faroCasinoОфициальныйСайт</a></li>
          <li className="frc-tagitem"><a href="#frc-bonus" className="frc-taglink">#фароКазиноОфициальныйСайт</a></li>
          <li className="frc-tagitem"><a href="#frc-mobile" className="frc-taglink">#faroКазино</a></li>
          <li className="frc-tagitem"><a href="#frc-mobile" className="frc-taglink">#фароКазино</a></li>
        </ul>
        <p className="frc-footer-meta">
          © {new Date().getFullYear()} Faro Casino. Канонический адрес:{' '}
          <a href="https://farocasino18.vercel.app/" className="frc-footer-link">
            https://farocasino18.vercel.app/
          </a>
        </p>
      </footer>
    </article>
  )
}
