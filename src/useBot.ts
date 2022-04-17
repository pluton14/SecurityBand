import axios from 'axios';
import { useState, useEffect } from 'react';

// Платон Волгарев, [04/17/22 12:30 PM]
// [Forwarded from Даниль Сафин]
// Функционал бота:

// Начать участие в КС с указанным ид с возможностью настройки:
//  - Врмени участия (через указнное время бот отключается)
//  - Количества сделанных ставок
//  - Мин цены
//  - Фактор активности (при 100 - ставка перебивается сразу же, значения меньше - увеличивают период ожидания и шанс не поставить ставку вовсе)
 
// Остановить участие в КС с указанным ид

// Подписаться на событие КС с указанным ИД с возможностю реакции на любые из указанных событий:
//  - Достигнута указанная цена
//  - КС завершена
//  - КС продлена
//  - Осталось n времени до конца КС

// Платон Волгарев, [04/17/22 12:30 PM]
// [Forwarded from Даниль Сафин]
// POST api/Bot/Start/{id}
// -[minPrice]
// -[maxTime]
// -[maxBidCount]
// -[activityFactor]

// Платон Волгарев, [04/17/22 12:30 PM]
// [Forwarded from Даниль Сафин]
// POST 

// Платон Волгарев, [04/17/22 12:30 PM]
// [Forwarded from Даниль Сафин]
// POST Api/Bot/Subscribe/{Id}
// minPrice, timeToEnd, isEnd, isProlong

export function useBot<T>() {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState<boolean>();
    const [error, setError] = useState<unknown>();

    async function start(id) {
        try {
            setLoading(true);

            const res = axios.post<any>(`api/Bot/Stop/${id}`);

            setData(res.data);
        } catch(error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }


    async function stop(id, opts) {
        try {
            setLoading(true);

            const res = axios.post<any>(`api/Bot/Stop/${id}`, opts);

            setData(res.data);
        } catch(error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }



    return [data, loading, error];
}