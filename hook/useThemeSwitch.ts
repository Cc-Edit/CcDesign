import { useAppDispatch, useAppSelector } from '@/store';
import { switchTheme } from '@/store/slice/Global';
import ThemeModeContext from '@/config/context/ThemeModeContext';
import { useContext } from 'react';

const useThemeSwitch = () => {
  const dispatch = useAppDispatch();
  const themeMode = useContext(ThemeModeContext);
  const theme = useAppSelector(state => state.global.theme);
  function changeTheme(isDark: boolean) {
    themeMode.toggleColorMode(isDark ? 'dark' : 'light');
    dispatch(switchTheme(isDark ? 'dark' : 'light'));
  }
  return {
    theme,
    changeTheme
  };
};
export default useThemeSwitch;