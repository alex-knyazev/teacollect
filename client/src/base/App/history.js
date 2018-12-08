import { createBrowserHistory } from 'history';
import store from 'store';

const history = createBrowserHistory();

history.listen(location => {
  const { pathname } = location;

  const session = store.get('session');
  const date = new Date().toISOString();
  const newRoute = {
    name: pathname,
    visitAt: date,
  };
  if (!session || !session.length) {
    store.set('session', [newRoute]);
  } else {
    store.set('session', [...session, newRoute]);
  }
});

const sendToServerSessionData = session => {
  if (!session) return;
  const body = { user: { id: '5c02be8455038828b9d1225f', email: 'alex@gmail.com' }, session };
  fetch('http://localhost:3004/saveSessionsData', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: '5c02be8455038828b9d1225f',
    },
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .then(() => {
      console.log(123);
    });
};

setTimeout(() => {
  sendToServerSessionData(store.get('session'));
  store.remove('session');
}, 1000);

export default history;
