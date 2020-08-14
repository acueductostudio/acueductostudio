const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const createContact = async (
  name: string,
  lastName: string,
  email: string,
  listIds: number[],
  updateEnabled: boolean,
  attributes: object
) => {
  let capitalizedName = capitalize(name);
  let capitalizedLastName = capitalize(lastName);

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
        ...{ NOMBRE: capitalizedName, APELLIDOS: capitalizedLastName },
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

export const updateContact = async (
  email: string,
  listIds: number[],
  unlinkListIds: number[]
) => {
  let requestOptions = {
    method: "PUT",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.SENDINBLUE_API,
    },
    body: JSON.stringify({
      listIds: listIds,
      unlinkListIds: unlinkListIds,
      // attributes: {
      //   ...attributes,
      // },
    }),
  };

  const response = await fetch(
    `https://api.sendinblue.com/v3/contacts/${email}`,
    requestOptions
  );

  const data = await response;
  return data;
};
