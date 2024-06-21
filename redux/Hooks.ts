
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './Store';

// Define and export a custom hook for useDispatch with the correct type
export const useDispatch: () => AppDispatch = () => useReduxDispatch();

// Define and export a custom hook for useAppSelector with the correct type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
