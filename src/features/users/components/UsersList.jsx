import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setUsersData } from '../actions';
import DynamicGrid from '../../../shared/DynamicGrid';

const UsersList = ({ list, isLoading, error, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
          pageable={false}
          pageSize={true}
          columns={columns}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  list: state.usersReducer.toJS().list,
  isLoading: state.usersReducer.toJS().isLoading,
  error: state.usersReducer.toJS().error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(setUsersData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
