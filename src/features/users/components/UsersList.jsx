import React, { useEffect, useState } from 'react';
import http from '../../../shared/http';
import DynamicGrid from '../../../shared/DynamicGrid';

export default function UsersList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const result = await http.get('users');
        setData(result.data);
      } catch (err) {
      } finally {
      }
    })();
  }, []);

  const columns = [
    { field: 'id', title: 'ID', width: 120 },
    { field: 'first_name', title: 'Name', width: 220 },
    { field: 'email', title: 'Email', width: 420 },
    { field: 'gender', title: 'Gender', width: 120 },
    { field: 'status', title: 'Status', width: 120 },
  ];

  console.log(data);

  return (
    <>
      <div>UsersList</div>
      {Array.isArray(data) && (
        <DynamicGrid
          data={data}
          //   onPageChange={onPageChange}
          total={100}
          //   skip={getCurrentPageNumber(url) - 1}
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
