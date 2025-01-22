import { Table as BaseTable } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import styled from "styled-components";

export const DefaultTableProps = {
  size: "small" as SizeType,
  rowKey: "id",
  tableLayout: "fixed" as any,
  pagination: false as any,
};
export const Table = styled(BaseTable)`
  &&& {
    .ant-table-wrapper {
      overflow: hidden;
    }
    .ant-table-container {
      border-radius: 0px;
    }
    .ant-table-thead th {
      font-weight: normal;
      color: rgba(102, 102, 102, 1);
      text-align: center !important;
      font-size: 0.8rem;
    }
    .ant-table-cell {
      font-size: 0.7rem;
      white-space: nowrap;
      padding: 12px 4px !important;
    }
    .ant-checkbox .ant-checkbox-inner {
      width: 14px !important;
      height: 14px !important;
    }
    .ant-checkbox .ant-checkbox-inner:after {
      inset-inline-start: 20% !important;
    }

    tr.ant-table-row-selected > td {
      background: #eee;
    }
  }
`;
