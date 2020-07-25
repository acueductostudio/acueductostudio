export const createContact = async (
  name: string,
  lastName: string,
  email: string,
  listIds: number[],
  updateEnabled: boolean,
  attributes: object
) => {
  let requestOptions = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.SENDINBLUE_API,
    },
    body: JSON.stringify({
      updateEnabled: updateEnabled,
      email: email,
      listIds: listIds,
      attributes: {
        ...{ NOMBRE: name, APELLIDOS: lastName },
        ...attributes,
      },
    }),
  };

  const response = await fetch(
    "https://api.sendinblue.com/v3/contacts",
    requestOptions
  );

  const data = await response;
  return data;
};
