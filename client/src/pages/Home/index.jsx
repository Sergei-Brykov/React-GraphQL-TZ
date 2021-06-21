import { Container } from "@material-ui/core";
import { useCallback, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { WorkerList } from "./WorkerList";
import { GET_ALL_WORKERS } from "../../query/getAllWorkers";
import { OfficeTitle } from "./OfficeTitle";
import { AddWorkerForm } from "./AddWorkerForm";
import { Worker } from "../../helpers/worker";
import { LoadingComponent } from "../../components/LoadingComponent";
import {
  getAllWorkersSettings,
  getAllWorkersSettingsDefault,
} from "../../helpers/workersFetchCreators";

export function HomePage() {
  const [workers, setWorker] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");

  const [currentWorker, setCurrentWorker] = useState(null);

  const { data, loading, error, fetchMore } = useQuery(
    GET_ALL_WORKERS,
    getAllWorkersSettingsDefault()
  );

  const fetchAllUsers = useCallback(async () => {
    try {
      const { data } = await fetchMore(getAllWorkersSettings(page, sort));
      setWorker(data.getAllWorkers);
    } catch (e) {
      console.log(e);
    }
  }, [page, sort]);

  useEffect(() => {
    if (!loading && !error && data) {
      setWorker(data.getAllWorkers);
    }
  }, [data, loading]);

  useEffect(() => {
    fetchAllUsers().catch((e) => console.log(e));
  }, [page, sort]);

  return (
    <Container maxWidth="lg" disableGutters>
      <OfficeTitle onClick={() => setCurrentWorker(new Worker({}))} />
      {loading && <LoadingComponent />}
      {!loading && (
        <WorkerList
          page={page}
          sort={sort}
          setPage={setPage}
          setSort={setSort}
          workers={workers}
          setCurrentWorker={setCurrentWorker}
          fetchAllUsers={fetchAllUsers}
        />
      )}
      {currentWorker && (
        <AddWorkerForm
          worker={currentWorker}
          onClose={() => setCurrentWorker(null)}
          fetchAllUsers={fetchAllUsers}
        />
      )}
    </Container>
  );
}
