import { WorkerListView } from "./WorkerListView";
import { Worker } from "../../helpers/worker";
import { useMutation } from "@apollo/client";
import { DELETE_WORKER } from "../../query/deleteWorker";
import {
  getAllWorkersSettings,
  getWorkerMutationSettings,
} from "../../helpers/workersFetchCreators";

export function WorkerList({
  workers,
  setCurrentWorker,
  fetchAllUsers,
  page,
  sort,
  setPage,
  setSort,
}) {
  const [deleteMutation] = useMutation(DELETE_WORKER);

  const changeWorker = (worker) => setCurrentWorker(new Worker(worker));
  const deleteWorker = (worker) => {
    deleteMutation(getWorkerMutationSettings(worker)).then(() =>
      fetchAllUsers(getAllWorkersSettings(page))
    );
  };

  return (
    <WorkerListView
      page={page}
      sort={sort}
      setSort={setSort}
      workers={workers}
      changePageHandler={(page) => setPage(page)}
      changeWorker={changeWorker}
      deleteWorker={deleteWorker}
    />
  );
}
