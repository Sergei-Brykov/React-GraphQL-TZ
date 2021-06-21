import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import React, { useCallback, useMemo } from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Box } from "@material-ui/core";

export function WorkerTableHead({ setSort, sort }) {
  const handleSort = useCallback(
    (value) => () => {
      setSort((sort) => {
        if (sort.includes(value)) {
          return sort === value ? `-${value}` : "";
        }
        return value;
      });
    },
    []
  );

  return (
    <TableHead>
      <TableRow>
        <HeadCell
          sort={sort}
          handleSort={handleSort}
          value={"fullName"}
          name="Full Name"
        />
        <HeadCell
          sort={sort}
          handleSort={handleSort}
          value={"position"}
          name="Position"
        />
        <HeadCell
          sort={sort}
          handleSort={handleSort}
          value={"birthday"}
          name="Birthday"
        />
        <HeadCell
          sort={sort}
          handleSort={handleSort}
          value={"payment"}
          name="Payment"
        />
        <HeadCell sort={sort} handleSort={handleSort} value={"_id"} name="ID" />

        <TableCell align="right">Settings</TableCell>
      </TableRow>
    </TableHead>
  );
}

function HeadCell({ handleSort, name, value, sort }) {
  const icon = useMemo(() => {
    if (sort.includes(value)) {
      if (sort.startsWith("-")) {
        return <ArrowDropDownIcon />;
      } else {
        return <ArrowDropUpIcon />;
      }
    }
    return null;
  }, [sort, value]);

  return (
    <TableCell
      style={{ cursor: "pointer", userSelect: "none" }}
      onClick={handleSort(value)}
    >
      <Box
        minWidth={100}
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
      >
        {name}
        {icon}
      </Box>
    </TableCell>
  );
}
