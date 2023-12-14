import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUsersData } from '../actions';
import DynamicGrid from '../../../shared/DynamicGrid';

export default function UsersList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { list, isLoading, error } = state.usersReducer.toJS();

  useEffect(() => {
    dispatch(setUsersData());
  }, [dispatch]);

  const columns = [
    { field: 'id', title: 'ID', width: 120 },
    { field: 'first_name', title: 'Name', width: 220 },
    { field: 'email', title: 'Email', width: 420 },
    { field: 'gender', title: 'Gender', width: 120 },
    { field: 'status', title: 'Status', width: 120 },
  ];

  return (
    <>
      <h1>UsersList</h1>

      {isLoading && <h2>Loading...</h2>}

      {error && <h2>Error...</h2>}

      {Array.isArray(list) && (
        <DynamicGrid
          data={list}
          total={100}
          pageable={{
            buttonCount: 5,
            type: 'numeric',
          }}
          pageSize={true}
          columns={columns}
        />
      )}
    </>
  );
}
