/**
 * @description store文件夹存放所有 redux model 相关的代码文件
 */
import logger from "redux-logger"
import RcReduxModel from 'rc-redux-model'
import { applyMiddleware, combineReducers, createStore } from 'redux';
// 引入写好的model
import { globalModel } from "./globalModel";
import resumeModel from './resumeModel';
import templateModel from './templateModel';

const reduxModel = new RcReduxModel([globalModel, resumeModel, templateModel])

const reducerList = combineReducers(reduxModel.reducers)

export default createStore(reducerList, applyMiddleware(reduxModel.thunk, logger))