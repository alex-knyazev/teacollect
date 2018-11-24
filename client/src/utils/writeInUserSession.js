import Cookies from 'cookies.js'

const writeInUserSession = (data) => {
  const { path } = data;
  const now = new Date();
  const newData = {
    name: path,
    visiAt: now,
  };
  const sessionData = Cookies.get('session');
  if(!sessionData) {
    Cookies.set('session', [newData]);
  }
  Cookies.set('session', [...sessionData, newData] ;
}