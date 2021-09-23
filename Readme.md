## Руководство по созданию подписей
0. [Установка библиотек](#установка-библеотек)
1. [Создание кошелька](#создание-кошелька)
2. [Создание подписи](#создание-подписи)

## Установка библиотек
Для корректной работы нам нужны 
библиотеки bitcore-lib и bitcore-message.

Установить их можно командой
```
npm i bitcore-message
```

## Создание кошелька
В константе `ADDRESS_PREFIX` задается начало кошелька. 

```js
const ADDRESS_PREFIX = 'iz';

const wallet = generateWallet(); 
wallet.keysPair.public // izEmZz1MWrVBo9oMHjPcQpcbB9Teus5zp6G
```


## Создание подписи
Создав кошелек мы можем подписать данные приватным ключем

```js
const wallet = generateWallet();

const signText = `Очень важное сообщение`;
const sign = sign(signText, wallet.keysPair.private);
```