import mongoose from 'mongoose';

import tea from './tea';
import teaType from './teaType';
import user from './user';

const Tea = mongoose.model('Tea', tea);
const TeaType = mongoose.model('TeaType', teaType);
const User = mongoose.model('User', user);

export { Tea, TeaType, User };
