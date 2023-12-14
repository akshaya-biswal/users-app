import { Grid, GridColumn } from '@progress/kendo-react-grid';

const DynamicGrid = ({
  data,
  columns,
  onPageChange,
  total,
  skip,
  pageable,
  pageSize,
}) => {
  return (
    <Grid
      data={data}
      onPageChange={(e) => onPageChange(e)}
      total={total}
      skip={skip}
      pageable={pageable}
      pageSize={pageSize}
    >
      {columns.map((column) => (
        <GridColumn
          key={column.field}
          field={column.field}
          title={column.title}
          width={column.width}
        />
      ))}
    </Grid>
  );
};

export default DynamicGrid;
