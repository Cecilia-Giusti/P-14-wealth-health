import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

/**
 *  Function adds a type at the hook useDispatch
 * @function
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 *  Function adds a type at the hook useSelector
 * @function
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
