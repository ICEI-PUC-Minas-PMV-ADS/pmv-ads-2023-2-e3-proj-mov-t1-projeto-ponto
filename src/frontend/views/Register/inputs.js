export const inputs = {
  ADMIN: [
    {
      label: "Nome completo",
      name: "name",
      rules: { required: "Campo obrigatório" },
    },
    {
      label: "Email",
      name: "email",
      rules: { required: "Campo obrigatório" },
    },
    {
      label: "Cargo",
      name: "role",
      rules: { required: "Campo obrigatório" },
    },
    {
      label: "Senha",
      type: "password",
      name: "password",
      rules: { required: "Campo obrigatório" },
    },
    {
      label: "Repita sua senha",
      type: "password",
      name: "passwordConfirmation",
      rules: { required: "Campo obrigatório" },
    },
  ],
  WORKER: [
    {
      label: "Nome completo",
      name: "name",
      rules: { required: true },
    },

    { label: "Email", type: "email", name: "email", rules: { required: true } },
    { label: "Cargo", type: "name", name: "role", rules: { required: true } },
    {
      label: "Senha",
      type: "password",
      name: "password",
      rules: { required: true },
    },
    {
      label: "Repita sua senha",
      type: "password",
      name: "passwordConfirmation",
      rules: { required: true },
    },
  ],
  COMPANY: [
    {
      label: "Nome",
      name: "",
      rules: { required: true },
    },

    {
      label: "CNPJ",
      name: "",
      rules: { required: true },
    },
    {
      label: "CEP",
      name: "",
      rules: { required: true },
    },
  ],
};
