import useForm from "../../hooks/useForm";
import { Box, Button } from "@material-ui/core";
import { MainInput } from "../../components/MainInput";
import { ErrorView } from "../../components/ErrorView";
import { isValidDate } from "../../helpers/IsValidDate";

export function WorkerForm({
  worker,
  buttonTitle,
  fetchWorker,
  updateData,
  onClose,
}) {
  const form = useForm({
    initial: worker,
    validate(values) {
      const errors = {};

      if (values.fullName.trim().length < 2) {
        errors.fullName = "Please input worker name";
      }
      if (values.position.trim().length < 2) {
        errors.fullName = "Please input worker position";
      }
      if (!isValidDate(values.birthday)) {
        errors.birthday = "Please input correct date";
      }
      if (+values.payment < 0) {
        errors.birthday = "Please input correct payment";
      }

      return errors;
    },
    onSubmit(values) {
      fetchWorker({
        variables: {
          input: {
            id: values.id,
            fullName: values.fullName,
            position: values.position,
            birthday: values.birthday,
            payment: +values.payment,
          },
        },
      }).then(() => {
        onClose();
        updateData();
      });
    },
  });

  const errorsArray = Object.entries(form.errors);

  return (
    <form onSubmit={form.onSubmit}>
      <Box width={800} mt={2}>
        <MainInput
          error={form.errors.fullName}
          onChange={form.onChange("fullName")}
          value={form.values.fullName}
          placeholder="Full name"
        />
        <MainInput
          mt={2}
          error={form.errors.position}
          onChange={form.onChange("position")}
          value={form.values.position}
          placeholder="Position"
        />
        <MainInput
          error={form.errors.birthday}
          onChange={form.onChange("birthday")}
          placeholder="Birthday"
          type="date"
          mt={2}
          value={form.values.birthday || "0001-01-01"}
        />
        <MainInput
          error={form.errors.payment}
          onChange={form.onChange("payment")}
          value={form.values.payment}
          placeholder="Payment"
          type="number"
          mt={2}
        />
        {errorsArray.map((err, index) => (
          <ErrorView key={index} error={err[1]} />
        ))}
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button
            type="submit"
            disabled={form.disabledForm}
            variant="contained"
            color="primary"
          >
            {buttonTitle}
          </Button>
        </Box>
      </Box>
    </form>
  );
}
