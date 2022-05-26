export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const capitalizeAll = (string: string) => {
  return string.split(" ").map(capitalize).join(" ");
};

interface NewContact {
  firstName?: string;
  lastName?: string;
  email: string;
  listIds: number[];
  updateEnabled: boolean;
  attributes?: object;
}

export const createContact = async (submittedData: NewContact) => {
  let { firstName, lastName, email, listIds, updateEnabled, attributes } =
    submittedData;
  let capitalizedName = firstName ? capitalize(firstName) : " ";
  let capitalizedLastName = lastName ? capitalize(lastName) : " "; 

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

interface UpdatedContact {
  email: string;
  listIds: number[];
  unlinkListIds: number[];
}

export const updateContact = async (submittedData: UpdatedContact) => {
  let { email, listIds, unlinkListIds } = submittedData;
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
    }),
  };

  const response = await fetch(
    `https://api.sendinblue.com/v3/contacts/${email}`,
    requestOptions
  );

  const data = await response;
  return data;
};

interface MailForHola {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  job: string;
  message: string;
  phoneCheckbox: boolean;
  phone: string;
}

export const sendToHola = async (formData: MailForHola) => {
  let {
    firstName,
    lastName,
    email,
    company,
    job,
    phone,
    phoneCheckbox,
    message,
  } = formData;

  let completeName = capitalize(firstName) + " " + capitalizeAll(lastName);

  let htmlContent = `
    <p>
    Nombre: ${completeName}<br/>
    Email: ${email}<br/>
    Empresa: ${capitalizeAll(company)}<br/>
    Puesto: ${job}</br>
    ${
      phoneCheckbox
        ? `Teléfono: ${phone}<br/>
      <b>Contactar por WhatsApp</b><br/>`
        : ""
    }
    Mensaje: ${message}</p>
  `;

  let requestOptions = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.SENDINBLUE_API,
    },
    body: JSON.stringify({
      sender: {
        email: email,
        name: completeName,
      },
      to: [{ name: "Acueducto", email: "hola@acueducto.studio" }],
      subject: "Nuevo proyecto - desde /contacto",
      replyTo: { email: email, name: completeName },
      textContent: htmlContent,
    }),
  };

  const response = await fetch(
    "https://api.sendinblue.com/v3/smtp/email",
    requestOptions
  );

  const data = await response;
  return data;
};
