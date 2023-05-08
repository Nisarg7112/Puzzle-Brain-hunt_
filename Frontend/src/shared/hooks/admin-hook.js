import { useState, useCallback, useEffect } from 'react';

let logoutTimer;

export const useAdmin = () => {
  const [tokenadmin, setTokenadmin] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [adminId, setUserId] = useState(false);
  
  const adminlogin = useCallback((uid, tokenadmin, expirationDate) => {
    setTokenadmin(tokenadmin);
    setUserId(uid);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        adminId: uid,
        tokenadmin: tokenadmin,
        expiration: tokenExpirationDate.toISOString()
      })
    );
  }, []);

  const adminlogout = useCallback(() => {
    setTokenadmin(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    if (tokenadmin && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(adminlogout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [tokenadmin, adminlogout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData &&
      storedData.tokenadmin &&
      new Date(storedData.expiration) > new Date()
    ) {
      adminlogin(storedData.adminId, storedData.tokenadmin, new Date(storedData.expiration));
    }
  }, [adminlogin]);

  return { tokenadmin, adminlogin, adminlogout, adminId };
};