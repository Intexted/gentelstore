import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MyContext } from '../context/MyContext';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { setPageControle } = useContext(MyContext);

  useEffect(() => {
    setPageControle((p) => ({ ...p, showMenu: false }));
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
