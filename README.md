# Закадровый перевод видео

[![en](https://img.shields.io/badge/lang-English%20%F0%9F%87%AC%F0%9F%87%A7-white)](README-EN.md)
[![ru](https://img.shields.io/badge/%D1%8F%D0%B7%D1%8B%D0%BA-%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9%20%F0%9F%87%B7%F0%9F%87%BA-white)](README.md)

> [!CAUTION]
> Перед созданием Issues настоятельно рекомендуем ознакомиться с разделом [FAQ](https://github.com/ilyhalight/voice-over-translation/wiki/%5BRU%5D-FAQ), а так же с уже существующими [Issues](https://github.com/ilyhalight/voice-over-translation/issues)

Закадровый перевод видео, теперь, доступен не только в YandexBrowser.
Очень признателен, **[Yandex.Translate](https://translate.yandex.ru/)**, **[sodapng](https://github.com/sodapng)**, **[mynovelhost](https://github.com/mynovelhost)**, **[SashaXser](https://github.com/SashaXser)** и всем остальным контрибьюторам. Спасиб <3

## Установка расширения:

> [!WARNING]
> Если вы пользуетесь Tampermonkey 5.2.0+, не забудьте [включить](https://github.com/ilyhalight/voice-over-translation/issues/662#issuecomment-2160768958) режим разработчика или используйте Tampermonkey MV2

1. Установите расширение **[Tampermonkey](https://www.tampermonkey.net/)** (Альтернатива для Safari: **[UserScripts](https://apps.apple.com/app/userscripts/id1463298887)**)
2. **[«Установите Скрипт»](https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot.user.js)**

## Список функционала:

1. Перевод видео с [одного из доступных языков](LANG_SUPPORT.md) на русский, английский или казахский
2. Перевод стримов на YouTube (работает с небольшой задержкой)
3. Отображение субтитров сгенерированных нейросетью (на YouTube дополнительно отображаются автосгенерированные субтитры)
4. Сохранение используемых субтитров (в `.srt` формате)
5. Сохранение аудиодорожки перевода (в `.mp3` формате)
6. Автоматический перевод видео при открытие
7. Слайдеры для изменения громкости видео и перевода
8. Автоматическое выставление громкости переведенного видео (как в Яндекс браузере)
9. Синхронизация громкости перевода с громкостью видео
10. Ограничить перевод видео с родного языка (язык можно выбрать в меню)
11. Проксирование аудио
12. Перевод с помощью горячей клавиши

### Полезные ссылки:

1. Библиотека для JS (vot.js): **[Ссылка](https://github.com/FOSWLY/vot.js)**
2. Версия для терминала (vot-cli): **[Ссылка](https://github.com/FOSWLY/vot-cli)**
3. Вики: **[Ссылка](https://github.com/ilyhalight/voice-over-translation/wiki)**

## Примечание:

1. Рекомендую разрешить автовоспроизведение "аудио и видео", чтобы избежать ошибок при работе расширения
2. Расширение не может переводить видео длиной более 4 часов (ограничение API переводчика)

## Список поддерживаемых сайтов:

Все ограничения, связанные с поддержкой сайтов вы можете увидеть в [вики](https://github.com/ilyhalight/voice-over-translation/wiki/%5BRU%5D-Supported-sites).

- **[YouTube](https://www.youtube.com)**
- **[Twitch](https://www.twitch.tv)**
- **[VK](https://vk.com)**
- **[OK](https://ok.ru/)**
- **[Twitter](https://twitter.com/)**
- **[9GAG](https://9gag.com/gag/)**
- **[Rutube](https://rutube.ru/)**
- **[Bilibili](https://bilibili.com/)**
- **[Видео Mail.ru](https://my.mail.ru/video)**
- **[Vimeo](https://vimeo.com/)**
- **[XVideos](https://xvideos.com/)**
- **[PornHub](https://rt.pornhub.com/)**
- **[Bitchute](https://www.bitchute.com/)**
- **[Coursera](https://www.coursera.org/)**
- **[[⚠️] Udemy](https://www.udemy.com/)**
- **[Facebook\*](https://facebook.com/)**
- **[TikTok](https://tiktok.com/)**
- **[Rumble](https://rumble.com/)**
- **[EPorner](https://www.eporner.com/)**
- **[Peertube](https://tube.shanti.cafe/)**
- **[Dailymotion](https://www.dailymotion.com/)**
- **[Trovo](https://trovo.live/)**
- **[Yandex Disk](https://disk.yandex.ru/)**
- **[Google Drive](https://drive.google.com/)**
- **[Banned Video](https://banned.video/)**
- **[Weverse](https://weverse.io/)**
- **[Egghead](https://egghead.io)**
- **[Youku](https://youku.com)**
- **[Archive.org](https://archive.org)**
- **[Newgrounds](https://newgrounds.com)**
- **[ProxiTok](https://proxitok.pabloferreiro.es/)**
- **[Invidious](https://yewtu.be)**
- **[Piped](https://piped.video)**
- **[Kodik (player)](https://kodik.cc)**
- **[Patreon](https://patreon.com)**
- **[Reddit](https://reddit.com)**
- **[Kick](https://kick.com)**
- **[Apple Developer](https://developer.apple.com)**
- **[EpicGames Developers](https://dev.epicgames.com)**
- **[9AnimeTV](https://9animetv.to/)**
- **[Sap learning](https://learning.sap.com/)**
- **[Watchporn.to](https://watchporn.to/)**
- **[Linkedin learning](https://www.linkedin.com/)**
- **Любые прямые веб-ссылки на `.mp4` или `.webm`**

⚠️ - Требует дополнительных действий, подробнее в **[Wiki](https://github.com/ilyhalight/voice-over-translation/wiki/%5BRU%5D-Supported-sites)**

### Наши домены:

Эти домены могут быть установлены в настройках расширения (здесь указаны только те домены, которые можно изменить без пересборки):

#### Proxy-сервер

Необходим для проксирования запросов, если не получается сделать прямой запрос к серверам Яндекса

- [vot-worker.toil.cc](https://vot-worker.toil.cc/health) (Балансировщик между прокси серверами)
- [vot-worker-s1.toil.cc](https://github.com/FOSWLY/vot-worker)
- [vot-worker-s2.toil.cc](https://github.com/FOSWLY/vot-worker)
- [vot.deno.dev](https://github.com/FOSWLY/vot-worker)
- [vot-new.toil-dump.workers.dev](https://github.com/FOSWLY/vot-worker) (⚠️ не работает в РФ)

#### Media Proxy-сервер

Необходим для проксирования `.m3u8` файлов и исправления перевода для непрямых ссылок на `.mp4` или `.webm` (подробнее в репозитории)

- [media-proxy.toil.cc](https://github.com/FOSWLY/media-proxy)

#### VOT-Backend

Необходим для перевода дополнительных сайтов, которые используют формат видео, который не поддерживается серверами Яндекса.

- [vot.toil.cc](https://github.com/FOSWLY/vot-backend)

## Как собрать расширение?

1. Установите Node.js 18.18+ / Bun
2. Установите зависимости:

NPM:

```bash
npm install
```

Bun:

```bash
bun install --yarn
```

3. Сборка расширения:

   3.0. Все версии сразу:

   ```bash
   npm run build
   ```

   3.1. Все минифицированные версии сразу:

   ```bash
   npm run build:min
   ```

   3.2. Только обычная версии:

   ```bash
   npm run build:default
   ```

   3.3. Только обычная мин. версии:

   ```bash
   npm run build:default-min
   ```

### Как патчить vot.js

1. Внесите нужные изменения в node_modules/vot.js/нужный файл
2. Сохраните изменения с помощью:

NPM (не тестил, но должно работать):

```bash
npx patch-package vot.js
```

Bun:

```bash
bunx patch-package --use-yarn vot.js
```

Не пользуйтесь патчами из `bun patch` или из каких-либо npm пакетов. Они будут несовместимы с patch-package, а так же могут ломаться при обновлении пакета.

### Как обновлять файлы локализации

Для всего взаимодействия с файлами локализации сделана консольная утилита l10n-tui.

Для вызова утилиты используйте команду:

```bash
bun l10n
```

Подробнее о утилите можно прочитать [тут](scripts/l10n-tui/README.md)

## Кастомизация внешнего вида:

Расширение поддерживает кастомизацию внешнего вида с помощью Stylus, Stylish и других подобных расширений

Пример изменения стилей:

```css
/* ==UserStyle==
@name         VOT-styles
@version      16.09.2023
@namespace    vot-styles
@description  LLL
@author       Toil
@license      No License
==/UserStyle== */

:root {
  --vot-font-family: "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui,
    -apple-system;

  --vot-primary-rgb: 139, 180, 245;
  --vot-onprimary-rgb: 32, 33, 36;
  --vot-surface-rgb: 32, 33, 36;
  --vot-onsurface-rgb: 227, 227, 227;

  --vot-subtitles-color: rgb(var(--vot-onsurface-rgb, 227, 227, 227));
  --vot-subtitles-passed-color: rgb(var(--vot-primary-rgb, 33, 150, 243));
}
```

## Расширение протестировано в следующих браузерах:

| Статус | Браузер                   | Версия браузера                   | Платформа               | Расширение                                                                                  |
| ------ | ------------------------- | --------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------- |
| ⠀✅    | Firefox Developer Edition | v106 — v129, 64 bit               | Windows                 | Tampermonkey (MV2), FireMonkey, VioletMonkey, Greasemonkey                                  |
| ⠀✅    | Firefox                   | v116.0.2                          | Windows, Linux, Android | Tampermonkey (MV2), Violetmonkey                                                            |
| ⠀✅    | Firefox Nightly           | v118.0a1                          | Windows, Android        | Tampermonkey (MV2)                                                                          |
| ⠀✅    | LibreWolf                 | v100.0.2-1                        | Windows                 | Tampermonkey (MV2)                                                                          |
| ⠀✅    | Brave                     | v1.46 - v1.68.134                 | Windows                 | Tampermonkey (MV2)                                                                          |
| ⠀✅    | MS Edge                   | v106.0.1370.34                    | Windows, Linux          | Tampermonkey (MV2)                                                                          |
| ⠀✅    | Cent Browser              | v4.3.9.248, 32 bit                | Windows                 | Tampermonkey (MV2)                                                                          |
| ⠀✅    | Cent Browser Beta         | v5.0.1002.182, 64 bit             | Windows                 | Tampermonkey (MV2)                                                                          |
| ⠀✅    | Google Chrome             | v106 — v127                       | Windows, MacOS, Linux   | Tampermonkey (MV2), Tampermonkey (MV3), Violetmonkey, OrangeMonkey, User Javascript and CSS |
| ⠀✅    | Opera GX                  | LVL4 (core: 91) - LVL5 (core 109) | Windows                 | Tampermonkey Opera                                                                          |
| ⠀✅    | Opera                     | v92.0.4561.43                     | Windows                 | Tampermonkey Opera                                                                          |
| ⠀✅    | Vivaldi                   | 5.7.2921.63                       | Windows, Linux          | Tampermonkey (MV2)                                                                          |
| ⠀✅    | Safari                    | v15.6.1                           | MacOS, iOS              | Userscripts                                                                                 |
| ⠀✅    | Kiwi Browser              | v116.0.5845.61                    | Android                 | Tampermonkey (MV2)                                                                          |
| ⠀✅    | Yandex Browser            | v24.4-24.6                        | Windows                 | Tampermonkey (MV2), Tampermonkey (MV3)                                                      |
| ⠀✅    | Arc                       | v1.6.1                            | Windows                 | Tampermonkey (MV3)                                                                          |
| ⠀✅    | Incognition               | v4.1.1.0 (v125)                   | Windows                 | Tampermonkey (MV3), Tampermonkey (MV2)                                                      |

Работа с современной версией Tampermonkey (MV3) не тестировалась в большинстве браузеров. При наличие проблем рекомендуется использовать Tampermonkey Legacy (MV2)

Для активации скрипта в Tampermonkey (MV3) необходимо [включить "Developer Mode"](https://www.tampermonkey.net/faq.php#Q209)

## Протестировано в следующих расширениях для юзерскриптов:

| Статус                                                                                                                                                                                                                                                                       | Браузер | Расширение                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------- |
| ⠀✅                                                                                                                                                                                                                                                                          | Любой   | Tampermonkey Legacy (MV2)                                                          |
| ⠀✅                                                                                                                                                                                                                                                                          | Opera   | Tampermonkey Opera                                                                 |
| ⠀✅                                                                                                                                                                                                                                                                          | Chrome  | Tampermonkey (MV3)                                                                 |
| ⠀❔                                                                                                                                                                                                                                                                          | Safari  | Userscripts                                                                        |
| ⠀✅                                                                                                                                                                                                                                                                          | Любой   | Violetmonkey                                                                       |
| ⠀❔                                                                                                                                                                                                                                                                          | Любой   | [AdGuard Usercripts](https://kb.adguard.com/en/general/userscripts#supported-apps) |
| ⠀[Гайд по установке](https://github.com/ilyhalight/voice-over-translation/wiki/%5BRU%5D-FAQ#%D0%BA%D0%B0%D0%BA-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81-firemonkey)      | Firefox | Firemonkey                                                                         |
| ⠀✅                                                                                                                                                                                                                                                                          | Firefox | Greasemonkey                                                                       |
| ⚠️ RequestIdleCallback сыпет ошибками, но работает                                                                                                                                                                                                                           | Любой   | OrangeMonkey                                                                       |
| ⠀[Гайд по установке](https://github.com/ilyhalight/voice-over-translation/wiki/%5BRU%5D-FAQ#%D0%BA%D0%B0%D0%BA-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81-user-js-and-css) | Любой   | User Javascript and CSS                                                            |

![example btn](https://github.com/ilyhalight/voice-over-translation/blob/master/img/example.png "btn")

\*: Запрещена на территории РФ
