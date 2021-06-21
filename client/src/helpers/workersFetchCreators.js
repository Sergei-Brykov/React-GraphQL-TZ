export const getAllWorkersSettingsDefault = () => ({
  variables: { skip: 0, sort: "" },
});
export const getAllWorkersSettings = (page, sort) => ({
  variables: { skip: page - 1, sort },
});

export const getWorkerMutationSettings = (worker) => ({
  variables: {
    input: {
      id: worker.id,
      fullName: worker.fullName,
      payment: worker.payment,
      birthday: worker.birthday,
      position: worker.position,
    },
  },
});
