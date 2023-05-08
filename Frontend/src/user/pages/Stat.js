import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import Userstat from './Userstat';

const Stat = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();
  const userId = useParams().userId;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/api/users/stats/${userId}`,
        );
        
        setLoadedUsers(responseData.user);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest,userId]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <Userstat items={loadedUsers} />}
    </React.Fragment>
  );
};

export default Stat;
